import { useState, useEffect } from "react";
import axios from "axios";
import "./addground.css";

function AddHall() {
  useEffect(() => {
    if (
      localStorage.getItem("role") === "null" ||
      localStorage.getItem("role") != "2"
    ) {
      window.location.href = "/login";
    }
    getAllHalls();
  }, []);

  const [image, setImage] = useState(null);
  const [hallName, setHallName] = useState("");
  const [city, setCity] = useState("");
  const [gethallDetail, setHallDetail] = useState({});

  const getAllHalls = async () => {
    const hall = { hall_id: localStorage.getItem("hallid") };
    const response = await axios.post(
      "http://localhost:8081/findByHallId",
      hall
    );
    setHallDetail(response.data);
    setImage(response.data.hall_image);
    console.log(response.data);
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div className="main mx-auto ">
      <div class="container-fluid px-1 mx-auto main1">
        <div class="row  p-0 mx-auto my-0 ">
          <div class="col-xl-7 col-lg-8 col-md-9 col-11 mx-auto text-center">
            <div class="card">
              <h5 class="text-center mb-4">Add Court Information</h5>
              <form
                action="http://localhost:8081/addHall"
                method="post"
                enctype="multipart/form-data"
                class="form-card"
              >
                <input
                  type="file"
                  onChange={onImageChange}
                  className="filetype"
                  name="ground_image"
                />
                <img src={image} alt="." className="myimgpic" />

                {/* <input
                  type="hidden"
                  onChange={onImageChange}
                  className="filetype"
                  name="ground_id"
                /> */}

                <div class="row justify-content-between text-left">
                  <div class="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <label class="form-control-label px-3">
                      Enter court name
                    </label>{" "}
                    <input
                      type="text"
                      id="fname"
                      name="hallname"
                      placeholder={gethallDetail.hall_name}
                      onChange={(e) => {
                        setHallName(e.target.value);
                      }}
                    />{" "}
                  </div>
                  <div class="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <label class="form-control-label px-3">
                      Enter city
                    </label>{" "}
                    <input
                      type="text"
                      id="lname"
                      name="city"
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                      placeholder={gethallDetail.city}
                    />{" "}
                  </div>
                </div>
                <div class="row justify-content-between text-left">
                  <div class="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <label class="form-control-label px-3">
                      Enter full address
                    </label>{" "}
                    <input
                      type="text"
                      id="email"
                      name="loction"
                      placeholder={gethallDetail.loction}
                    />{" "}
                  </div>
                  <div class="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <label class="form-control-label px-3">
                      Enter court rent(in ₹)
                    </label>{" "}
                    <input
                      type="text"
                      id="mob"
                      name="amount"
                      placeholder={gethallDetail.amount}
                    />{" "}
                  </div>
                </div>

                <div class="row justify-content-between text-left">
                  <div class="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <label class="form-control-label px-3">
                      Enter Sports Name
                    </label>{" "}
                    <input
                      type="text"
                      id="email"
                      name="sports_name"
                      placeholder=""
                      value={gethallDetail.sports_name}
                    />{" "}
                  </div>

                  <div class="form-group col-sm-12 flex-row d-flex">
                    {" "}
                    <label class="form-control-label px-3">
                      TimeSlot<span class="text-danger"> *</span>
                    </label>{" "}
                    <br />
                    <label class="form-control-label px-3">
                      09:00 AM to 12:00 PM{" "}
                    </label>
                    <input
                      type="checkbox"
                      id="mob"
                      name="morning"
                      placeholder=""
                    />{" "}
                    <label class="form-control-label px-3">
                      12:00 PM to 03:00 PM{" "}
                    </label>
                    <input type="checkbox" name="afternoon" placeholder="" />{" "}
                    <label class="form-control-label px-3">03:00 PM to 06:00 PM</label>
                    <input
                      type="checkbox"
                      id="mob"
                      name="evening"
                      placeholder=""
                    />{" "}
                  </div>

                  <div class="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <input
                      type="hidden"
                      id="mob"
                      name="ownerid"
                      value={localStorage.getItem("userid")}
                      placeholder=""
                    />{" "}
                  </div>
                  <div class="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <input
                      type="hidden"
                      id="mob"
                      name="hallid"
                      value={localStorage.getItem("hallid")}
                      placeholder=""
                    />{" "}
                  </div>
                </div>

                <div class="row justify-content-end">
                  <div class="form-group col-sm-6">
                    {" "}
                    <input
                      type="submit"
                      //   onClick={addNewUser}
                      class="btn-block btn-success navBtnReg"
                      value="Add Court"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddHall;
