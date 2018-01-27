import superagent from 'superagent';
import cookie from 'react-cookies';

export const authInit = () => dispatch => {

  let token = cookie.load('auth');

  if(token){
    superagent.get(`${__SERVER_URL__}/auth/findUser`)
      .withCredentials()
      .set('Authorization', 'Bearer ' + token)
      .then(res => dispatch(assignAction(res.body)))
      .catch(console.err);
  }
};

const assignAction = user => ({
  type: 'USER_ASSIGN',
  payload: user,
});
