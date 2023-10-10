import * as React from "react";
import { useState, useEffect, useRef, useContext } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import RoomIcon from "@mui/icons-material/Room";
import { LoginContext } from "../Auth/login/LogInContext";
import StarIcon from "@mui/icons-material/Star";
import axios from "axios";
import "./Map.scss";
import Map, {
  NavigationControl,
  Layer,
  Source,
  GeolocateControl,
  Marker,
  Popup,
} from "react-map-gl";
import SideNavBar from "../reels/SideNavBar";
import { Rating } from "@mui/material";

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

function MApp() {
  const state = useContext(LoginContext);

  const [locationType, setLocationType] = useState("resturant");
  const [resturant, setResturant] = useState([]);
  const [hotel, setHotel] = useState([]);
  const [activity, setActivity] = useState([]);
  const [newPlace, setNewPlace] = useState(null);
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
    const getRoute = async () => {
      const response = await axios.get(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=pk.eyJ1IjoiYW1yb2Jhbmlpc3NhIiwiYSI6ImNsa3RtZXZ6aTBheG8zZnFvZXA2NmJ1dmoifQ.niUJad6HoR8yfURjiAS5Dw`
      );

      const data = response.data;
      console.log(data);
      const coords = data.routes[0].geometry.coordinates;
      setCoords(coords);
    };

    getRoute();
  }, [end, start]);
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
    const userId = state.user.id;

    e.preventDefault();
    const newPin = {
      name: restName,
      img: restImg,
      description: restDesc,
      location: restAddress,
      rating: restRating,
      price: restPrice,
      ownerId: userId,
      long: newPlace.lng,
      lat: newPlace.lat,
    };

    try {
      if (locationType === "resturant") {
        const res = await axios.post(
          `${import.meta.env.VITE_DATABASE_URL}/restaurants`,
          newPin,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("userToken")}`,
            },
          }
        );
        setResturant([...resturant, res.data]);
        setNewPlace(null);
      } else if (locationType === "hotel") {
        const res = await axios.post(
          `${import.meta.env.VITE_DATABASE_URL}/hotel`,
          newPin,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("userToken")}`,
            },
          }
        );
        setHotel([...hotel, res.data]);
        setNewPlace(null);
      } else {
        const res = await axios.post(
          `${import.meta.env.VITE_DATABASE_URL}/activity`,
          newPin,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("userToken")}`,
            },
          }
        );
        setActivity([...activity, res.data]);
        setNewPlace(null);
      }
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
          `${import.meta.env.VITE_DATABASE_URL}/restaurants`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("userToken")}`,
            },
          }
        );
        setResturant(allPins.data);
      } catch (err) {
        console.log(err);
      }
    };
    const getPins2 = async () => {
      try {
        const allPins = await axios.get(
          `${import.meta.env.VITE_DATABASE_URL}/activity`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("userToken")}`,
            },
          }
        );
        setActivity(allPins.data);
      } catch (err) {
        console.log(err);
      }
    };
    const getPins3 = async () => {
      try {
        const allPins = await axios.get(
          `${import.meta.env.VITE_DATABASE_URL}/hotel`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("userToken")}`,
            },
          }
        );
        setHotel(allPins.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPins();
    getPins2();
    getPins3();
  }, []);

  const handleClick = (e) => {
    const newEnd = e.lngLat;
    const endPoint = Object.keys(newEnd).map((item) => newEnd[item]);
    setEnd(endPoint);
  };

  const addNewPlace = (e) => {
    if (state.user?.role === "owner") {
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
      <div className='ssss'>
        <div className="sidenavbar-container">
         
        </div> 
        <SideNavBar />
        <div className="map-container">
          {coords && (
            <Map
              {...initialViewState}
              onClick={handleClick}
              className='map'
              onMove={(evt) => setInitialViewState(evt.initialViewState)}
              mapboxAccessToken={
                "pk.eyJ1IjoiYW1yb2Jhbmlpc3NhIiwiYSI6ImNsa3RtZXZ6aTBheG8zZnFvZXA2NmJ1dmoifQ.niUJad6HoR8yfURjiAS5Dw"
              }
              style={{ width: "100vw", height: "100vh" }}
              mapStyle="mapbox://styles/mapbox/streets-v9"
              onDblClick={addNewPlace}
            >
              {resturant.map((p) => (
                <>
                  <Marker latitude={p.lat} longitude={p.long}>
                    <RoomIcon
                      style={{
                        fontSize: 7 * 6,
                        color: "red",
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
                          {/* <span
                            className='close-iconn'
                            onClick={() => setCurrentPlaceId(null)}>
                            &#215;
                          </span> */}
                          <img src={p.img} />
                          <div className='stars'>
                            {/* {Array(p.rating).fill(
                              <StarIcon className='star' />
                            )} */}
                          </div>
                          <section className='restinfoo'>
                            {/* <label>Name</label> */}
                            <h4 className='place'>{p.name}</h4>
                            {/* <label>Description</label> */}
                            <p className='desc'>{p.description}</p>
                            {/* <label>Price</label> */}
                            <p className='desc'>{p.price}JD</p>
                            <Rating name="read-only" value={p.rating} readOnly />
                          </section>
                        </div>
                      </Popup>
                    </section>
                  )}
                </>
              ))}{" "}
              {hotel.map((p) => (
                <>
                  <Marker latitude={p.lat} longitude={p.long}>
                    <RoomIcon
                      style={{
                        fontSize: 7 * 6,
                        color: "#FCA41C",
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
                          {/* <span
                            className='close-iconn'
                            onClick={() => setCurrentPlaceId(null)}>
                            &#215;
                          </span> */}
                          <img src={p.img} />
                          <div className='stars'>
                            {/* {Array(p.rating).fill(
                              <StarIcon className='star' />
                            )} */}
                          </div>
                          <section className='restinfoo'>
                            {/* <label>Name</label> */}
                            <h4 className='place'>{p.name}</h4>
                            {/* <label>Description</label> */}
                            <p className='desc'>{p.description}</p>
                            {/* <label>Price</label> */}
                            <p className='desc'>{p.price}JD</p>
                          </section>
                        </div>
                      </Popup>
                    </section>
                  )}
                </>
              ))}{" "}
              {activity.map((p) => (
                <>
                  <Marker latitude={p.lat} longitude={p.long}>
                    <RoomIcon
                      style={{
                        fontSize: 7 * 6,
                        color: "#0C7592",
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
                          {/* <span
                            className='close-iconn'
                            onClick={() => setCurrentPlaceId(null)}>
                            &#215;
                          </span> */}
                          <img src={p.img} />
                          <div className='stars'>
                            {/* {Array(p.rating).fill(
                              <StarIcon className='star' />
                            )} */}
                          </div>
                          <section className='restinfoo'>
                            {/* <label>Name</label> */}
                            <h4 className='place'>{p.name}</h4>
                            {/* <label>Description</label> */}
                            <p className='desc'>{p.description}</p>
                            {/* <label>Price</label> */}
                            <p className='desc'>{p.price}JD</p>
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
                    {/* <div className='mapform'> */}
                      {/* <div
                        className='close-iconn'
                        onClick={() => setNewPlace(null)}>
                        &#215;
                      </div> */}
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
                        <section className="two-inputs">
                           <label>Type</label>
                        <select
                          onChange={(e) => setLocationType(e.target.value)}
                        >
                          <option value="resturant" name="resturant">
                            restaurant
                          </option>
                          <option value="hotel" name="hotel">
                            hotel
                          </option>
                          <option value="activities" name="activities">
                            activities
                          </option>
                        </select>

                        <label>Rating</label>
                        <select onChange={(e) => setRestRating(e.target.value)}>
                          <option value='1'>⭐</option>
                          <option value='2'>⭐⭐</option>
                          <option value='3'>⭐⭐⭐</option>
                          <option value='4'>⭐⭐⭐⭐</option>
                          <option value='5'>⭐⭐⭐⭐⭐</option>
                        </select>
                        <label>Price</label>
                        <input
                          placeholder='price range.'
                          onChange={(e) => setRestPrice(e.target.value)}
                        />
                        </section>
                       
                      {/* <section className="two-inputs"> */}
                         <label>Address</label>
                        <input
                          placeholder='Enter your address.'
                          onChange={(e) => setRestAddress(e.target.value)}
                        />
                        
                      {/* </section> */}
                       
{/* 
                        <label>Rating</label>
                        <select onChange={(e) => setRestRating(e.target.value)}>
                          <option value='1'>⭐</option>
                          <option value='2'>⭐⭐</option>
                          <option value='3'>⭐⭐⭐</option>
                          <option value='4'>⭐⭐⭐⭐</option>
                          <option value='5'>⭐⭐⭐⭐⭐</option>
                        </select> */}

                       

                        <button type='submit' className='submitButton'>
                          Add Pin
                        </button>
                      </form>
                    {/* </div> */}
                  </Popup>
                </>
              )}
            </Map>
          )}
        </div>
      </div>
    </>
  );
}
export default MApp;
