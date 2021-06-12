import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { GlobalContext } from '../context/GlobalState';

import noNote from '../assets/no-note.svg';

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

  async function deleteNotes(id) {
    await fetch(process.env.REACT_APP_SECRET_URL + '/' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((id) => {
        removeNote(id);
        getNotes();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      {notes.length > 0 ? (
        <div>
          <div className="flex align-middle justify-between mb-8">
            <h1 className="font-bold text-3xl">My notes</h1>
            <div>
              <Link to="/add">
                <button>
                  <h1>+ Add notes</h1>
                </button>
              </Link>
            </div>
          </div>
          <div>
            {notes.map((notes) => (
              <div
                className="rounded-md border p-5 border-gray-100 shadow-sm mb-4"
                key={notes._id}
              >
                <div>
                  <h2 className="text-lg font-bold">{notes.title}</h2>
                  <p>{notes.description}</p>
                </div>
                <div className="flex mt-6 justify-end gap-4">
                  <Link to={`/detail/${notes._id}`}>
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 15 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.5 9.65C7.89783 9.65 8.27936 9.49196 8.56066 9.21065C8.84196 8.92935 9 8.54782 9 8.14999C9 7.75217 8.84196 7.37064 8.56066 7.08933C8.27936 6.80803 7.89783 6.64999 7.5 6.64999C7.10218 6.64999 6.72064 6.80803 6.43934 7.08933C6.15804 7.37064 6 7.75217 6 8.14999C6 8.54782 6.15804 8.92935 6.43934 9.21065C6.72064 9.49196 7.10218 9.65 7.5 9.65Z"
                        fill="#FF9F2E"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.343506 8.14999C1.29901 5.10724 4.14151 2.89999 7.50001 2.89999C10.8585 2.89999 13.701 5.10724 14.6565 8.14999C13.701 11.1927 10.8585 13.4 7.50001 13.4C4.14151 13.4 1.29901 11.1927 0.343506 8.14999ZM10.5 8.14999C10.5 8.94564 10.1839 9.70871 9.62133 10.2713C9.05872 10.8339 8.29566 11.15 7.50001 11.15C6.70436 11.15 5.94129 10.8339 5.37868 10.2713C4.81608 9.70871 4.50001 8.94564 4.50001 8.14999C4.50001 7.35434 4.81608 6.59128 5.37868 6.02867C5.94129 5.46606 6.70436 5.14999 7.50001 5.14999C8.29566 5.14999 9.05872 5.46606 9.62133 6.02867C10.1839 6.59128 10.5 7.35434 10.5 8.14999Z"
                        fill="#FF9F2E"
                      />
                    </svg>
                  </Link>
                  <Link to={`/edit/${notes._id}`}>
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 15 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.0605 2.58949C12.7792 2.30829 12.3977 2.15031 12 2.15031C11.6023 2.15031 11.2208 2.30829 10.9395 2.58949L5.25 8.27899V10.4H7.371L13.0605 4.71049C13.3417 4.4292 13.4997 4.04774 13.4997 3.64999C13.4997 3.25225 13.3417 2.87079 13.0605 2.58949Z"
                        fill="#FF9F2E"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.5 5.14999C1.5 4.75217 1.65804 4.37064 1.93934 4.08933C2.22064 3.80803 2.60218 3.64999 3 3.64999H6C6.19891 3.64999 6.38968 3.72901 6.53033 3.86966C6.67098 4.01032 6.75 4.20108 6.75 4.39999C6.75 4.59891 6.67098 4.78967 6.53033 4.93032C6.38968 5.07098 6.19891 5.14999 6 5.14999H3V12.65H10.5V9.64999C10.5 9.45108 10.579 9.26032 10.7197 9.11966C10.8603 8.97901 11.0511 8.89999 11.25 8.89999C11.4489 8.89999 11.6397 8.97901 11.7803 9.11966C11.921 9.26032 12 9.45108 12 9.64999V12.65C12 13.0478 11.842 13.4293 11.5607 13.7107C11.2794 13.992 10.8978 14.15 10.5 14.15H3C2.60218 14.15 2.22064 13.992 1.93934 13.7107C1.65804 13.4293 1.5 13.0478 1.5 12.65V5.14999Z"
                        fill="#FF9F2E"
                      />
                    </svg>
                  </Link>
                  <button onClick={() => deleteNotes(notes._id)}>
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 15 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.75 2.14999C6.61075 2.15007 6.47428 2.18891 6.35585 2.26216C6.23743 2.33541 6.14174 2.44018 6.0795 2.56474L5.5365 3.64999H3C2.80109 3.64999 2.61032 3.72901 2.46967 3.86966C2.32902 4.01032 2.25 4.20108 2.25 4.39999C2.25 4.59891 2.32902 4.78967 2.46967 4.93032C2.61032 5.07098 2.80109 5.14999 3 5.14999V12.65C3 13.0478 3.15804 13.4293 3.43934 13.7107C3.72064 13.992 4.10218 14.15 4.5 14.15H10.5C10.8978 14.15 11.2794 13.992 11.5607 13.7107C11.842 13.4293 12 13.0478 12 12.65V5.14999C12.1989 5.14999 12.3897 5.07098 12.5303 4.93032C12.671 4.78967 12.75 4.59891 12.75 4.39999C12.75 4.20108 12.671 4.01032 12.5303 3.86966C12.3897 3.72901 12.1989 3.64999 12 3.64999H9.4635L8.9205 2.56474C8.85826 2.44018 8.76257 2.33541 8.64414 2.26216C8.52572 2.18891 8.38925 2.15007 8.25 2.14999H6.75ZM5.25 6.64999C5.25 6.45108 5.32902 6.26032 5.46967 6.11966C5.61032 5.97901 5.80109 5.89999 6 5.89999C6.19891 5.89999 6.38968 5.97901 6.53033 6.11966C6.67098 6.26032 6.75 6.45108 6.75 6.64999V11.15C6.75 11.3489 6.67098 11.5397 6.53033 11.6803C6.38968 11.821 6.19891 11.9 6 11.9C5.80109 11.9 5.61032 11.821 5.46967 11.6803C5.32902 11.5397 5.25 11.3489 5.25 11.15V6.64999ZM9 5.89999C8.80109 5.89999 8.61032 5.97901 8.46967 6.11966C8.32902 6.26032 8.25 6.45108 8.25 6.64999V11.15C8.25 11.3489 8.32902 11.5397 8.46967 11.6803C8.61032 11.821 8.80109 11.9 9 11.9C9.19891 11.9 9.38968 11.821 9.53033 11.6803C9.67098 11.5397 9.75 11.3489 9.75 11.15V6.64999C9.75 6.45108 9.67098 6.26032 9.53033 6.11966C9.38968 5.97901 9.19891 5.89999 9 5.89999Z"
                        fill="#FF9F2E"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-5 mt-14">
          <img className="mx-auto mb-9" src={noNote} alt="no notes icon" />
          <h2 className="text-3xl font-bold text-current mb-[10px]">
            Oops, It’s Empty!.
          </h2>
          <p className="text-gray-500">You have not created any notes yet.</p>
          <div className="mt-[30px]">
            <Link to="/add">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Create a note
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Notelist;
