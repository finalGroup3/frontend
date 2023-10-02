import * as React from "react";
import { useState, useEffect, useRef } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import RoomIcon from "@mui/icons-material/Room";
import StarIcon from "@mui/icons-material/Star";
import axios from "axios";
import shape1 from "../../assets/stop.png";
import shape2 from "../../assets/red-left.png";
// import shape2 from "../../assets/car_red.png";
import "./Map.css";
import SideNavBar from "./SideNavBar.jsx"

import Map, {
  NavigationControl,
  Layer,
  Source,
  GeolocateControl,
  Marker,
  Popup,
} from "react-map-gl";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});
var zzz = [];
function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude]);
  console.log(position);
  zzz.push(position.coords.longitude);
  zzz.push(position.coords.latitude);
}

function errorLocation() {
  setupMap([31.9539, 35.9106]);
}

function setupMap(center) {
  return center;
}

function MApp({ user }) {
  const [pins, setPins] = useState([]);
  const [newPlace, setNewPlace] = useState(null);
  const [star, setStar] = useState(0);
  const [start, setStart] = useState(zzz);
  const [currentPlaceId, setCurrentPlaceId] = useState(null);
  const [end, setEnd] = useState([zzz]);
  const [coords, setCoords] = useState([]);
  const [restName, setRestName] = useState("");
  const [restImg, setRestImg] = useState("");
  const [restDesc, setRestDesc] = useState("");
  const [restAddress, setRestAddress] = useState("");
  const [restRating, setRestRating] = useState(0);
  const [restPrice, setRestPrice] = useState("");
  const [initialViewState, setInitialViewState] = useState({
    longitude: 35.9106,
    latitude: 31.9539,
    zoom: 10,
  });

  useEffect(() => {
    getRoute();
  }, [end, start]);

  const getRoute = async () => {
    const response = await axios.get(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=pk.eyJ1IjoiYW1yb2Jhbmlpc3NhIiwiYSI6ImNsa3RtZXZ6aTBheG8zZnFvZXA2NmJ1dmoifQ.niUJad6HoR8yfURjiAS5Dw`
    );

    const data = response.data;
    console.log(data);
    const coords = data.routes[0].geometry.coordinates;
    setCoords(coords);
  };
  const geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "feature",
        geometry: {
          type: "LineString",
          coordinates: [...coords],
        },
      },
    ],
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPin = {
      name: restName,
      img:restImg,
      description: restDesc,
      location: restAddress,
      rating: restRating,
      price: restPrice,
      long: newPlace.lng,
      lat: newPlace.lat,
    };

    try {
      const res = await axios.post(
        `${"http://localhost:3005/"}restaurants`,
        newPin,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );
      setPins([...pins, res.data]);
      setNewPlace(null);
    } catch (err) {
      console.log(err);
    }
  };
  const lineStyle = {
    id: "roadLayer",
    type: "line",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "blue",
      "line-width": 4,
      "line-opacity": 0.75,
    },
  };

  const geoControlRef = useRef();

  useEffect(() => {
    if (geoControlRef.current) {
      geoControlRef.current.trigger();
    }
  }, [geoControlRef.current]);

  const handleMarkerClick = (id, lat, long) => {
    setCurrentPlaceId(id);
    setInitialViewState({
      ...initialViewState,
      longitude: long,
      latitude: lat,
    });
  };

  useEffect(() => {
    const getPins = async () => {
      try {
        const allPins = await axios.get(
          `${"http://localhost:3005/"}restaurants`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("userToken")}`,
            },
          }
        );
        setPins(allPins.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPins();
  }, []);

  const handleClick = (e) => {
    const newEnd = e.lngLat;
    const endPoint = Object.keys(newEnd).map((item) => newEnd[item]);
    setEnd(endPoint);
  };
  const addNewPlace = (e) => {
    if (user?.user?.role === "owner") {
      const { lat, lng } = e.lngLat;
      console.log(e);
      setNewPlace({
        lat,
        lng,
      });
    }
  };

  return (
    <>
    <div className="sidenavbar-container"> 
    <SideNavBar/>
</div>
    <div className="map-container"> 
    
      {coords && (
        <Map
          {...initialViewState}
          onClick={handleClick}
          className='map'
          onMove={(evt) => setInitialViewState(evt.initialViewState)}
          mapboxAccessToken={"pk.eyJ1IjoiYW1yb2Jhbmlpc3NhIiwiYSI6ImNsa3RtZXZ6aTBheG8zZnFvZXA2NmJ1dmoifQ.niUJad6HoR8yfURjiAS5Dw"}
          style={{ width: "100vw", height: "100vh" }}
          mapStyle='mapbox://styles/mapbox/streets-v9'
          onDblClick={addNewPlace}>
          {pins.map((p) => (
            <>
              <Marker latitude={p.lat} longitude={p.long}>
                <RoomIcon
                  style={{
                    fontSize: 7 * 6,
                    color: "tomato",
                    cursor: "pointer",
                  }}
                  onClick={() => handleMarkerClick(p.id, p.lat, p.long)}
                />
              </Marker>
              {p.id === currentPlaceId && (
                <section className='pppp'>
                  <Popup
                    className='popup'
                    key={p.id}
                    latitude={p.lat}
                    longitude={p.long}
                    closeButton={true}
                    closeOnClick={false}
                    onClose={() => setCurrentPlaceId(null)}
                    anchor='left'>
                    <div className='mapcard'>
                      <img src={p.img} />

                      <section className='restinfoo'>
                        <label>Place</label>
                        <h4 className='place'>{p.name}</h4>
                        <label>Review</label>
                        <p className='desc'>{p.description}</p>
                        <label>Rating</label>
                        <div className='stars'>
                          {Array(p.rating).fill(<StarIcon className="star" />)}
                          {/* {p.rating} */}
                        </div>
                        <label>Information</label>
                        <span className='username'></span>
                      </section>
                    </div>
                  </Popup>
                </section>
              )}
            </>
          ))}

          <div style={{ position: "absolute", top: 10, right: 10 }}>
            <NavigationControl />
          </div>
          <GeolocateControl ref={geoControlRef} />
          <Source id='routeSource' type='geojson' data={geojson}>
            <Layer {...lineStyle} />
          </Source>

          {newPlace && (
            <>
              <Marker latitude={newPlace.lat} longitude={newPlace.lng}>
                <RoomIcon
                  style={{
                    fontSize: 7 * 6,
                    color: "tomato",
                    cursor: "pointer",
                  }}
                />
              </Marker>
              <Popup
                latitude={newPlace.lat}
                longitude={newPlace.lng}
                closeButton={true}
                closeOnClick={false}
                onClose={() => setNewPlace(null)}
                anchor='left'>
                <div className="mapform">
                  <form onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input
                      placeholder='Enter your restaurant name'
                      autoFocus
                      onChange={(e) => setRestName(e.target.value)}
                    />

                    <label>Image</label>
                    <input
                      placeholder='Enter your restaurant name'
                      autoFocus
                      onChange={(e) => setRestImg(e.target.value)}
                    />

                    <label>Description</label>
                    <textarea
                      placeholder='Say us something about this place.'
                      onChange={(e) => setRestDesc(e.target.value)}
                    />
                    <label>location</label>
                    <input
                      placeholder='enter your address.'
                      onChange={(e) => setRestAddress(e.target.value)}
                    />
                    <label>Rating</label>
                    <select onChange={(e) => setRestRating(e.target.value)}>
                      <option value='1'>⭐</option>
                      <option value='2'>⭐⭐</option>
                      <option value='3'>⭐⭐⭐</option>
                      <option value='4'>⭐⭐⭐⭐</option>
                      <option value='5'>⭐⭐⭐⭐⭐</option>
                    </select>
                    <label>price</label>
                    <input
                      placeholder='enter your price range.'
                      onChange={(e) => setRestPrice(e.target.value)}
                    />

                    <button type='submit' className='submitButton'>
                      Add Pin
                    </button>
                  </form>
                </div>
              </Popup>
            </>
          )}
          
        </Map>
      )}
      </div>
    </>
  );
}
export default MApp;