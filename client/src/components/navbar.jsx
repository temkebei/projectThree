import React, { Component } from 'react';
import "./style.css/navbar.css";
import { Link } from 'react-router-dom';
class NavBar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper" id="navbar">
            <a href="/" className="brand-logo">Recipes-App</a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {this.props.isAuthed ?
                <li onClick={this.props.logout} style={{ cursor: "pointer" }} id="logout">LOGOUT</li> :
                <React.Fragment>
                  <li><a href="/login">LOGIN</a></li>
                  <li><a href="/register">REGISTER</a></li>
                </React.Fragment>
              }
            </ul>
          </div>
        </nav>
        <ul className="sidenav" id="mobile-demo">
          <li><a href="">LOGIN</a></li>
          <li><a href="">REGISTER</a></li>
          <li><a href="/">HOME</a></li>
        </ul>
      </div>
    )

  }
}
export default NavBar;