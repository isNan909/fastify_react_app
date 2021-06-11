import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { GlobalContext } from '../context/GlobalState';

function NoteDetail(route) {
  const { notes, getOneNote } = useContext(GlobalContext);
  const [selectedNotes, setselectedNotes] = useState({
    id: '',
    title: '',
    description: '',
    date: '',
  });

  useEffect(() => {
    const currentNoteId = route.match.params.id;
    fetch(process.env.REACT_APP_SECRET_URL + '/' + currentNoteId, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        getOneNote(data);
        const selectedNote = notes.find((note) => data._id === note._id);
        console.log(selectedNote);
        setselectedNotes(selectedNote);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line
  }, []);

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
