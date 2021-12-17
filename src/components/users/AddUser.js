import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",  
    phone: "",
    department: ""
  });

  const { name, username, email, phone, department } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("https://my-json-server.typicode.com/Vivek-Pandey1/demo/users", user);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add a employee</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
          <label className="form-label">Name:</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label className="form-label">Employee code:</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Emp code"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label className="form-label">Email:</label>
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label className="form-label">Phone:</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label className="form-label">Department:</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter department Name"
              name="department"
              value={department}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add Employee</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
