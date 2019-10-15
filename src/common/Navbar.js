import React, { Component } from "react";
import { Link } from "react-router-dom";
import auntenticate from "../utils/authenticate";
// const Ract = require('react');

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title
    };
  }

  componentDidMount() {
    //Se ejecuta despues de pintarse
    // llamadas a API
    // Cualquie accion con un side effect
  }

  componentDidUpdate(prevProps, prevState) {
    //Se ejecuta cada vez que se reciben nuevos props o se actualiza el estado
    //Actualizar el estado segun un cambio en el componente
  }

  render() {
    const { isAuthenticated, payload } = auntenticate();
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand" href="index.html">
            {this.state.title}
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              {isAuthenticated ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/me">
                      Hola {payload.email} !!!
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/new">
                      Crea un post
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/logout">
                      Logout
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">
                      signup
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar; //<ES6 Babel
//module.exports = Navbar; ES5 CommonJs
