import React from "react";
import NoteItemArchive from "./NoteItemArchive";

function NoteListArchive({ note, onDelete, onMove }) {
  let check = 0;
  note.filter((note) => (note.archived ? (check += 1) : (check += 0)));

  if (note.length === 0) {
    return (
      <div className="noteItemKosong">
        <span>Tidak Ada Catatan</span>
      </div>
    );
  } else if (!check) {
    return (
      <div className="noteItemKosong">
        <span>Tidak Ada Catatan</span>
      </div>
    );
  } else {
    return (
      <div className="noteList">
        {note.map((note) =>
          note && note.archived ? (
            <NoteItemArchive
              key={note.id}
              id={note.id}
              title={note.title}
              date={note.createdAt}
              body={note.body}
              archived={note.archived}
              onDelete={onDelete}
              onMove={onMove}
              {...note}
            />
          ) : null
        )}
      </div>
    );
  }
}

export default NoteListArchive;
