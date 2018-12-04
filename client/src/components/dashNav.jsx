import React, { Component } from 'react';
import "./style.css/dashNav.css";
import { Link } from 'react-router-dom';

//Dash Navbar- Users Dashboard

class DashNav extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper white" id="hello">
          <ul id="nav-mobile" className="hide-on-med-and-down">
            <li><Link to={"/recipes"} className="black-text">| RECIPES | </Link></li>
            <li><Link to={"/newRecipe"} className="black-text">| NEW RECIPE |</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}
export default DashNav;

