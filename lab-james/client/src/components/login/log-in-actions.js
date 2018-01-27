import superagent from 'superagent';
import cookie from 'react-cookies';

export const userCreate = payload => dispatch => {
  superagent.post(`${__SERVER_URL__}/createUser`)
    .withCredentials()
    .send(payload)
    .then(res => dispatch(createAction(res.body)))
    .catch(console.err);
};

export const userFind = payload => dispatch => {
  superagent.get(`${__SERVER_URL__}/findUser`)
    .withCredentials()
    .auth(payload.username, payload.password)
    .then(res => dispatch(assignAction(res.body)))
    .catch(console.err);
};

export const userLogOut = () => {
  return {
    type: 'USER_LOGOUT',
  };
};

const createAction = user => ({
  type: 'USER_CREATE',
  payload: user,
});

const assignAction = user => ({
  type: 'USER_ASSIGN',
  payload: user,
});
