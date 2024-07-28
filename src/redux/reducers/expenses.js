import {
  ADD_EXPENSE,
  DELETE_EXPENSE,
  SEARCH_EXPENSE,
  SET_CATEGORY_SUMS,
  EDIT_EXPENSE,
} from "../action-types/expenses";

const initialState = {
  expenseList: [],
  searchQuery: "",
};

export const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        ...state,
        expenseList: [...state.expenseList, action.data],
      };

    case DELETE_EXPENSE: {
      const { data } = action;
      const updatedList = state.expenseList.filter(
        (item) => item.createdAt !== data.createdAt
      );
      return {
        ...state,
        expenseList: updatedList,
      };
    }

    case EDIT_EXPENSE: {
      const { data } = action;
      const updatedList = state.expenseList.map((item) =>
        item.createdAt === data.createdAt ? data : item
      );
      return {
        ...state,
        expenseList: updatedList,
      };
    }

    case SEARCH_EXPENSE: {
      const { searchQuery } = action;
      return {
        ...state,
        searchQuery: searchQuery,
      };
    }

    case SET_CATEGORY_SUMS:
      return {
        ...state,
        categorySums: action.data,
      };

    default:
      return state;
  }
};
