import {
  ADD_EXPENSE,
  DELETE_EXPENSE,
  SEARCH_EXPENSE,
  SET_CATEGORY_SUMS,
  EDIT_EXPENSE
} from "../action-types/expenses";

// LOCAL STORAGE
const handleInitialState = () => {
  const list = localStorage.getItem("expense-list");
  let expenses = [];
  if (list) {
    expenses = JSON.parse(list);
  }
  return expenses;
};

const initialState = {
  expenseList: handleInitialState(),
  searchQuery: "",
};

export const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      localStorage.setItem(
        "expense-list",
        JSON.stringify([...state.expenseList, action.data])
      );

      return {
        ...state,
        expenseList: [...state.expenseList, action.data],
      };

    case DELETE_EXPENSE: {
      const { data } = action;
      const updatedList = state.expenseList.filter(
        (item) => item.createdAt !== data.createdAt
      );
      localStorage.setItem("expense-list", JSON.stringify([updatedList]));
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
      localStorage.setItem("expense-list", JSON.stringify(updatedList));
      return {
        ...state,
        expenseList: updatedList,
      };
    }

    case SEARCH_EXPENSE: {
      const { searchQuery } = action;
      return {
        ...state,
        searchQuery: action.searchQuery,
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
