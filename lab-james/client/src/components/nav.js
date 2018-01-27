import React from 'react';
import Auth from './auth/auth.js';
import {Link} from 'react-router-dom';

class Nav extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <React.Fragment>
        <ul className="nav">
          <li><Link to='/'>Home</Link></li>
          <Auth>
            <li><Link to='/list'>List</Link></li>
          </Auth>
        </ul>
      </React.Fragment>
    )
  }
}

export default Nav;
