export default function appReducer(state, action) {
  switch (action.type) {
    case 'ADD_NOTES':
      return {
        ...state,
        notes: [...state.notes, action.payload],
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

    case 'DELETE_NOTE':
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    default:
      return state;
  }
}
