import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Navbar(ps) {
  
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${ps.mode} bg-${ps.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {ps.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  about
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {ps.contact}
                </a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-primary" type="submit">
                  Search
                </button>
              </form> */}
            <div
              className={`form-check form-switch text-${
                ps.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                onClick={ps.darkmode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable dark mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Set title here",
};
export default Navbar;
