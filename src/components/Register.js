import React from "react";
import { useState } from 'react'
import { useHistory } from 'react-router'

const Register = (props) => {
  const [credentials, setCredentials] = useState({name: "", email: "", phone: "", password: "", username: "", desc: "" });
  let history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name, email, password, phone, username, desc} = credentials;
    const response = await fetch(
      "http://192.168.18.153:8000/add_user",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name, email, password, phone, username, desc }),
      }
    );
    const json = await response.json();
    console.log(json);
    if(json.msg === 'success'){
        //redirect
        localStorage.setItem('token', json.data[0].token);      
        history.push("/login")
        props.showAlert("Account Creates Successfully", 'success')
      }
      else{
        props.showAlert("Invalid Credinatials", 'danger')
      }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="login container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <input
            type="name"
            className="form-control"
            id="name"
            value={credentials.name}
            onChange={onChange}
            name="name"
            placeholder="Enter your name"
          />
        </div>        
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="email"
            value={credentials.email}
            onChange={onChange}
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            id="phone"
            value={credentials.phone}
            onChange={onChange}
            name="phone"
            placeholder="Enter your phone"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="password"
            value={credentials.password}
            onChange={onChange}
            name="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="username"
            value={credentials.username}
            onChange={onChange}
            name="username"
            placeholder="Enter your username"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="desc"
            value={credentials.desc}
            onChange={onChange}
            name="desc"
            placeholder="Enter your description"
          />
        </div>
        <div className="form-group text-center">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
