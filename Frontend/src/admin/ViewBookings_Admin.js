import "../admin/viewuser.css";
import { useEffect, useState } from "react";
import axios from "axios";

function ViewBookingsAdmin() {
  const [groundList, setGroundList] = useState([]);

  useEffect(() => {
    if (
      localStorage.getItem("role") === "null" ||
      localStorage.getItem("role") !== "1"
    ) {
      window.location.href = "/login";
    }
    getAllGrounds();
  }, []);

  const getAllGrounds = async () => {
    try {
      const response = await axios.get("http://localhost:8081/getBookings");
      setGroundList(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching ground data:", error);
    }
  };

  return (
    <div className="view">
      <div className="container col-12 viewuser">
        <h1 className="text-center text-light">New Booking</h1>
        <table className="table table-striped">
          <thead>
            <tr className="bg-success text-light">
              <th>User Name</th>
              <th>Ground Name</th>
              <th>Date</th>
              <th>Time Slot</th>
              <th>Amount (in Rupees)</th>
              <th>Mobile</th>
            </tr>
          </thead>
          <tbody>
            {groundList.map((user) => {
              if (user.groundDetails !== null) {
                return (
                  <tr key={user._id} className="text-light">
                    <td>{user.user.name}</td>
                    <td>{user.groundDetails.ground_name}</td>
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

export default ViewBookingsAdmin;
