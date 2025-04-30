import { combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";
//initial state where we assign all the initials

//combining the two reducers before storing them
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

//creating a store method for storing rootReducer
const store = createStore(rootReducer);

export default store;
