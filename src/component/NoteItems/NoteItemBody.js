import React from "react";

function NoteItemBody({ title, date, body }) {
  return (
    <div className="noteItemBodys">
      <h3 className="noteItemTitle">{title}</h3>
      <p className="noteItemDate">{date}</p>
      <p className="noteItemBody">{body}</p>
    </div>
  );
}

export default NoteItemBody;
