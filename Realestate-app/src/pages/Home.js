import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import bg from "../images/homeBG.jpg"
import logo from "../images/rentr.png"
import {ConnectButton, Select, DatePicker} from "web3uikit"

const Home = () => {

  return (
    <>
      <div className="container" style={{backgroundImage:`url(${bg})`}}>
        <div className="containerGradient"></div>
      </div>

      <div className="topBanner">
        <div>
          <img className="logo" src={logo} alt="logo"></img>
        </div>
        <div className="tabs">
          <div className="selected">Places To Stay</div>
          <div>Experiences</div>
          <div>Online Experiences</div>
        </div>

        <div className="lrContainers">
          <ConnectButton/>
        </div>
      </div>

      <div className="tabContent">
        <div className="searchFields">
        <div className="inputs">
          Location
          <Select
              defaultOptionIndex={0}
              onChange={(data)  =>  console.log(data.label)}
              options={[
                {
                  id:"lg",
                  label:"Lagos, Nigeria"
                },

                {
                  id:"lg",
                  label:"Lekki, Lagos"
                },

                {
                  id:"lg",
                  label:"Ikeja, Lagos"
                },

                {
                  id:"lg",
                  label:"Abuja"
                },
              ]}
          />

        </div>
        <div className="vl"/>
        <div className="inputs">
          Check In
          <DatePicker
            id="CheckIn"
            onChange={(event) => console.log(event.date)}
          />
        </div>
        <div className="vl"/>
        <div className="inputs">
          Check Out
          <DatePicker
            id="CheckOut"
            onChange={(event) => console.log(event.date)}
          />

        </div>
        <div className="vl"/>
        <div className="inputs">
          Guests
        
        </div>
      </div>
      </div>
    </>
  );
};

export default Home;
