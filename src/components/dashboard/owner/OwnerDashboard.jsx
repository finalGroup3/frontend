import React, { useState, useContext, useEffect } from "react";
import { LoginContext } from "../../Auth/login/LogInContext";
import Map from '../../map/Map'; 
import "./OwnerDashboard.scss"; 
const OwnerDashboard = () => {
  const [notifications, setNotifications] = useState([]);
  const [missing, setMissing] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [showCreateRestaurantMessage, setShowCreateRestaurantMessage] = useState(false);
  const state = useContext(LoginContext);
  const handleCreateRestaurant = () => {
    setShowCreateRestaurantMessage(true);
    setTimeout(() => {
      setShowCreateRestaurantMessage(false);
    }, 9900000); 

    console.log("Create new restaurant");
  };

  return (
    <>
    <div className="map-section">
        
      </div>
    <div className="inner">
    <nav id="sidebar">
  <div className="sidebar__container--logo">
    <div className="logo">W</div>
    <h1>Wanderlust</h1>
  </div>
  <div className="sidebar-links">
    <button className="sidebar-btn">Home</button>
    <button
          className="sidebar-btn"
          onClick={() => {
            setShowMap(!showMap);
            handleCreateRestaurant();
          }}
        >
          Create Service
        </button>
        {showMap && <Map />}
       
    <button className="sidebar-btn">Category</button>
    <button className="sidebar-btn">Raport</button>
    <button className="sidebar-btn">Stock</button>
    <button className="sidebar-btn">Financial</button>
    <button className="sidebar-btn">About us</button>
  </div>
</nav>

    <div className="menu">
      <div className="line" />
    </div>
    <main>
      <div className="main__col--1">
        <h2>Overview</h2>
      </div>
      <div className="main__col--2">
        <div className="box box--1">
          <div className="box--logo">
            <span className="iconify" data-inline="false" data-icon="fluent:people-32-filled" style={{"color":"#ffffff","font-size":"40px"}} />
          </div>
          <div className="box--content">
            <p className="box--title">BOOK</p>
            <p className="box--number">40</p>
          </div>
        </div>
        <div className="box box--2">
          <div className="box--logo">
            <span className="iconify" data-inline="false" data-icon="clarity:group-line" style={{"color":"#ffffff","font-size":"40px"}} />
          </div>
          <div className="box--content">
            <p className="box--title">Cancel</p>
            <p className="box--number">11</p>
          </div>
        </div>
        <div className="box box--3">
          <div className="box--logo">
            <span className="iconify" data-inline="false" data-icon="ant-design:cloud-download-outlined" style={{"color":"#ffffff","font-size":"40px"}} />
          </div>
          <div className="box--content">
            <p className="box--title">View</p>
            <p className="box--number">779</p>
          </div>
        </div>
      </div>
      <div className="main__col--3">
        <div className="graphic--container">
          
        </div>
        
      </div>
    </main>
    <aside>
      
      <div className="transaction--container">
        <h3>Booked list</h3>
        <div className="transaction">
          <div className="logo-grow">
            <span className="iconify" data-inline="false" data-icon="akar-icons:arrow-up-left" style={{"color":"#ffffff","font-size":"24px"}} />
          </div>
          <div className="transaction--infos">
            <h6>Deposit Waste</h6>
            <p>Hotel Garden</p>
          </div>
        </div>
       
        <div className="transaction">
          <div className="logo-grow">
            <span className="iconify" data-inline="false" data-icon="akar-icons:arrow-up-left" style={{"color":"#ffffff","font-size":"24px"}} />
          </div>
          
          <div className="transaction--infos">
            <h6>Deposit Waste</h6>
            <p>Hotel Garden</p>
          </div>
          
        </div>
      </div>
    </aside>
  </div>
  </>
  );
};

export default OwnerDashboard;