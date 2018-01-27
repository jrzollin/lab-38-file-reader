const initialState = [];

export default (state=initialState, action) => {
  let {type, payload} = action;

  switch(type){

    case 'ITEM_ADD': return [...state, payload];

    default: return state;
    
  }
};
