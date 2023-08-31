import React, { useEffect, useState } from "react";
import axios from "axios";
import sweetalert from "sweetalert";

function ViewUser() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    if (
      localStorage.getItem("role") === "null" ||
      localStorage.getItem("role") !== "1"
    ) {
      window.location.href = "/login";
    }
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      const user = { roleId: 2 };
      const response = await axios.post(
        "http://localhost:8081/getUserByRoleId",
        user
      );
      setUserList(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const updateUserStatus = async (userEmail) => {
    try {
      console.log(">>>>>" + userEmail);
      const user = { email: userEmail };
      const res = await axios.post("http://localhost:8081/getUserByEmail", user);

      const updatedStatus = res.data.status === "Active" ? "Inactive" : "Active";

      const updatedUser = {
        user_id: res.data.user_id,
        name: res.data.name,
        email: res.data.email,
        mobile: res.data.mobile,
        city: res.data.city,
        password: res.data.password,
        roleId: res.data.roleId,
        status: updatedStatus,
      };

      await axios.post("http://localhost:8081/updateUser", updatedUser);
      sweetalert("success", "Status updated successfully...", "success");

      getAllUsers();
    } catch (error) {
      console.error("Error updating user status:", error);
    }
  };

  return (
    <div className="view">
      <div className="container col-12 viewuser">
        <h1 className="text-center text-light">Owner List</h1>
        <table className="table table-striped">
          <thead>
            <tr className="bg-success text-light">
              <th>User Id</th>
              <th>User Name</th>
              <th>User Email Id</th>
              <th>User Mobile</th>
              <th>User City</th>
              <th>User Status</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user) => (
              <tr key={user.user_id}>
                <td>{user.user_id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>{user.city}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => updateUserStatus(user.email)}
                    className={`btn ${
                      user.status === "Active" ? "btn-success" : "btn-danger"
                    } mb-4`}
                  >
                    {user.status}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewUser;
