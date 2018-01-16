const initialState = [];

export default (state=initialState, action) => {
  let {type, payload} = action;

  switch(type){

    case 'USER_CREATE': return [...state, payload];

    case 'USER_ASSIGN': return [payload];

    default: return state;

  }
};
