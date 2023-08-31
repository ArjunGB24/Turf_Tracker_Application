import { useEffect, useState } from "react";
import axios from "axios";
import sweetalert from "sweetalert";
import "./ViewGrounds.css";

function ViewHall() {
  const [currentDate, setdate] = useState("");
  const [bookedSlotsList, setBookSlotList] = useState([]);

  const redirectlogin = () => {
    window.location.href = "/login";
    localStorage.setItem("role", null);
  };

  const [hallList, setHallList] = useState([]);
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    if (
      localStorage.getItem("role") === "null" ||
      localStorage.getItem("role") != "3"
    ) {
      window.location.href = "/login";
    }
    getAllHalls();
  }, []);

  const getAllHalls = async () => {
    localStorage.setItem("tslots", null);
    const response = await axios.get("http://localhost:8081/getAllHall");
    setHallList(response.data);
    console.log(response.data);
  };
  const CnfBook = async (hallid) => {
    console.log(">>>>" + hallid);
    localStorage.setItem("hallid", hallid);
    window.location.href = "/bookhall";
  };

  const Book = async (hallid, amount, ownerid) => {
    // alert(ownerid);

    const book = {
      hallId: hallid,
      timeslotsId: localStorage.getItem("tslots"),
      date: currentDate,
    };
    const check = await axios.post(
      "http://localhost:8081/findAvailableTime",
      book
    );

    if (check.data === "" || check.data === null) {
      localStorage.setItem("hallid", hallid);
      const book = {
        userId: localStorage.getItem("userid"),
        user: { user_id: localStorage.getItem("userid") },
        hallId: hallid,
        hallDetails: { hallid: hallid },
        timeslotsId: localStorage.getItem("tslots"),
        timeSlots: { slot_id: localStorage.getItem("tslots") },
        amount: amount,
        ownerId: ownerid,
        date: currentDate,
      };

      const res = await axios.post("http://localhost:8081/saveBookings", book);
      sweetalert("success", "Your booking has been successful", "success");
      // swal.fire("Good job!", "You clicked the button!", "success");
      window.location.href = "/viewbookings_user";
    } else {
      sweetalert(
        "error",
        "This time slots is already booked please select another",
        "error"
      );

      getAllHalls();
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

  const validate = (hallid, amount, ownerid) => {
    if (currentDate === "") {
      sweetalert("Error", "Please select date", "error");
      return false;
    } else if (localStorage.getItem("tslots") === "null") {
      sweetalert("Error", "Please select time slot", "error");

      return false;
    }
    Book(hallid, amount, ownerid);
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
                  alt="hall"
                />
              </div>
              <div class="col-12 row">
                <div class="form-group">
                </div>

                <p class="mt-3 h1 col-12">{item.hallname}</p>
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
                      //   min={currentDate}
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
                    validate(item.hallid, item.amount, item.owner_id);
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
export default ViewHall;

function timeSlot(time) {
  //alert(time);
  localStorage.setItem("tslots", time);
  //const [timeslot, time] = useState("");
}
