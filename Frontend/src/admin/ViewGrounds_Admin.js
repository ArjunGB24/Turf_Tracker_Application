import { useEffect, useState } from "react";
import axios from "axios";
import sweetalert from "sweetalert";
import DatePicker from "react-datepicker";
import { TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import moment from "moment";

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
      localStorage.getItem("role") != "1"
    ) {
      window.location.href = "/login";
    }
    getAllGrounds();
  }, []);

  const getAllGrounds = async () => {
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
    alert(ownerid);

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
      sweetalert("success", "Your booking has been successful", "success");
    } else {
      sweetalert(
        "Error",
        "This time slots is already booked please select another",
        "error"
      );
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

  //

  const getAvailableTime = async (date) => {
    setdate(date);
    alert(date + "  " + currentDate);
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
                </div>

                <p class="mt-3 h1 col-12">{item.ground_name}</p>
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
export default ViewGround;

function timeSlot(time) {
  alert(time);
  localStorage.setItem("tslots", time);
  //const [timeslot, time] = useState("");
}
