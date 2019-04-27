export default store => next => action => {
  if(typeof action.payload === 'object'){
    next(action);
  }
};
// mw1()()()