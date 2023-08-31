import "../admin/viewuser.css";
import { useEffect, useState } from "react";
import axios from "axios";

function ViewCourtBookingsAdmin() {
  const [hallList, setHallList] = useState([]);

  useEffect(() => {
    if (
      localStorage.getItem("role") === "null" ||
      localStorage.getItem("role") !== "1"
    ) {
      window.location.href = "/login";
    }
    getAllHalls();
  }, []);

  const getAllHalls = async () => {
    try {
      const ownerId = localStorage.getItem("ownerid");
      const response = await axios.post(
        "http://localhost:8081/getBookingsByOwner",
        { ownerId }
      );
      setHallList(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching hall data:", error);
    }
  };

  return (
    <div className="view">
      <div className="container col-12 viewuser">
        <h1 className="text-center text-light">Bookings</h1>
        <table className="table table-striped">
          <thead>
            <tr className="bg-success text-light">
              <th>User Name</th>
              <th>Court Name</th>
              <th>Date</th>
              <th>Time Slot</th>
              <th>Amount (in Rupees)</th>
              <th>Mobile</th>
            </tr>
          </thead>
          <tbody>
            {hallList.map((user) => {
              if (user.hallDetails !== null) {
                return (
                  <tr key={user._id} className="text-light">
                    <td>{user.user.name}</td>
                    <td>{user.hallDetails.hallname}</td>
                    <td>{user.date}</td>
                    <td>{user.timeSlots.time_slot}</td>
                    <td>₹ {user.amount}</td>
                    <td>{user.user.mobile}</td>
                  </tr>
                );
              }
              return null; // Always return something in the map function
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewCourtBookingsAdmin;
