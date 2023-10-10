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

const Dashboard = () => {
  const [component, setComponent] = useState("Dashboard");
  const [users, setUsers] = useState("Dashboard");
  const state = useContext(RestaurantsContext);



  const usersFromDB = async () => {
    try {
      const response = await superagent
        .get(`${import.meta.env.VITE_DATABASE_URL}/allusers`)
        .set("authorization", `Bearer ${cookie.load("auth")}`);
   
      
      setUsers(response.body);
      console.log(users, "++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
    } catch (error) {
      console.error(error);
    }
  };
 

  
  useEffect(() => {
  
    usersFromDB()
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
          ) : component == "Dashboard" ? (
            <DashboardPage />
          ) : component == "Restaurants" ? (
            <div>
              <h3 className='dashboard-page-title'>Restaurants</h3>

              <DashboardTable
                data={state.restaurantsList}
                type={"Restaurants"}
              />
            </div>
          ) : component == "Hotels" ? (
            <div>
              <h3 className='dashboard-page-title'>Hotels</h3>
              {/* <img className='waveLine' src={waveLine} /> */}
              <DashboardTable data={state.hotelsList} type={"Hotels"} />
            </div>
          ) : component == "Activties" ? (
            <div>
              <h3 className='dashboard-page-title'>Activties</h3>
              {/* <img className='waveLine' src={waveLine} /> */}
              <DashboardTable data={state.activitiesList} type={"Activties"} />
            </div>
          ) : component == "Users" ? (
            <div>
              <h3 className='dashboard-page-title'>Users</h3>
              <UsersTable data={users} />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
