import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StudentContext } from "./StudentContext";

const Dashboard = () => {
  const [data] = useContext(StudentContext);
  const [user, setUser] = useState({
    name: "",
    birthdate: "",
    mentor: "",
    grade: "",
    email: "",
  });
  const { email } = useParams();
  useEffect(() => {
    data.filter((user) => {
      if (user.email === email) {
        setUser({
          name: user.name,
          birthdate: user.birthdate,
          mentor: user.mentor,
          grade: user.grade,
          email: user.email,
        });
      }
      return null;
    });
  }, [data, email]);
  return (
    <div className="dashboard">
      <h1>Welcome to Dashboard {user.name}.</h1>
      <h1>User Details </h1>
      <h1>Name : {user.name}</h1>
      <h1>BirthDate : {user.birthdate}</h1>
      <h1>Grade : {user.grade}</h1>
      <h1>Mentor : {user.mentor}</h1>
      <h1>Email : {user.email}</h1>
      <div className="img">
        <img src="https://shorturl.at/cfTW6" alt="" />
      </div>
    </div>
  );
};

export default Dashboard;
