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
    if(json == 1){
        //redirect
        localStorage.setItem('token', json.json.data[0].token);      
        history.push("/")
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
          <label htmlFor="email">Name</label>
          <input
            type="name"
            className="form-control"
            id="name"
            value={credentials.name}
            onChange={onChange}
            name="name"
          />
        </div>        
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={credentials.email}
            onChange={onChange}
            name="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="number">Phone</label>
          <input
            type="number"
            className="form-control"
            id="phone"
            value={credentials.phone}
            onChange={onChange}
            name="phone"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={credentials.password}
            onChange={onChange}
            name="password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={credentials.username}
            onChange={onChange}
            name="username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Desc</label>
          <input
            type="text"
            className="form-control"
            id="desc"
            value={credentials.desc}
            onChange={onChange}
            name="desc"
          />
        </div>
        <div className="form-group text-center">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
