import React, {useState } from "react";
//import { useHistory } from 'react-router';
import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Login from "./components/Login";
import Register from "./components/Register";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Alert from "./components/Alert";
import Shop from "./components/Shop";
import GemShop from "./components/GemShop";
//import newsContext from '../src/context/newsContext';
//import NewsState from './context/NewsState';

const App = () => {
  // const context = useContext(newsContext);
  // const { getNews } = context;
  // useEffect(() => {
  //   getNews()
  // }, [])
  //let history = useHistory();
  useEffect(() => {
    if(localStorage.getItem('token')){
      console.log("Logged In");
    }
    else{
      //history.push("/login")
    }
  }, []);
  const apiKey = "9ca7575508184b5587ed6a1ef6d252e0  ";

  const pageSize = 15;
  const [progress, setProgress] = useState(0);
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <div>    
      <Router>
        <Navbar></Navbar>
        <Alert alert={alert}></Alert>
        <LoadingBar height={4} color="#f11946" progress={progress} />
        <Switch>
          <Route exact path="/">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
              showAlert={showAlert}
            ></News>
          </Route>
          <Route exact path="/business">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="business"
              pageSize={pageSize}
              country="in"
              category="business"
            ></News>
          </Route>
          <Route exact path="/entertainment">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="entertainment"
              pageSize={pageSize}
              country="in"
              category="entertainment"
            ></News>
          </Route>
          <Route exact path="/general">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            ></News>
          </Route>
          <Route exact path="/health">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="health"
              pageSize={pageSize}
              country="in"
              category="health"
            ></News>
          </Route>
          <Route exact path="/science">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key=""
              pageSize={pageSize}
              country="in"
              category="science"
            ></News>
          </Route>
          <Route exact path="/sports">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key=""
              pageSize={pageSize}
              country="in"
              category="sports"
            ></News>
          </Route>
          <Route exact path="/technology">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key=""
              pageSize={pageSize}
              country="in"
              category="technology"
            ></News>
          </Route>
          <Route exact path="/login">
            <Login showAlert={showAlert}></Login>
          </Route>
          <Route exact path="/register">
            <Register showAlert={showAlert}></Register>
          </Route>
          <Route exact path="/shop">
            <Shop setProgress={setProgress} pageSize={pageSize}></Shop>
          </Route>
          <Route exact path="/gemshop">
            <GemShop
              setProgress={setProgress}
              apiKey={apiKey}
              key=""
              pageSize={pageSize}
              country="in"
              category="technology"
            ></GemShop>
          </Route>  
        </Switch>

      </Router>
    </div>
  );
};

export default App;
