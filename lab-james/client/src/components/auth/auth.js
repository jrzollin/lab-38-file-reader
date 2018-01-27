import React from 'react';
import {connect} from 'react-redux';
import {renderIf} from '../../lib/render-if.js';

class Auth extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <React.Fragment>
        {
          renderIf(
            this.props.users[0],
            this.props.children
          )
        }
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = (dispatch, getState) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
