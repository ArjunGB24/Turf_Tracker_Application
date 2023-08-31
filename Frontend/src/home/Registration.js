import { useState } from "react";
import sweetalert from "sweetalert";
import axios from "axios";
import "../home/bg.css";

import "bootstrap/dist/js/bootstrap.min.js";
function Registration() {
  const [Name, setName] = useState("");
  const [Mobile, SetMobile] = useState("");
  const [Email, setEmail] = useState("");
  const [Pass, setPassword] = useState("");
  const [City, setCity] = useState("");
  const status = "Active";
  const [Role, setRole] = useState("");

  const validate = () => {
    var regEx = /^[a-zA-Z\s]+$/;
    if (Name === "") {
      sweetalert("Error", "Please enter Name", "error");
      return false;
      // } else if (!isNaN(Name)) {
      //   sweetalert("Error", "Please enter valid Name", "error");
      //   return false;
    } else if (!regEx.test(Name)) {
      sweetalert("Error", "Please enter characters and space only", "error");
      return false;
    } else if (Mobile === "") {
      sweetalert("Error", "Please enter Mobile number", "error");
      return false;
    } else if (isNaN(Mobile) || Mobile.length <= 9 || Mobile.length >= 11) {
      sweetalert("Error", "Please enter valid Mobile number", "error");
      return false;
    } else if (Email === "") {
      sweetalert("Error", "Please enter email", "error");
      return false;
    } else if (Email.indexOf("@") <= 0) {
      sweetalert("Error", "Please enter valid email", "error");
      return false;
    } else if (
      Email.charAt(Email.length - 4) !== "." &&
      Email.charAt(Email.length - 3) !== "."
    ) {
      sweetalert("Error", "Please enter valid email", "error");
      return false;
    } else if (Pass === "") {
      sweetalert("Error", "Please enter password", "error");
      return false;
    } else if (Pass.length <= 5 || Pass.length > Pass) {
      // sweetalert("Error", "Please enter Strong password", "error");
      sweetalert("Error", "Password must be atleast 6 character", "error");

      return false;
    } else if (City === "") {
      sweetalert("Error", "Please enter city", "error");
      return false;
    } else if (!isNaN(City)) {
      sweetalert("Error", "Please enter valid city", "error");
      return false;
    } else if (Role === "") {
      sweetalert("Error", "Please select role", "error");
      return false;
    }
    finduser();
  };

  const addNewUser = async () => {
    const newuser = {
      name: Name,
      mobile: Mobile,
      email: Email,
      password: Pass,
      city: City,
      status: status,
      roleId: Role,
    };

    let url = "http://localhost:8081/registerUser";
    await axios.post(url, newuser);
    sweetalert("success", "You have registered successfully...", "success");
    window.location.href = "/login";
  };

  const finduser = async () => {
    console.log("method call");
    const user = { email: Email };
    const response = await axios.post("http://localhost:8081/checkEmail", user);
    console.log(response.data);
    if (response.data === null || response.data === "") {
      alert("Invalid Credential");
      addNewUser();
    } else {
      sweetalert("Error", "Email already used", "error");
    }
  };

  const redirectlogin = () => {
    window.location.href = "/login";
  };

  const redirectreg = () => {
    window.location.href = "/Register";
  };

  return (
    <div className="main1 ">
      <div className=" pb-0">
        <div class="container ">
          <div class="row ">
            <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div class="">
                <div class=" px-5 pt-5 pb-1 mt-5 login">
                  <h5 class="card-title text-center mb-3 fw-light fs-5">
                    Sign Up
                  </h5>
                  <form>
                    <div class="mb-4">
                      <input
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        placeholder="Enter your name"
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                      <p id="name1"></p>
                    </div>
                    <div class="mb-4">
                      <input
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        placeholder="Enter mobile number"
                        onChange={(e) => {
                          SetMobile(e.target.value);
                        }}
                      />
                      <p id="mobileno1"></p>
                    </div>{" "}
                    <div class="mb-4">
                      <input
                        type="email"
                        class="form-control"
                        id="floatingInput"
                        placeholder="Enter email"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                      <p id="email1"></p>
                    </div>{" "}
                    <div class="mb-4">
                      <input
                        type="password"
                        class="form-control"
                        id="floatingInput"
                        placeholder="Enter password"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                      <p id="pwd1"></p>
                    </div>{" "}
                    <div class="mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        placeholder="Enter city"
                        onChange={(e) => {
                          setCity(e.target.value);
                        }}
                      />
                      <p id="city1"></p>
                    </div>
                    <div class="mb-3 rdo radio-buttons">
                      <h6 class="reg">Register as</h6>
                      <input 
                      className="rdo"
                      type="radio"
                      value="1"
                      name="role"
                      onChange={(e) =>{
                        setRole(e.target.value);
                      }}
                      />{" "}
                      Admin
                      <input
                        className="rdo"
                        type="radio"
                        value="2"
                        name="role"
                        onChange={(e) => {
                          setRole(e.target.value);
                        }}
                      />{" "}
                      Owner
                      <input
                        className="rdo"
                        type="radio"
                        value="3"
                        name="role"
                        onChange={(e) => {
                          setRole(e.target.value);
                        }}
                      />{" "}
                      User
                    </div>
                    <div class="d-grid ">
                      <a
                        class="btn mb-3 text-light navBtnLogin btn-outline-success  text-uppercase fw-bold"
                        type="button"
                        onClick={validate}
                      >
                        Sign Up
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Registration;
