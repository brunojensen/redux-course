import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Message from './components/Message';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React with Redux</h1>
        </header>
        <Router>
          <div className="Todo-App">
            <Message />
            <TodoForm />
            <Route path='/:filter?' render={({ match }) => (
              <TodoList filter={match.params.filter} />
            )} />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;