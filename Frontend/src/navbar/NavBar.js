import React from "react";
import "./NavBar.css";
import letsplay from "../images/kridangan.png";

const NavBar = () => {
  const redirectLogin = () => {
    window.location.href = "/login";
  };

  const redirectReg = () => {
    window.location.href = "/register";
  };

  return (
    <div className="navbarrr">
      <nav className="navbar navbar-expand-lg fixed-top navbar-custom">
        <div className="footer-logo">
          <a href="/">
            <img
              src={letsplay}
              className="img-fluid wow animated bounceIn slower"
              alt=""
            />
          </a>
        </div>

        <button
          className="navbar-toggler my-toggler bg-light bgmenu"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-custom"
          aria-controls="navbar-custom"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon menuicon"></span>
        </button>
        <div className="collapse navbar-collapse navbar-custom" id="navbar-custom">
          <ul className="navbar-nav ml-auto linktab">
            <li className="">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="">
              <a className="nav-link" href="/aboutus">
                About Us
              </a>
            </li>
            <li className="nav-item active">
              <a
                className="btn navbtn navBtnReg"
                onClick={redirectLogin}
                href="/login"
              >
                Sign In
              </a>{" "}
            </li>
            <li className="nav-item active">
              <a
                className="btn navbtn navBtnReg"
                onClick={redirectReg}
                href="/register"
              >
                Sign Up
              </a>{" "}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
