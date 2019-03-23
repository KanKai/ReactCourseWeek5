import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import middlewares from "./middlewares";
import reducers from "./reducers";

const mw = [
  ...middlewares
]// mw = [mw1, mw2, mw3, mwn]

const store = createStore(
  combineReducers(reducers),
  composeWithDevTools(applyMiddleware(...mw)) // applayMiddleware(mw1, mw2, mw3, mwn);
);

export default store;

// -- single reducer
// // {
// //   "r1": {},
// //   "r2": {},
// //   "r3": {}
// // }

// -- combineReducers
// {
//   "user" :{
//     "...": {},
//     "...": {},
//     "...": {}
//   },
//   "reducer2" :{
//     "r1": {},
//     "r2": {},
//     "r3": {}
//   },"reducer3" :{
//     "r1": {},
//     "r2": {},
//     "r3": {}
//   }
// }
