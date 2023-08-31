import "../admin/viewuser.css";
import { useEffect, useState } from "react";
import axios from "axios";

function ViewCourtBookingsAdmin(user) {
  const [hallList, setHallList] = useState([]);
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
    const user = { userId: localStorage.getItem("userid") };
    const response = await axios.post(
      "http://localhost:8081/getBookingsByUser",
      user
    );
    setHallList(response.data);
    console.log(response.data);
  };

  const deleteBookingHandler = (e) => {
    //deleteBookingHandler(user.bookingId);
    //deleteBooking();
    deleteBooking(user.bookingId);
  };
  const deleteBooking = (bookingId) => {
    console.log(bookingId);
    axios
      .delete(`http://localhost:8081/cancelBooking/${bookingId}`)
      .then((response) => {
        //console.log(response.data);
      });
  };

  return (
    <body class="view">
      <div className="container col-12 viewuser">
        <h1 className="text-center text-light">My Bookings</h1>
        <table className="table table-striped">
          <thead>
            <tr className="bg-success text-light">
              <td>User Name</td>
              <td>Hall Name</td>
              <td>Date</td>
              <td>Time Slot</td>
              <td>Amount (in ₹)</td>
              <td>Mobile</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {hallList.map((user) => {
              if (user.hallDetails !== null) {
                return (
                  <tr>
                    <td>{user.user.name}</td>
                    <td>{user.hallDetails.hallname}</td>
                    <td>{user.date}</td>
                    <td>{user.timeSlots.time_slot}</td>
                    <td>₹ {user.amount}</td>
                    <td>{user.user.mobile}</td>
                    <td>
                      {
                        <button
                          className=" btn btn-danger btn-sm mt-0"
                          onClick={(e) => {
                            //console.log(user.bookingId);
                            deleteBooking(user.bookingId);
                            alert("Booking Cancelled Successfully");
                            //sweetalert("Success", Booking Cancelled Successfully, "error");
                          }}
                        >
                          Cancel
                        </button>
                      }
                    </td>
                  </tr>
                );
              }
            })}
            ;
          </tbody>
        </table>
      </div>
    </body>
  );
}

export default ViewCourtBookingsAdmin;
