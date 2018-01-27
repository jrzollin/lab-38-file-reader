import superagent from 'superagent';
import cookies from 'react-cookies';

export const userUpdate = user => dispatch => {
  let token = cookies.load('auth');

  superagent.put(`${__SERVER_URL__}/updateUser/${user._id}`)
    .withCredentials()
    .set('Authorization', 'Bearer ' + token)
    .field('username', user.username)
    .attach('avatarFile', user.avatarFile)
    .catch(error => console.error('Error: ', error.message));
};
