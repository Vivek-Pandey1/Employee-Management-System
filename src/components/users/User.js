import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    webiste: ""
  });
  const loadUser = async () => {
    const res = await axios.get(`https://my-json-server.typicode.com/Vivek-Pandey1/demo/users/${id}`);
    setUser(res.data);
  };
  
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
 
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">Emp Id: {user.username}</h1>
      <hr />
      <ul className="list-group">
        <li className="list-group-item">Name:  {user.name}</li>
        <li className="list-group-item">Emp Code:  {user.username}</li>
        <li className="list-group-item">email:  {user.email}</li>
        <li className="list-group-item">Phone:  {user.phone}</li>
        <li className="list-group-item">Department:  {user.department}</li>
      </ul>
    </div>
  );
};

export default User;
