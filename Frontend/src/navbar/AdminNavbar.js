import React from "react";
import "./NavBar.css";
import letsplay from "../images/kridangan.png";

const AdminNavBar = () => {
  const redirectLogin = () => {
    window.location.href = "/login";
    localStorage.setItem("role", null);
  };

  return (
    <div className="m-0 p-0">
      <nav className="navbar navbar-expand-lg fixed-top navbar-custom">
        <img className="logo1" src={letsplay} alt="Lets Play Logo" />

        <button
          className="navbar-toggler my-toggler bg-light"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-custom"
          aria-controls="navbar-custom"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse navbar-custom m-0 p-0" id="navbar-custom">
          <ul className="navbar-nav ml-auto linktab">
            <li className="nav-item">
              <a className="nav-link active" href="/adminhome">
                {sessionStorage.getItem("name")}
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/viewuser">
                View Users
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/viewowner">
                View Owners
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="/viewground_admin"
              >
                View Grounds
              </a>
            </li>

            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="/viewhall_admin"
              >
                View Halls
              </a>
            </li>

            <li>
              <div class="dropdown nav-item ">
                <li
                  class=" dropdown-toggle bg-black dropdown-toggle "
                  id="dropdown-basic"
                  id1="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <a class="nav-link active" aria-current="page">
                    ViewBookings
                  </a>
                </li>
                <div
                  class="dropdown-menu option"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a class="dropdown-item" href="/viewbooking_admin">
                    Grounds
                  </a>
                  <a class="dropdown-item" href="/viewcourtbooking_admin">
                    Courts
                  </a>
                </div>
              </div>
            </li>
          </ul>

          <form className="d-flex">
            <button
              className="btn btn-outline-success navBtnReg"
              type="button"
              onClick={redirectLogin}
            >
              Log Out
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default AdminNavBar;