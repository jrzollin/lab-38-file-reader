import React from 'react';
import {connect} from 'react-redux';

class Home extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <React.Fragment>
        <h1>Test</h1>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps)(Home);
