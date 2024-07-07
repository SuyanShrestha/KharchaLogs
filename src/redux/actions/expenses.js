import {
  ADD_EXPENSE,
  DELETE_EXPENSE,
  SEARCH_EXPENSE,
  SET_CATEGORY_SUMS,
} from "../action-types/expenses";

export const addExpense = (data) => {
  console.log("data", data);
  return {
    type: ADD_EXPENSE,
    data: data,
  };
};

export const deleteExpense = (data) => {
  return {
    type: DELETE_EXPENSE,
    data: data,
  };
};

export const searchExpense = (searchQuery) => {
  return {
    type: SEARCH_EXPENSE,
    searchQuery: searchQuery,
  };
};

export const handleCategorySums = (data) => {
  return {
    type: SET_CATEGORY_SUMS,
    data: data,
  };
};
