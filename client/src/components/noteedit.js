import { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { GlobalContext } from '../context/GlobalState';

function Noteedit(route) {
  let history = useHistory();
  const { notes, getOneNote, addNote } = useContext(GlobalContext);
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

  const onSubmit = (e) => {
    e.preventDefault();
    const request = new Request(
      process.env.REACT_APP_SECRET_URL + '/' + selectedNotes._id,
      {
        method: 'PUT',
        body: JSON.stringify(selectedNotes),
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
      }
    );

    fetch(request)
      .then(addNote(JSON.stringify(selectedNotes)))
      .then(history.push('/'))

      .catch((error) => {
        console.log(error);
      });
  };

  const handleOnChange = (userKey, newValue) =>
    setselectedNotes({ ...selectedNotes, [userKey]: newValue });

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
      <h1 className="font-bold text-3xl mb-[40px]">Create a Note.</h1>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col mb-6">
          <label className="font-bold text-sm mb-2" htmlFor="Title">Title</label>
          <input
            type="text"
            className="w-full border-2 rounded-sm p-3"
            value={selectedNotes.title}
            onChange={(e) => handleOnChange('title', e.target.value)}
            placeholder="Enter title..."
          />
        </div>
        <div className="flex flex-col mb-6">
          <label className="font-bold text-sm mb-2" htmlFor="text">Description</label>
          <textarea
            type="description"
            className="w-full border-2 rounded-sm p-3"
            value={selectedNotes.description}
            onChange={(e) => handleOnChange('description', e.target.value)}
            placeholder="Enter description..."
          />
        </div>
        <div className="flex flex-col mb-6">
          <label className="font-bold text-sm mb-2" htmlFor="text">Text</label>
          <input
            type="text"
            value={selectedNotes.date}
            className="w-full border-2 rounded-sm p-3"
            onChange={(e) => handleOnChange('date', e.target.value)}
            placeholder="Enter date..."
          />
        </div>
        <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Add notes
        </button>
      </form>
    </div>
  );
}

export default Noteedit;
