import { useEffect, useState } from "react";
import axios from "axios";
import sweetalert from "sweetalert";

function BookGround() {
  const [groundList, setGroundList] = useState({});

  const [timeList, setTimeList] = useState([]);
  const [currentDate, setdate] = useState("");
  const [bookedSlotsList, setBookSlotList] = useState([]);
  //   const [getDate, setdates] = useState("");

  const [startDate, setStartDate] = useState(new Date());
  useEffect(() => {
    if (
      localStorage.getItem("role") === "null" ||
      localStorage.getItem("role") != "3"
    ) {
      window.location.href = "/login";
    }
    getAllGrounds();

    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    setdate(date);
  }, []);

  const Book = async (groundid, amount) => {
    console.log(">>>>" + groundid + " " + amount + " " + currentDate);

    const book = {
      userId: localStorage.getItem("userid"),
      groundId: groundid,
      timeslotsId: localStorage.getItem("tslots"),
      amount: amount,
      date: currentDate,
    };
    const res = await axios.post("http://localhost:8081/saveBookings", book);
    sweetalert("success", "Added successfully", "success");
  };

  const getAvailableTime = async (date) => {
    setdate(date);
    const checktime = {
      groundId: localStorage.getItem("groundid"),
      date: currentDate,
    };
    const avalableTime = await axios.post(
      "http://localhost:8081/findBookGround",
      checktime
    );
    console.log(avalableTime.data);
    setBookSlotList(avalableTime.data);
  };

  const getAllGrounds = async () => {
    const ground = { ground_id: localStorage.getItem("groundid") };
    const response = await axios.post(
      "http://localhost:8081/findByGoundId",
      ground
    );
    setGroundList(response.data);
    setTimeList(response.data.timeslots);
    // console.log(response.data);
    // console.log(response.data.timeslots);
  };

  return (
    <div class=" row  viewGround" style={{ backgroundColor: "black" }}>
      <div class="mt-5">
        <div class="mx-auto my-2 col-10 p-3 bg-light rounded row mt-5">
          <div class="col-12">
            <img
              class="w-100 my-auto "
              src={groundList.ground_image}
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

            <p class="mt-3 h1 col-12">{groundList.ground_name}</p>
            <p class="col-5 h5 mt-3">Address : {groundList.loction}</p>
            <p class="col-4 h5 mt-3 ">City : {groundList.city}</p>

            <p class="col-3 h5 mt-3">Rent per time slots:₹ {groundList.amount}</p>

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

            {timeList.map((time) => {
              return (
                <div>
                  {bookedSlotsList.map((booked) => {
                    if (time.slot_id === booked.timeslotsId) {
                      console.log(
                        ">>>>>Iffff>>>" +
                          booked.timeslotsId +
                          " " +
                          time.slot_id
                      );
                      return (
                        <div class="col-12 mx-auto ">
                          <input
                            type="radio"
                            class="col-1 ml-5 mt-1 "
                            name="time"
                            value={time.slot_id}
                            onClick={() => {
                              timeSlot(time.slot_id);
                            }}
                          />
                          {time.time_slot}
                        </div>
                      );
                    } else {
                      console.log(
                        ">>>>>>>>" + booked.timeslotsId + " " + time.slot_id
                      );
                    }
                  })}{" "}
                </div>
              );
            })}

            <button
              class="btn btn-outline-success navBtnLogin mt-3 col-12"
              type="button"
              onClick={() => {
                Book(groundList.ground_id, groundList.amount);
              }}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
      );
    </div>
  );
}
export default BookGround;

function timeSlot(time) {
  sweetalert(time);
  localStorage.setItem("tslots", time);
  //const [timeslot, time] = useState("");
}
