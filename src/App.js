import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Component } from 'react';


export default class App extends Component {
  pageSize = 15;
  render() {
    return (
      <div>
      <Router>
      <Navbar></Navbar>      
      <Switch>
          <Route exact path="/"><News key="general" pageSize={this.pageSize} country="in" category="general"></News></Route>
          <Route exact path="/business"><News key="business" pageSize={this.pageSize} country="in" category="business"></News></Route>
          <Route exact path="/entertainment"><News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"></News></Route>
          <Route exact path="/general"><News key="general" pageSize={this.pageSize} country="in" category="general"></News></Route>
          <Route exact path="/health"><News key="health" pageSize={this.pageSize} country="in" category="health"></News></Route>
          <Route exact path="/science"><News key="" pageSize={this.pageSize} country="in" category="science"></News></Route>
          <Route exact path="/sports"><News key="" pageSize={this.pageSize} country="in" category="sports"></News></Route>
          <Route exact path="/technology"><News key="" pageSize={this.pageSize} country="in" category="technology"></News></Route>
          </Switch>
      </Router>
    </div>
    )
  }
}