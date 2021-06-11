import { useContext, useEffect } from 'react';

import { GlobalContext } from '../context/GlobalState';

function Noteedit(route) {
  const { notes, getOneNote } = useContext(GlobalContext);

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
        // console.log(data);
        getOneNote(data);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line
  }, []);

  console.log(notes);

  return (
    <div>
      <p>This is note edit page</p>
    </div>
  );
}

export default Noteedit;
