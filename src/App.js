import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Component } from 'react';


export default class App extends Component {
  pageSize = 15;
  apiKey = process.env.REACT_APP_NEWS_API
  state = {
    progress: 0
  }
  setProgress = (progress) =>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
      <Router>
      <Navbar></Navbar>      
      <LoadingBar
        height = {4}
        color='#f11946'
        progress={this.state.progress}
      />
      <Switch>
          <Route exact path="/"><News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general"></News></Route>
          <Route exact path="/business"><News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="in" category="business"></News></Route>
          <Route exact path="/entertainment"><News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"></News></Route>
          <Route exact path="/general"><News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general"></News></Route>
          <Route exact path="/health"><News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="in" category="health"></News></Route>
          <Route exact path="/science"><News setProgress={this.setProgress} apiKey={this.apiKey} key="" pageSize={this.pageSize} country="in" category="science"></News></Route>
          <Route exact path="/sports"><News setProgress={this.setProgress} apiKey={this.apiKey} key="" pageSize={this.pageSize} country="in" category="sports"></News></Route>
          <Route exact path="/technology"><News setProgress={this.setProgress} apiKey={this.apiKey} key="" pageSize={this.pageSize} country="in" category="technology"></News></Route>
          </Switch>
      </Router>
    </div>
    )
  }
}