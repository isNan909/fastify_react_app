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
    setselectedNotes(selectedNote);
  }

  return (
    <div>
      <div className="mb-[5px]">
        <Link to="/">
          <button>
            <span className="flex items-center">
              <svg
                width="20"
                height="20"
                className="mr-2"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.70703 14.7069C7.5195 14.8944 7.26519 14.9997 7.00003 14.9997C6.73487 14.9997 6.48056 14.8944 6.29303 14.7069L2.29303 10.7069C2.10556 10.5194 2.00024 10.2651 2.00024 9.99992C2.00024 9.73475 2.10556 9.48045 2.29303 9.29292L6.29303 5.29292C6.48163 5.11076 6.73423 5.00997 6.99643 5.01224C7.25863 5.01452 7.50944 5.11969 7.69485 5.3051C7.88026 5.49051 7.98543 5.74132 7.9877 6.00352C7.98998 6.26571 7.88919 6.51832 7.70703 6.70692L5.41403 8.99992H17C17.2652 8.99992 17.5196 9.10528 17.7071 9.29281C17.8947 9.48035 18 9.7347 18 9.99992C18 10.2651 17.8947 10.5195 17.7071 10.707C17.5196 10.8946 17.2652 10.9999 17 10.9999H5.41403L7.70703 13.2929C7.8945 13.4804 7.99982 13.7348 7.99982 13.9999C7.99982 14.2651 7.8945 14.5194 7.70703 14.7069Z"
                  fill="black"
                />
              </svg>
              Go back
            </span>
          </button>
        </Link>
      </div>
      <h1 className="font-bold text-3xl">My notes</h1>
      <div className="mt-10">
        <span className="font-sm mb-1 block text-gray-400"> {selectedNotes.date}</span>
        <h2 className="text-2xl font-bold">{selectedNotes.title}</h2>
        <p className="text-base mt-3">{selectedNotes.description}</p>
      </div>
    </div>
  );
}

export default NoteDetail;
