import "./Dashboard.scss";
import { useState,useEffect } from "react";
import SideNavBar from "./SideNavBar2";
import DashboardPage from "./dashboardPage/DashboardPage";
import Room from "../../chat/Room";
import DashboardTable from "../table/Table";
import waveLine from "./WaveLine.svg";
import { useContext } from "react";
import { RestaurantsContext } from "../../restaurants/RestaurantContext";
import superagent from "superagent";
import cookie from "react-cookies";
import UsersTable from "../table/UsersTable";
import BookingsTable from "../table/BookingsTable";

const Dashboard = () => {
  const [component, setComponent] = useState("Dashboard");
  const [users, setUsers] = useState([]);
  const [bookings, setBookings] = useState([]);
  const state = useContext(RestaurantsContext);



  const usersFromDB = async () => {
    try {
      const response = await superagent
        .get(`${import.meta.env.VITE_DATABASE_URL}/allusers`)
        .set("authorization", `Bearer ${cookie.load("auth")}`);
   
      
      setUsers(response.body);
    
    } catch (error) {
      console.error(error);
    }
  };
 
  const bookingsFromDB = async () => {
    try {
      const response = await superagent
        .get(`${import.meta.env.VITE_DATABASE_URL}/booking`)
        .set("authorization", `Bearer ${cookie.load("auth")}`);
        setBookings(response.body);
    } catch (error) {
      console.error(error);
    }
  };
 

  
  useEffect(() => {
    usersFromDB()
    bookingsFromDB()
  }, []);


  const currComponent = (component) => {
    setComponent(component);
  };

  return (
    <>
      <div>
        <div className='main-dashboard'>
          <SideNavBar
            className='profile-navbar'
            currComponent={currComponent}
          />

          {component == "HelpCenter" ? (
            <Room />
          ) 
          
          : component == "Dashboard" ? (
            <DashboardPage />
          )
          
          : component == "Restaurants" ? (
            <div>
              <h3 className='dashboard-page-title'>Restaurants</h3>

              <DashboardTable
                data={state.restaurantsList}
                type={"Restaurants"}
              />
            </div>
          ) 
          
          : component == "Hotels" ? (
            <div>
              <h3 className='dashboard-page-title'>Hotels</h3>
            
              <DashboardTable data={state.hotelsList} type={"Hotels"} />
            </div>
          )
          
          : component == "Activties" ? (
            <div>
              <h3 className='dashboard-page-title'>Activties</h3>
        
              <DashboardTable data={state.activitiesList} type={"Activties"} />
            </div>
          )

          : component == "Bookings" ? (
            <div>
              <h3 className='dashboard-page-title'>Activties</h3>

              <BookingsTable data={bookings} type={"Bookings"} bookingsFromDB={bookingsFromDB}  />
            </div>
          )
          
          
          : component == "Users" ? (
            <div>
              <h3 className='dashboard-page-title'>Users</h3>
              <UsersTable data={users} />
            </div>
          )
          
          
          : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
