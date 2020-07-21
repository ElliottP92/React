// setup data layer
// Helps us track the basket

import React, { createContext, useContext, useReducer } from "react";
//  Data Layer
export const StateContext = createContext();

// Provider
export const StateProvider = ({ reducer, initalState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initalState)}>
        {children}
    </StateContext.Provider>
)
//  Component for the State
export const useStateValue = () => useContext(StateContext);