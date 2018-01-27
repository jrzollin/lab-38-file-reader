import React from 'react';
import {connect} from 'react-redux';
import Auth from '../auth/auth.js';

import {photoToDataUrl} from '../../lib/photo-to-data-url.js';
import {userUpdate} from './profile-actions.js';

class Profile extends React.Component {

  constructor(props){
    super(props);

    let initialState = {
      username: '',
      avatar: '',
      avatarFile: '',
    };

    this.state = Object.assign(initialState, this.props.users[0].user);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleImage = this.handleImage.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.updateUser(Object.assign({}, this.state));
  }

  handleChange(e){
    this.setState({[e.target.id]: e.target.value});
  }

  handleImage(e){
    let {files} = e.target;
    let avatarFile = files[0];
    this.setState({avatarFile: avatarFile});

    photoToDataUrl(avatarFile)
      .then(photo => this.setState({avatar: photo}))
      .catch(console.error);
  }

  render(){
    return(
      <Auth>
        <h1>Profile</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='username'>
            <span>Username: </span>
            <input type='text' id='username' onChange={this.handleChange} defaultValue={this.props.users[0].user.username} required />
          </label>

          <label>
            <figure>
              <img src={this.state.avatar} />
              <figcaption>Avatar</figcaption>
            </figure>
            <input name='avatar' type='file' onChange={this.handleImage} />
          </label>

          <button type='submit'>Save Profile</button>

        </form>
      </Auth>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch, getState) => ({
  updateUser: user => dispatch(userUpdate(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
