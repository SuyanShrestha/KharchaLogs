import { combineReducers, legacy_createStore as createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import { expenseReducer } from "../reducers/expenses";

// for multiple reducers
const rootReducer = combineReducers({
  expenses: expenseReducer,
});

// configuration for redux-persist
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
