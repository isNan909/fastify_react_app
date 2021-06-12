import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { GlobalContext } from '../context/GlobalState';

function NoteDetail(route) {
  const { notes, getOneNote } = useContext(GlobalContext);
  const [selectedNotes, setselectedNotes] = useState({
    _id: '',
    title: '',
    description: '',
    date: '',
  });

  useEffect(() => {
    getNotesData();
        // eslint-disable-next-line
  }, []);

  async function getNotesData() {
    const currentNoteId = route.match.params.id;
    let response = await fetch(
      process.env.REACT_APP_SECRET_URL + '/' + currentNoteId
    );
    const data = response.json();
    if (!response.ok) {
      console.log('error fetching data');
    }
    getOneNote(data);
    const selectedNote = notes.find((note) => currentNoteId === note._id);
    console.log(selectedNote);
    setselectedNotes(selectedNote);
  }

  return (
    <div>
      <Link to="/">
        <button>
          <span>Go back</span>
        </button>
      </Link>
      {selectedNotes._id}
      {selectedNotes.title}
      {selectedNotes.description}
      {selectedNotes.date}
    </div>
  );
}

export default NoteDetail;
