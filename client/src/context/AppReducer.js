export default function appReducer(state, action) {
  switch (action.type) {
    case 'ADD_NOTES':
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };

    //gets all notes from database
    case 'ADD_ALL_NOTES':
      return {
        ...state,
        notes: [...action.payload],
      };

    case 'EDIT_NOTES':
      const updateNote = action.payload;
      const updateNotes = state.notes.map((note) => {
        if (note.id === updateNote.id) {
          return updateNote;
        }
        return note;
      });
      return {
        ...state,
        notes: updateNotes,
      };

    case 'GET_ONE_NOTE':
      const getNote = action.payload;
      const getOneNote = state.notes.filter((note) => {
        if (note.id === getNote.id) {
          return getNote;
        }
        return note;
      });
      return {
        ...state,
        notes: getOneNote,
      };

    case 'DELETE_NOTE':
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    default:
      return state;
  }
}
