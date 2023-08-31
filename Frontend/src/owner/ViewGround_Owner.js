import { useEffect, useState } from "react";
import axios from "axios";

function ViewGround() {
  const [groundList, setGroundList] = useState([]);
  const [hallList, setHallList] = useState([]);

  useEffect(() => {
    if (
      localStorage.getItem("role") === "null" ||
      localStorage.getItem("role") != "2"
    ) {
      window.location.href = "/login";
    }
    getAllGrounds();
  }, []);

  const getAllGrounds = async () => {
    const ground = { owner_id: localStorage.getItem("userid") };
    const response = await axios.post(
      "http://localhost:8081/getGroundByOwnerId",
      ground
    );
    setGroundList(response.data.grounds);
    setHallList(response.data.halls);
    console.log(response.data);
  };
  const Edit = async (groundid) => {
    console.log(">>>>" + groundid);
    localStorage.setItem("groundid", groundid);
    window.location.href = "/editground";
  };

  //To editHall
  const EditHall = async (hallid) => {
    console.log(">>>>" + hallid);
    localStorage.setItem("hallid", hallid);
    window.location.href = "/edithall";
  };

  const deletes =  (groundid) => {
   
    axios.post(
      `http://localhost:8081/deleteGroundByGroundId/${groundid}`
    ).then(res=>{
      console.log(res.data);
      getAllGrounds();
     
    }).catch(err=>{
      console.log(err)
    })
    
    //  localStorage.setItem("groundid", groundid);
    // window.location.href = "/editground";
  };

  return (
    <div class=" row  viewGround" style={{ backgroundColor: "black" }}>
      {groundList.map((item) => {
        const timeslot = item.timeslots;
        return (
          <div class="mt-5">
            <div class="mx-auto my-2 col-10 p-3 bg-light rounded row mt-5">
              <div class="col-12">
                <img
                  class="w-100 my-auto "
                  src={item.ground_image}
                  style={{ borderRadius: "10px", height: "400px" }}
                />
              </div>
              <div class="col-12 row">
                <div class="form-group">
                  {/* <input
                    type="date"
                    class="form-control"
                    id="dateOfBirth"
                    name="date"
                  /> */}
                </div>

                <p class="mt-3  h1 col-12">{item.ground_name}</p>
                {/* <p class="mt-3  h5 mt-3">Type :{item.type}</p> */}
                <p class="col-5 h5 mt-3">Address :{item.loction}</p>
                <p class="col-4 h5 mt-3">City :{item.city}</p>

                <p class="col-3 h5 mt-3">Rent per time slots:₹ {item.amount}</p>
                {/* <p class="col-3 h5 mt-3">
                  Rent per time slots: ₹ {item.amount}
                </p>    */}
                <h4 class="col-4 mt-2 mx-auto"> Time slots </h4>
                <div class="col-10 mx-auto ml-5 row">
                  {item.timeslots.map((time) => {
                    return (
                      <h6
                        type="lable"
                        class="col-3 ml-2 mt-1 mx-auto"
                        name="time"
                        value={time.time_slotid}
                        onClick={() => {
                          timeSlot(time.slot_id);
                        }}
                      >
                        {time.time_slot}
                      </h6>
                    );
                  })}
                </div>
                <button
                  class="btn col-5 ml-5 h5 mt-3 btn-outline-success navBtnLogin mt-3 "
                  type="button"
                  // value={view}
                  onClick={() => {
                    Edit(item.ground_id);
                  }}
                >
                  Update
                </button>

                <button
                  class="btn col-5 h5 ml-5 mt-3 btn-outline-success navBtnLogin mt-3 "
                  type="button"
                  // value={view}
                  onClick={() => {
                    deletes(item.ground_id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}

      {hallList.map((item) => {
        const timeslot = item.timeslots;
        return (
          <div class="mt-5">
            <div class="mx-auto my-2 col-10 p-3 bg-light rounded row mt-5">
              <div class="col-12">
                <img
                  class="w-100 my-auto "
                  src={item.hall_image}
                  style={{ borderRadius: "10px", height: "400px" }}
                />
              </div>
              <div class="col-12 row">
                <div class="form-group">
                  {/* <input
                    type="date"
                    class="form-control"
                    id="dateOfBirth"
                    name="date"
                  /> */}
                </div>

                <p class="mt-3 h1 col-12">{item.hallname}</p>
                <p class="col-5 h5 mt-3">Address : {item.loction}</p>
                <p class="col-4 h5 mt-3 ">City : {item.city}</p>

                <p class="col-3 h5 mt-3">Rent per time slots:{item.amount}</p>

                <h4 class="col-4 mt-2 mx-auto"> Time slots</h4>
                <div class="col-10 mx-auto ml-5 row">
                  {item.timeslots.map((time) => {
                    return (
                      <h6
                        type="lable"
                        class="col-3 ml-2 mt-1 mx-auto"
                        name="time"
                        value={time.time_slotid}
                        onClick={() => {
                          timeSlot(time.slot_id);
                        }}
                      >
                        {time.time_slot}
                      </h6>
                    );
                  })}
                </div>
                <button
                  class="btn col-5 ml-5 h5 mt-3 btn-outline-success navBtnLogin mt-3 "
                  type="button"
                  // value={view}
                  onClick={() => {
                    EditHall(item.hall_id);
                  }}
                >
                  Update
                </button>

                <button
                  class="btn col-5 h5 ml-5 mt-3 btn-outline-success navBtnLogin mt-3 "
                  type="button"
                  // value={view}
                  onClick={() => {
                    deletes(item.ground_id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ViewGround;

function timeSlot(time) {
  //alert(time);
  localStorage.setItem("tslots", time);
  //const [timeslot, time] = useState("");
}
