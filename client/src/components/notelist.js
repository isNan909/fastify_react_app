import { useContext, useEffect, useState } from 'react';

import { GlobalContext } from '../context/GlobalState';

function Notelist() {
  const [response, setResponse] = useState([]);
  const { notes } = useContext(GlobalContext);

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, [notes]);

  async function getNotes() {
    await fetch(process.env.REACT_APP_SECRET_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        notes.push(...data);
        setResponse(notes);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <p>Notelisting page</p>
      {response.map((notes) => (
        <div key={notes.id}>
          <p>{notes.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Notelist;
