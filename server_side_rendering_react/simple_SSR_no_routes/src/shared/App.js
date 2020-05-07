import React, { Component } from 'react';
import routes from './routes';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import NoMatch from './NoMatch';

class App extends Component {
  render() {
    return (
      <div>
        Hello {this.props.name} and likes {this.props.likes}{' '}
      </div>
    );
  }
}

export default App;
