import React, { Component } from 'react';
import './App.css';
import Login from './Login/Login.js';
import { Route, NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <NavLink to="/">Home</NavLink> 
          &nbsp;|&nbsp;
          <NavLink to="/register">Register</NavLink> 
          &nbsp;|&nbsp;
          <NavLink to="/login">Login</NavLink> 
          &nbsp;|&nbsp;
          <NavLink to="/users">Users</NavLink> 
        </header>
        <main>
          <Route exact path="/" component={Home} />
          {/* <Route path="/register" component={Register} /> */}
          <Route path="/login" component={Login} />
          {/* <Route path="/users" component={Users} /> */}
        </main>
      </div>
    );
  }
}

function Home(props) {
  return <h1>Home Component</h1>
}

export default App;
