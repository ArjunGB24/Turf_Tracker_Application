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
          class="navbar-toggler my-toggler bg-black dropdown-toggle"
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
          class="collapse navbar-collapse  navbar-custom m-0 p-0"
          id="navbar-custom"
        >
          <ul class="navbar-nav  ml-auto linktab">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/userhome">
                {sessionStorage.getItem("name")}
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
                    View & Book
                  </a>
                </li>
                <div
                  class="dropdown-menu option"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a class="dropdown-item" href="/vewground">
                    Grounds
                  </a>
                  <a class="dropdown-item" href="/viewhall">
                    Courts
                  </a>
                </div>
              </div>
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
                    MyBookings
                  </a>
                </li>
                <div
                  class="dropdown-menu option"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a class="dropdown-item" href="/viewbookings_user">
                    Grounds
                  </a>
                  <a class="dropdown-item" href="/viewcourtbookings_user">
                    Courts
                  </a>
                </div>
              </div>
            </li>
           </ul>

          <form class="d-flex">
            <button
              class="btn btn-outline-success navBtnReg"
              type="submit"
              onClick={redirectlogin}
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
