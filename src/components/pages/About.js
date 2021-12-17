import React from "react";

const About = () => {
  return (
    <div className="container">
      <div className="text-center py-4">
        <h1>About Page</h1>
        <p className="lead">
          An employee management system is a software, that helps your employees
          to give their best efforts every day to achieve the goals of your
          organization. It guides and manages employees efforts in the right
          direction. It also securely stores and manages personal and other
          work-related details for your employees. That makes it easier to store
          and access the data when there is a need.
        </p>
      </div>
      <h3>Features</h3>
      <p>
        <ul className="my-3">
          <li className="my-2">Add new employees using add employee button</li>
          <li className="my-2">View, edit and delete existing employees</li>
          <li className="my-2">
            Dynamically search employees using their name or department
          </li>
        </ul>
      </p>
      <p></p>
    </div>
  );
};

export default About;
