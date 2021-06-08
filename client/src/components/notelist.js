import { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

function Notelist() {
  const { notes } = useContext(GlobalContext);
  console.log(notes);
  return (
    <div>
      <p>Notelisting page</p>
      {notes.map((notes) => (
        <div>{notes.id}</div>
      ))}
    </div>
  );
}

export default Notelist;
