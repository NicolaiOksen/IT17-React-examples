import React, { Component } from 'react';
import logo from '../../images/logo.svg';

import {
    Route,
    Switch
} from 'react-router-dom'


import Login from './Login';
import Signup from './Signup';
import NotFound from './NotFound'
import '../../css/App.css'

class App extends Component {
  render() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route component={NotFound} />
            </Switch>
            
            {this.props.children}
      </div>
    );
  }
}

export default App;
