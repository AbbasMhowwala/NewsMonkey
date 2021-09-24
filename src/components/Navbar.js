import React from 'react'
import { Link } from "react-router-dom";
import { useHistory } from 'react-router';
const Navbar = ()=>  {
    let history = useHistory();
    const handleLogout = ()=>{
        localStorage.removeItem('token');
        history.push('/login')
    }
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Navbar</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/business">Business</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/entertainment">Entertainment</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/general">General</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/health">Health</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/science">Science</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/sports">Sports</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/technology">Technology</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/shop">Shop</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/gemshop">Gemstone Shop</Link>
                    </li>
                </ul>
                {!localStorage.getItem('token')?<form className="form-inline my-2 my-lg-0">
                    <Link className="btn btn-primary mx-3" to="/login">Login</Link>
                    <Link className="btn btn-primary" to="/register">Register</Link>
                </form>: <button onClick={handleLogout} className="btn btn-primary" to="">Logout</button>}
            </div>
        </nav>
        )
}

export default Navbar
