import React from "react";
import NoteItemBody from "./NoteItemBody";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

function NoteItemActive({
  id,
  title,
  date,
  body,
  archived,
  onDelete,
  onArchive,
}) {
  if (archived === false) {
    return (
      <div className="noteItem">
        <NoteItemBody title={title} date={date} body={body} />
        <DeleteButton id={id} onDelete={onDelete} />
        <ArchiveButton id={id} onArchive={onArchive} />
      </div>
    );
  } else if (archived === true) {
    return (
     null
    );
  } else {
    return (
      <div className="noteItem">
        <span>Data Kosong</span>
      </div>
    );
  }
}

export default NoteItemActive;
