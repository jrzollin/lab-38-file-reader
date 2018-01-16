import React from 'react';
import {Route} from 'react-router-dom';

import Header from './header.js';
import Nav from './nav.js';
import LogIn from './login/log-in.js';
import Home from './home/home.js';

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
        </main>
      </React.Fragment>
    )
  }
}

export default App;
