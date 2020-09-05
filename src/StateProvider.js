// Data Layer for the app
// We need this to track the shopping basket

import React, {createContext, useContext, useReducer} from "react";

// App data layer
export const StateContext = createContext();

// Provider layer
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
    </StateContext.Provider>
);

// StateProvider use within a component
export const useStateValue = () => useContext(StateContext);