import React, {createContext, useReducer} from 'react';
import reducer from './store/reducer';

export const Store = createContext();

const initialState = {
   cart: []
}

export default function StoreProvider(props) {
   const [state, dispatch] = useReducer(reducer, initialState);
   const value = {state: state, dispatch: dispatch};

   return (
      <Store.Provider value={value}>{props.children}</Store.Provider>
   )
}