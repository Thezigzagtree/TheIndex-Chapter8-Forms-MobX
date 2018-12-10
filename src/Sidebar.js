import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import AddAuthorCard from "./AddAuthorCard";
import AddBookModal from "./AddBookModal";
// Logo
import logo from "./assets/theindex.svg";

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <img src={logo} className="logo" alt="the index logo" />
        <section>
          <h4 className="menu-item active">
            <NavLink to="/authors">AUTHORS</NavLink>
          </h4>
          <h4 className="menu-item">
            <NavLink to="/books">BOOKS</NavLink>
          </h4>
        </section>
        <h4 className="menu-item">
          <AddAuthorCard />
        </h4>
        <h4 className="menu-item">
          <AddBookModal />
        </h4>
      </div>
    );
  }
}

export default Sidebar;
