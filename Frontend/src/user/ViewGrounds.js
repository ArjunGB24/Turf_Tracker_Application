import { useEffect, useState } from "react";
import axios from "axios";
import sweetalert from "sweetalert";
import swal from "sweetalert2";
import "./ViewGrounds.css";

function ViewGround() {
  const [currentDate, setdate] = useState("");
  const [bookedSlotsList, setBookSlotList] = useState([]);

  const redirectlogin = () => {
    window.location.href = "/login";
    localStorage.setItem("role", null);
  };

  const [groundList, setGroundList] = useState([]);
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    if (
      localStorage.getItem("role") === "null" ||
      localStorage.getItem("role") != "3"
    ) {
      window.location.href = "/login";
    }
    getAllGrounds();
  }, []);

  const getAllGrounds = async () => {
    localStorage.setItem("tslots", null);
    const response = await axios.get("http://localhost:8081/getAllGrounds");
    setGroundList(response.data);
    console.log(response.data);
  };
  const CnfBook = async (groundid) => {
    console.log(">>>>" + groundid);
    localStorage.setItem("groundid", groundid);
    window.location.href = "/bookground";
  };

  const Book = async (groundid, amount, ownerid) => {
    // alert(ownerid);

    const book = {
      groundId: groundid,
      timeslotsId: localStorage.getItem("tslots"),
      date: currentDate,
    };
    const check = await axios.post(
      "http://localhost:8081/findAvailableTime",
      book
    );

    if (check.data === "" || check.data === null) {
      localStorage.setItem("groundid", groundid);
      const book = {
        userId: localStorage.getItem("userid"),
        user: { user_id: localStorage.getItem("userid") },
        groundId: groundid,
        groundDetails: { ground_id: groundid },
        timeslotsId: localStorage.getItem("tslots"),
        timeSlots: { slot_id: localStorage.getItem("tslots") },
        amount: amount,
        ownerId: ownerid,
        date: currentDate,
      };

      const res = await axios.post("http://localhost:8081/saveBookings", book);
      sweetalert("success", "Your booking has been successfull", "success");
      swal.fire("Good job!", "You clicked the button!", "success");
      window.location.href = "/viewbookings_user";
    } else {
      sweetalert(
        "error",
        "This time slots is already booked please select another",
        "error"
      );

      getAllGrounds();
    }

    console.log(check.data);
    // const book = {
    //   userId: localStorage.getItem("userid"),
    //   groundId: groundid,
    //   timeslotsId: localStorage.getItem("tslots"),
    //   amount: amount,
    //   //date: date,
    // };

    // const res = await axios.post("http://localhost:8081/saveBookings", book);
    // sweetalert("success", "Added successfully", "success");
  };

  

  const getAvailableTime = async (date) => {
    setdate(date);
    // alert(date + "  " + currentDate);
    // const checktime = {
    //   groundId: localStorage.getItem("groundid"),
    //   date: currentDate,
    // };
    // const avalableTime = await axios.post(
    //   "http://localhost:8081/findBookGround",
    //   checktime
    // );
    // console.log(avalableTime.data);
    // setBookSlotList(avalableTime.data);
  };

  const validate = (groundid, amount, ownerid) => {
    if (currentDate === "") {
      sweetalert("Error", "Please select date", "error");
      return false;
    } else if (localStorage.getItem("tslots") === "null") {
      sweetalert("Error", "Please select time slot", "error");

      return false;
    }
    Book(groundid, amount, ownerid);
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
                  alt="ground"
                />
              </div>
              <div class="col-12 row">
                <div class="form-group">
                 
                </div>

                <p class="mt-3 h1 col-12">{item.ground_name}</p>
                <p class="col-5 h5 mt-3">Address : {item.loction}</p>
                <p class="col-4 h5 mt-3 ">City : {item.city}</p>
                <p class="col-4 h5 mt-3 ">Sport: {item.sports_name}</p>

                <p class="col-7 h5 mt-3">Rent per time slots: ₹ {item.amount}</p>

                <div className="col-12 manage">
                  <div class="date">
                    {" "}
                    <input
                      type="date"
                      class="form-control"
                      id=""
                        min={currentDate}
                      onChange={(e) => {
                        getAvailableTime(e.target.value);
                      }}
                      name="date"
                    />
                  </div>

                  {item.timeslots.map((time) => {
                    return (
                      <div class="time mx-auto row">
                        <input
                          type="radio"
                          class="col-1 ml-5 mt-1 "
                          name="time"
                          value={time.time_slotid}
                          onClick={() => {
                            timeSlot(time.slot_id);
                          }}
                        />
                        {time.time_slot}
                      </div>
                    );
                  })}
                </div>

                <button
                  class="btn btn-outline-success navBtnLogin mt-3 col-12"
                  type="button"
                  // value={view}
                  onClick={() => {
                    // Book(item.ground_id, item.amount, item.owner_id);
                    validate(item.ground_id, item.amount, item.owner_id);
                  }}
                >
                  Book Now
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
