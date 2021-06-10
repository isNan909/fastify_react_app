import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { GlobalContext } from '../context/GlobalState';

function Notelist() {
  const { notes, removeNote, addAllNote } = useContext(GlobalContext);

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  async function getNotes() {
    await fetch(process.env.REACT_APP_SECRET_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        addAllNote(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <Link to="/add">
        <button>
          <span>+ Add notes</span>
        </button>
      </Link>
      {notes.map((notes) => (
        <div key={notes._id}>
          <div>
            <p>{notes.title}</p>
            <p>{notes.description}</p>
            <p>{notes.date}</p>
          </div>
          <Link to={`/detail/${notes._id}`}>see detail</Link>
          <Link to={`/edit/${notes._id}`}>
            <div>edit</div>
          </Link>
          <button onClick={() => removeNote(notes._id)}>delete</button>
        </div>
      ))}
    </>
  );
}

export default Notelist;
