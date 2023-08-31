import { useState } from "react";
import axios from "axios";
import "../home/bg.css";
import sweetalert from "sweetalert";
import "bootstrap/dist/js/bootstrap.min.js";

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const finduser = async () => {
    const user = { email: Email, password: Password };

    const response = await axios.post("http://localhost:8081/login", user);

    console.log(response.data);
    if (response.data === null || response.data === "") {
      sweetalert("error", "Invalid Credential..", "error");
    } else {
      sweetalert("success", "You have a login successfully..", "success");

      localStorage.setItem("role", response.data.roleId);
      localStorage.setItem("userid", response.data.user_id);
      sessionStorage.setItem("name",response.data.name);

      if (response.data.status === "Active") {
        if (response.data.roleId === 1) {
          window.location.href = "/adminhome";
        } else if (response.data.roleId === 2) {
          window.location.href = "/ownerhome";
        } else {
          window.location.href = "/userhome";
        }
      } else {
        sweetalert(
          "Error",
          "You are temporarily block! Please contact admin",
          "error"
        );
      }
    }
  };

  return (
    <div className="">
      <div className="main pb-4">
        <div class="container">
          <div class="row abc">
            <div class="col-sm-9 col-md-7 col-lg-5 mx-auto my-0">
              <div class="">
                <div class="p-4 p-sm-5 mt-5 login">
                  <h5 class="card-title text-center mb-5 fw-light fs-5">
                    Sign In
                  </h5>
                  <form>
                    <div class="mb-4">
                       <label>Email address</label> 

                      <input
                        type="email"
                        class="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                    <div class="mb-4">
                       <label>Password</label> 

                      <input
                        type="password"
                        class="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>

                    <div class="d-grid ">
                      <a
                        class="btn navBtnLogin btn-outline-success text-light text-uppercase fw-bold"
                        type="button"
                        onClick={finduser}
                      >
                        Sign in
                      </a>
                    </div>
                    <h6 class="mt-4">
                      <a href="/forgot_password">Forgot Password?</a>
                    </h6>
                    <hr class="my-4" />
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
export default Login;
