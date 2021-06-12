import { useState, useContext } from 'react';
import { Link } from 'react-router-dom'

import { GlobalContext } from '../context/GlobalState';

function Notenew() {
  const { addNote } = useContext(GlobalContext);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      title,
      description,
      date,
    };

    const request = new Request(process.env.REACT_APP_SECRET_URL, {
      method: 'POST',
      body: JSON.stringify(newNote),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    });

    fetch(request)
      .then(addNote(newNote))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <p>This is note new page. Add new note here.</p>
      <div>
        <Link to="/">
          <button>
            <span>Go back</span>
          </button>
        </Link>
      </div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title..."
          />
        </div>
        <div>
          <label htmlFor="text">Text</label>
          <textarea
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description..."
          />
        </div>
        <div>
          <label htmlFor="text">Text</label>
          <textarea
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Enter date..."
          />
        </div>
        <button>Add notes</button>
      </form>
    </div>
  );
}

export default Notenew;
