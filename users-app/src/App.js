import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, withRouter } from 'react-router-dom';
import Home from './home/Home.js';
import Register from './register/Register.js';
import Login from './login/Login.js';
import Users from './users/Users.js';

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
          &nbsp;|&nbsp;
          <button onClick={this.logout}>Logout</button>
        </header>
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/users" component={Users} />
        </main>
      </div> 
    );
  }

  logout= () => {
    localStorage.removeItem('token');
    this.props.history.push('/');
  }
}

export default withRouter(App);
