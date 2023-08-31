import React from "react";
import "./NavBar.css";
import letsplay from "../images/kridangan.png";

const AdminNavBar = () => {
  const redirectlogin = () => {
    window.location.href = "/login";
    localStorage.setItem("role", null);
  };

  return (
    <div className="m-0 p-0">
      <nav class="navbar navbar-expand-lg fixed-top navbar-custom  ">
        {/* <a class="navbar-brand" href="/#">
          Lets Play
        </a> */}
        <img class="logo1" src={letsplay}></img>

        <button
          class="navbar-toggler my-toggler bg-light"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-custom"
          aria-controls="navbar-custom"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse navbar-custom m-0 p-0"
          id="navbar-custom"
        >
          <ul class="navbar-nav  ml-auto linktab">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/ownerhome">
              {sessionStorage.getItem("name")}
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/addground">
                Add Grounds
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/addhall">
                Add Halls
              </a>
            </li>

            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="/viewgroundowner"
              >
                My Activities
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
                    View Bookings
                  </a>
                </li>
                <div
                  class="dropdown-menu option"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a class="dropdown-item" href="/viewbooking_owner">
                    Grounds
                  </a>
                  <a class="dropdown-item" href="/viewcourtbooking_owner">
                    Courts
                  </a>
                </div>
              </div>
            </li>

            {/* <li class="nav-item active">
              <a
                class="btn navbtn navBtnReg"
                onclick={redirectlogin}
                href="\login"
              >
                Log Out
              </a>{" "}
            </li> */}
          </ul>

          <form class="d-flex">
            <button
              class="btn btn-outline-success navBtnReg"
              type="button"
              onClick={redirectlogin}
            >
              Log Out
            </button>
          </form>
        </div>
      </nav>

      {/* <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
            </ul>
            <form class="d-flex">
              <button
                class="btn btn-outline-success navBtnReg"
                type="button"
                // onClick={redirectreg}
              >
                Logout
              </button>
            </form>
          </div>
        </div>
      </nav> */}
    </div>
  );
};

export default AdminNavBar;
