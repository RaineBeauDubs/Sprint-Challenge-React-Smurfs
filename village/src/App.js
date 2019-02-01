import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Navigation from './components/Navigation';

const AppWrapper = styled.div`
  background-image: url("https://www.desktop-background.com/download/1280x1024/2014/01/19/703573_the-smurfs-wallpapers-1920x1080-2-hebus-org-high-definition_1920x1080_h.jpg");
  height: 100vh;`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      // name: '',
      // age: 0,
      // height: ''
    };
  }

  componentDidMount = () => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState({
          smurfs: response.data
        });
      })
      .catch(error => {
        console.log(error);
      })
  };



  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <AppWrapper>
        <Route 
          path="/">
          <Navigation />  
        </Route>
        <Route
          exact path="/"
          render={props => (
            <Smurfs {...props} smurfs={this.state.smurfs} />
          )}>
        </Route>

        <Route
          path="/smurf-form">
          <SmurfForm />
        </Route>
      </AppWrapper>
    );
  }
}

export default App;
