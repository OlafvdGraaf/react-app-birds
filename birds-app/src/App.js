import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import { Header } from './components/header.js';
import { routes } from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />

        <div>{routes}</div>

      </div>
    );
  }
}

export default App;
