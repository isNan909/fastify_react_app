import { createContext, useReducer } from 'react';

import appReducer from './AppReducer';

const initialState = {
  notes: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  function addNote(note) {
    dispatch({
      type: 'ADD_NOTES',
      payload: note,
    });
  }

  function editNote(note) {
    dispatch({
      type: 'EDIT_NOTES',
      payload: note,
    });
  }

  function removeNote(id) {
    dispatch({
      type: 'DELETE_NOTE',
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        notes: state.notes,
        addNote,
        editNote,
        removeNote,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
