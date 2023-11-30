import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="max-width header">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="Zomato-logo"
        className="header-logo"
      ></img>
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <i className="fa-solid fa-location-dot absolute-center location-icon"/>
              <div>Chandigarh</div>
            </div>
            <i className="fa-solid fa-caret-down absolute-center" />
          </div>
          <div className="location-search-separator"></div>
          <div className="header-searchbar">
            <i className="fa-solid fa-magnifying-glass absolute-center search-icon" />
            <input
              placeholder="Search for restaurant, cuisine or a dish"
              className="search-input"
            ></input>
          </div>
        </div>
          <div className="profile-wrapper">
            <img
              src="https://b.zmtcdn.com/data/user_profile_pictures/ac1/ef45d37f2b4afd7e9d1ddc7fe0660ac1.jpg?fit=around%7C100%3A100&amp;crop=100%3A100%3B%2A%2C%2A"
              alt="profile"
              className="header-profile-image"
            ></img>
            <span className="header-username">Abhinav</span>
            <i className="fa-solid fa-angle-down absolute-center profile-options-icon" />
          </div>
      </div>
    </div>
  );
}

export default Header;
