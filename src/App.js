import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


const App = ()=> {
  const pageSize = 15;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
  return (
    <div>
    <Router>
    <Navbar></Navbar>      
    <LoadingBar
      height = {4}
      color='#f11946'
      progress={progress}
    />
    <Switch>
        <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"></News></Route>
        <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"></News></Route>
        <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"></News></Route>
        <Route exact path="/general"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"></News></Route>
        <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"></News></Route>
        <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="" pageSize={pageSize} country="in" category="science"></News></Route>
        <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key="" pageSize={pageSize} country="in" category="sports"></News></Route>
        <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="" pageSize={pageSize} country="in" category="technology"></News></Route>
        </Switch>
    </Router>
  </div>
  )
}


export default App