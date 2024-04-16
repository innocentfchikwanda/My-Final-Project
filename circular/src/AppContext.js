// AppContext.js
import React, { createContext, useContext, useReducer } from "react";

// Initial state
const initialState = {
  // Your initial state properties
};

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    // Handle different actions here
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

// Create the context
const AppContext = createContext();

// Custom hook to access the context
export function useAppContext() {
  return useContext(AppContext);
}

// Provider component
export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
