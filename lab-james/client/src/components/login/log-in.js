import React from 'react';
import {renderIf} from '../../lib/render-if.js';
import {connect} from 'react-redux';

import {userCreate} from './log-in-actions';
import {userFind} from './log-in-actions';

class LogIn extends React.Component {

  constructor(props){
    super(props);

    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  handleChange(e){
    this.setState({[e.target.id]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.handleUserFind(this.state);
  }

  createUser(){
    if(this.state.username && this.state.password){
      this.props.handleUserCreate(Object.assign({}, this.state));
    }
  }

  render(){
    return(
      <React.Fragment>
        {renderIf(
          !this.props.users[0],
          <div className="log-in">
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="username">Username:
                <input type="text" id="username" onChange={this.handleChange} required />
              </label>
              <label htmlFor="password">Password:
                <input type="password" id="password" onChange={this.handleChange} required />
              </label>
              <input type="submit" value="Log In" />
            </form>
            <button onClick={this.createUser}>Create Profile</button>
          </div>
        )}
        {renderIf(
          this.props.users[0],
          <div className="logged-in">
            {
              this.props.users.map( (index, i) => (
                <p key={i}>Logged in as {index.user.username}</p>
              ))
            }
          </div>
        )}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch, getState) => ({
  handleUserCreate: user => dispatch(userCreate(user)),
  handleUserFind: user => dispatch(userFind(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
