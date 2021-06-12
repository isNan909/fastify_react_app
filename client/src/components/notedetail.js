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

  async function getGithubData() {
    const currentNoteId = route.match.params.id;
    let response = await fetch(
      process.env.REACT_APP_SECRET_URL + '/' + currentNoteId
    );
    const data = response.json();
    if (!response.ok) {
      console.log('error fetching data');
    }
    getOneNote(data);
    const selectedNote = notes.find((note) => data.id === note.id);
    setselectedNotes(selectedNote);
  }

  useEffect(() => {
    getGithubData();

    // fetch(process.env.REACT_APP_SECRET_URL + '/' + currentNoteId, {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     getOneNote(data);
    //     const selectedNote = notes.find((note) => data._id === note._id);
    //     setselectedNotes(selectedNote);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
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
