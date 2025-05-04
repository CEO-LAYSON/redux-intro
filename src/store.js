import { applyMiddleware, combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
//initial state where we assign all the initials

//combining the two reducers before storing them
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

//creating a store method for storing rootReducer
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
