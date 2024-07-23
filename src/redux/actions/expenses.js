import {
  ADD_EXPENSE,
  DELETE_EXPENSE,
  SEARCH_EXPENSE,
  SET_CATEGORY_SUMS,
  EDIT_EXPENSE,
} from "../action-types/expenses";

export const addExpense = (data) => {
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

export const handleEdit = (data) => {
  return {
    type: EDIT_EXPENSE,
    data: data,
  };
};
