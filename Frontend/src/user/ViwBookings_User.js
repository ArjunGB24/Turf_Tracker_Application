import "../admin/viewuser.css";
import { useEffect, useState } from "react";
import axios from "axios";

function ViewBookingsAdmin(user) {
  const [groundList, setGroundList] = useState([]);
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
    const user = { userId: localStorage.getItem("userid") };
    const response = await axios.post(
      "http://localhost:8081/getBookingsByUser",
      user
    );
    setGroundList(response.data);
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
              <td>Ground Name</td>
              <td>Date</td>
              <td>Time Slot</td>
              <td>Amount (in ₹)</td>
              <td>Mobile</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {groundList.map((user) => {
              if (user.groundDetails !== null) {
                return (
                  <tr>
                    <td>{user.user.name}</td>
                    <td>{user.groundDetails.ground_name}</td>
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

export default ViewBookingsAdmin;
