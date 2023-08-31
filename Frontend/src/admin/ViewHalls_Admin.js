import { useEffect, useState } from "react";
import axios from "axios";
import sweetalert from "sweetalert";
import DatePicker from "react-datepicker";
import { TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import moment from "moment";

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
      localStorage.getItem("role") != "1"
    ) {
      window.location.href = "/login";
    }
    getAllHalls();
  }, []);

  const getAllHalls = async () => {
    const response = await axios.get("http://localhost:8081/getAllHall");
    setHallList(response.data);
    console.log(response.data);
  };
  const CnfBook = async (hallid) => {
    console.log(">>>>" + hallid);
    localStorage.setItem("hallid", hallid);
    window.location.href = "/bookground";
  };
  const Book = async (hallid, amount, ownerid) => {
    alert(ownerid);

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
        hallid: hallid,
        hallDetails: { hall_id: hallid },
        timeslotsId: localStorage.getItem("tslots"),
        timeSlots: { slot_id: localStorage.getItem("tslots") },
        amount: amount,
        ownerId: ownerid,
        date: currentDate,
      };

      const res = await axios.post("http://localhost:8081/saveBookings", book);
      sweetalert("success", "Your booking has been successfull", "success");
    } else {
      sweetalert(
        "Error",
        "This time slots is already booked please select another",
        "error"
      );
    }

    console.log(check.data);

  };



  const getAvailableTime = async (date) => {
    setdate(date);
    alert(date + "  " + currentDate);
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
                  
                </div>

                <p class="mt-3 h1 col-12">{item.hallname}</p>
                <p class="col-5 h5 mt-3">Address : {item.loction}</p>
                <p class="col-4 h5 mt-3 ">City : {item.city}</p>

                <p class="col-3 h5 mt-3">Rent per time slots: ₹ {item.amount}</p>

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
