import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import Header from './header.js';
import Nav from './nav.js';
import LogIn from './login/log-in.js';
import Home from './home/home.js';
import List from './list/list.js';
import Profile from './profile/profile.js';

class App extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <React.Fragment>
        <Header />
        <Nav />
        <LogIn />
        <main>
          <Route exact path='/' component={Home} />
          <Route exact path='/list' component={List} />
          <Route exact path='/profile' component={Profile} />
        </main>
      </React.Fragment>
    )
  }
}

export default App;
