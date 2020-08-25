// to setup a data layer
// we need this to track the basket

import React, { createContext, useReducer, useContext } from "react";

// This is data layer
export const StateContext = createContext();

// Build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//This is how we use it inside of component
export const useStateValue = () => useContext(StateContext);
