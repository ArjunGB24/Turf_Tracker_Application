import { useEffect, useState } from "react";
import axios from "axios";

function ViewHall() {
  const [hallList, setHallList] = useState([]);

  useEffect(() => {
    if (
      localStorage.getItem("role") === "null" ||
      localStorage.getItem("role") != "2"
    ) {
      window.location.href = "/login";
    }
    getAllHalls();
  }, []);

  const getAllHalls = async () => {
    const ground = { owner_id: localStorage.getItem("userid") };
    const response = await axios.post(
      "http://localhost:8081/getHallByOwnerId",
      ground
    );
    setHallList(response.data);
    console.log(response.data);
  };
  const Edit = async (hallid) => {
    console.log(">>>>" + hallid);
    localStorage.setItem("hallid", hallid);
    window.location.href = "/editground";
  };

  const deletes = async (hallid) => {
    console.log(">>>>" + hallid);
    const ground1 = { hall_id: hallid };
    const res = await axios.post("http://localhost:8081/findByHallId", ground1);
    console.log(res.data);

    const ground = {
      ground_id: hallid,
      loction: res.data.loction,
      amount: res.data.amount,
      city: res.data.city,
      hall_image: res.data.hall_image,
      hall_image: res.data.hall_image,
      owner_id: res.data.owner_id,
      sports_name: res.data.sports_name,
      timeslots: {
        ground_id: res.data.timeslots.hall_id,
        slot_id: res.data.timeslots.slot_id,
        status: res.data.timeslots.status,
        time_slot: res.data.timeslots.time_slot,
      },
    };
    const response = await axios.post(
      "http://localhost:8081/deleteHallByHallId",
      ground
    );
    getAllHalls();
    alert(response.data);
    //  localStorage.setItem("groundid", groundid);
    // window.location.href = "/editground";
  };

  return (
    <div class=" row  viewGround" style={{ backgroundColor: "black" }}>
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

                <p class="mt-3 h1 col-12">{item.hall_name}</p>
                <p class="col-5 h5 mt-3">Address : {item.loction}</p>
                <p class="col-4 h5 mt-3 ">City : {item.city}</p>

                {/* <p class="col-3 h5 mt-3">Rent per time slots:{item.amount}</p> */}
                <p class="col-3 h5 mt-3">Rent per time slots: &#8377;{item.amount}</p>
 
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
                    Edit(item.hall_id);
                  }}
                >
                  Update
                </button>

                <button
                  class="btn col-5 h5 ml-5 mt-3 btn-outline-success navBtnLogin mt-3 "
                  type="button"
                  // value={view}
                  onClick={() => {
                    deletes(item.hall_id);
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
export default ViewHall;

function timeSlot(time) {
  //alert(time);
  localStorage.setItem("tslots", time);
  //const [timeslot, time] = useState("");
}
