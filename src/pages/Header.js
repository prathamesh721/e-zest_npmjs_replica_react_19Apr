import React from "react";
class Header extends React.Component {
  render() {
    return (
      <div className="searchBar-wrapper">
          <div className="searchBar-logo">
              <img src="./npm_logo.png" alt="" />
          </div>
        <div className="searchBar">
          <input type="text" name="searchInput" />
          <label htmlFor="searchInput">Search</label>
        </div>
        <div className="searchBtn">
          <button className="signUp-btn">Sing Up</button>
          <button className="singIn-btn">Sign In</button>
        </div>
      </div>
    );
  }
}

export default Header;
