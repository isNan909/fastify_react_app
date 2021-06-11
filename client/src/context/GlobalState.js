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

  function addAllNote(notes) {
    dispatch({
      type: 'ADD_ALL_NOTES',
      payload: notes,
    });
  }

  function editNote(note) {
    dispatch({
      type: 'EDIT_NOTES',
      payload: note,
    });
  }


  function getOneNote(id) {
    dispatch({
      type: 'GET_ONE_NOTE',
      payload: id,
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
        addAllNote,
        getOneNote
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
