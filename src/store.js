import { createStore } from "redux";
//initial state where we assign all the initials
const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

//this is the reducer function that performs all the actions
function reducer(state = initialState, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return { ...state, loan: action.payload };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
}

//creating a store method for storing reducers
const store = createStore(reducer);

store.dispatch({ type: "account/deposit", payload: 500 });

console.log("Hey Redux");
