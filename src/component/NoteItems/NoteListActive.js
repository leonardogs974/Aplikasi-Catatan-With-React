import React from "react";
import NoteItemActive from "./NoteItemActive";
import { showFormattedDate } from "../../utils/data";

function NoteListActive({ note, onDelete, onArchive }) {
  let check = 0;
  note.filter((note) => (!note.archived ? (check += 1) : (check += 0)));

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
          note && !note.archived ? (
            <NoteItemActive
              key={note.id}
              id={note.id}
              title={note.title}
              date={showFormattedDate(note.createdAt)}
              body={note.body}
              archived={note.archived}
              onDelete={onDelete}
              onArchive={onArchive}
              {...note}
            />
          ) : null
        )}
      </div>
    );
  }
}

export default NoteListActive;
