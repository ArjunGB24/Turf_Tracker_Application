import "../admin/viewuser.css";
import { useEffect, useState } from "react";
import axios from "axios";

function ViewCourtBookingsOwner() {
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
    const user = { ownerId: localStorage.getItem("ownerid") };
    const response = await axios.post(
      "http://localhost:8081/getBookingsByOwner",
      user
    );
    setHallList(response.data);
    console.log(response.data);
  };

  return (
    <body class="view ">
      <div className="container col-12 viewuser">
        <h1 className="text-center text-light">Bookings</h1>
        <table className="table table-striped">
          <thead>
            <tr className="bg-success text-light">
              <td>User Name</td>
              <td>Court Name</td>
              <td>Date</td>
              <td>Time Slot</td>
              {/* <td>Amount</td> */}
              <td> Amount (in ₹)</td>
              <td>Mobile</td>
            </tr>
          </thead>
          <tbody>
            {hallList.map((user) => {
              if (user.hallDetails !== null) {
                return (
                  <tr className="text-light">
                    <td>{user.user.name}</td>
                    <td>{user.hallDetails.hallname}</td>
                    <td>{user.date}</td>
                    <td>{user.timeSlots.time_slot}</td>
                    {/* <td>{user.amount}</td> */}
                    <td>₹ {user.amount}</td>
                    <td>{user.user.mobile}</td>
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

export default ViewCourtBookingsOwner;
