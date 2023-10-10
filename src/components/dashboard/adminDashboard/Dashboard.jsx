import "./Dashboard.scss";

import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideNavBar from "./SideNavBar2";
import Chat from "../../chat/Chat";
import DashboardPage from "./dashboardPage/DashboardPage";
import Room from "../../chat/Room";
import { Unstable_Popup as Popup } from "@mui/base/Unstable_Popup";
import Table from "../table/Table";
import waveLine from './WaveLine.svg'
import {useContext} from 'react'
import { RestaurantsContext } from "../../restaurants/RestaurantContext";
import WavesAnimation from "../waves";
const Dashboard = () => {
  const [component, setComponent] = useState("Dashboard");
  const state = useContext(RestaurantsContext);

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

          {/* <section className="top-nav-contain">
            <section className="top-nav-admin">
              <span className="notfi-admiv">
              <Popup/>
              </span>
            </section>
          </section> */}

          {component == "HelpCenter" ? (
            <Room />
          ) : component == "Dashboard" ? (
            <DashboardPage />
          ) :  component == "Restaurants" ? (
           <div>
           <h3 className="dashboard-page-title">Restaurants</h3>
           {/* <img className='waveLine' src={waveLine}/> */}
           <WavesAnimation className='waveLine'/>
           {/* <p className="dashboard-page-des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus impedit vero, maxime voluptatibus voluptates molestiae velit assumenda, fugiat tenetur ipsam odio repellendus molestias facere architecto odit? Error iure necessitatibus fuga!</p> */}
            <Table data={state.restaurantsList} />
            </div>) :  component == "Hotels" ? (
           <div>
           <h3 className="dashboard-page-title">Hotels</h3>
           <img className='waveLine' src={waveLine}/>
           {/* <p className="dashboard-page-des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus impedit vero, maxime voluptatibus voluptates molestiae velit assumenda, fugiat tenetur ipsam odio repellendus molestias facere architecto odit? Error iure necessitatibus fuga!</p> */}
            <Table data={state.hotelsList} />
            </div>) :  component == "Activties" ? (
           <div>
           <h3 className="dashboard-page-title">Activties</h3>
           <img className='waveLine' src={waveLine}/>
           {/* <p className="dashboard-page-des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus impedit vero, maxime voluptatibus voluptates molestiae velit assumenda, fugiat tenetur ipsam odio repellendus molestias facere architecto odit? Error iure necessitatibus fuga!</p> */}
            <Table data={state.activitiesList} />
            </div>) :  component == "Restaurants" ? (
           <div>
           <h3 className="dashboard-page-title">Restaurants</h3>
           <img className='waveLine' src={waveLine}/>
           {/* <p className="dashboard-page-des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus impedit vero, maxime voluptatibus voluptates molestiae velit assumenda, fugiat tenetur ipsam odio repellendus molestias facere architecto odit? Error iure necessitatibus fuga!</p> */}
            <Table data={""} />
            </div>):
            
            
            (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
