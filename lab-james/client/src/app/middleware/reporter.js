let reporter = store => next => action => {

  try {
    let result = next(action);
    console.log('__STATE__', store.getState());
    return result;
  }

  catch(err){
    err.action = action;
    console.log('__ACTION__', action);
    console.log('__ERROR__', err.message);
  }
};

export default reporter;
