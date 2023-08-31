import { useState } from "react";
import axios from "axios";
import "../home/bg.css";
import sweetalert from "sweetalert";
import "bootstrap/dist/js/bootstrap.min.js";
function Login() {
  const [Email, setEmail] = useState("");

  const finduser = async () => {
    console.log("method call");
    const user = { email: Email };
    const response = await axios.post("http://localhost:8081/forgetPass", user);
    console.log(response.data);
    if (response.data === "success") {
      sweetalert(
        "Success",
        "Your password is sent to your mail please check ",
        "success"
      );
    } else {
      sweetalert("Error", response.data, "error");
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
                    Enter your email id which is registered to Kridangan App
                    account you will get password on your email
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

                    <div class="d-grid ">
                      <button
                        class="btn navBtnLogin btn-outline-success  text-uppercase fw-bold"
                        type="button"
                        onClick={finduser}
                      >
                        Send
                      </button>
                    </div>

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
