import React from "react";
import NoteItemBody from "./NoteItemBody";
import DeleteButton from "./DeleteButton";
import MoveButton from "./MoveButton";

function NoteItemArchive({
  id,
  title,
  date,
  body,
  archived,
  onDelete,
  onMove,
}) {
  if (archived === true) {
    return (
      <div className="noteItem">
        <NoteItemBody title={title} date={date} body={body} />
        <DeleteButton id={id} onDelete={onDelete} />
        <MoveButton id={id} onMove={onMove} />
      </div>
    );
  } 
}

export default NoteItemArchive;
