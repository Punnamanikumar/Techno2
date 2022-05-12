import React from "react";
import TextField from "@mui/material/TextField";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StudentContext } from "./StudentContext";
import { toast } from "react-toastify";

const Home = () => {
  const [adminName, setAdminName] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [user] = useContext(StudentContext);
  const navigate = useNavigate();

  const handelSubmit = () => {
    if (adminName === "admin@gmail.com" && adminPassword === "admin123") {
      navigate("/admin");
    } else {
      alert("Login Failed Please Enter Correct Mail Id and Password");
    }
  };
  const handeluserSubmit = () => {
    if (userName !== "" && userPassword !== "") {
      user.forEach((user) => {
        if (user.email === userName && user.password === userPassword) {
          // console.log("Id Matched :", student.id, "=", id);
          //   alert("FOUnd USer");
          navigate(`/dashboard/${userName}`);
        }
      });
    } else {
      return toast.warning("Please Fill All the Data");
    }
  };
  const signUp = () => {
    navigate("/students-desc");
  };
  return (
    <div>
      <div className="loginadmin">
        <h1>Login as Admin</h1>
        <TextField className="ad1" id="outlined-basic" value={adminName} onChange={(e) => setAdminName(e.target.value)} label="Email" variant="outlined"/>
        <TextField className="ad2" id="outlined-basic" value={adminPassword} onChange={(e) => setAdminPassword(e.target.value)} label="Password" variant="outlined"/>
        <button className="update adsubmit" onClick={handelSubmit}>Submit</button>
      </div>
      <div className="loginuser">
        <h1>Login as User</h1>
        <TextField className="ad3" id="outlined-basic" value={userName} onChange={(e) => setUserName(e.target.value)} label="Email" variant="outlined" />
        <TextField className="ad4" id="outlined-basic" value={userPassword} onChange={(e) => setUserPassword(e.target.value)} label="Password" variant="outlined"/>
        <button className="update adsubmit" onClick={handeluserSubmit}> Submit </button>
      </div>
      <button className="newuser" onClick={signUp}>New User ?</button>
    </div>
  );
};

export default Home;
