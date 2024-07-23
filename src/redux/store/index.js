import { combineReducers, legacy_createStore as createStore } from "redux";
import { expenseReducer } from "../reducers/expenses";

// for multiple reducers
const reducer = combineReducers({
  expenses: expenseReducer,
});

const initialState = {};

const store = createStore(reducer, initialState);

export default store;
