import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router'


const Login = (props) => {
  const [credentials, setCredentials] = useState({email: "", password: ""})
  let history = useHistory();
  const handleSubmit = async (e)=>{
    e.preventDefault();
    const response = await fetch("http://192.168.18.153:8000/login_user", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: credentials.email, password: credentials.password})
    });
    const json = await response.json()
    //console.log(json);
    if(json.msg == 'success'){
      //redirect
      props.showAlert("Logged In Successfully", 'success')
      localStorage.setItem('token', json.data[0].token);      
      history.push("/")
    }
    else{
      props.showAlert("Invalid Credinatials", 'danger')
    }
  }
  const onChange = (e)=>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }
  return (
    <div className="login container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" value={credentials.email} onChange={onChange} name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" value={credentials.password}  onChange={onChange} name="password" />
        </div>
        <div className="form-group text-center">
          <button button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Login
