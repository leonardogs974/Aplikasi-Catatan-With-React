import React from "react";
import { getDataNote } from "../utils/data";
import NoteInput from "./NoteInput";
import NoteListActive from "./NoteItems/NoteListActive";
import NoteListArchive from "./NoteItems/NoteListArchive";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    //Inisialisasi State
    this.state = {
      note: getDataNote(),
      title: "",
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onMoveHandler = this.onMoveHandler.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.tmp = this.state.note;
  }

  onSearch(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        title: event.target.value,
      };
    });
    const cariNote = this.state.note.filter((note) =>
      note.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    event.target.value.length !== 0? 
    this.setState((prevState) => {
      return{
        ...prevState,
        note: cariNote
      }
    }) : this.setState((prevState) => {
      return{
        ...prevState,
        note: this.tmp
      }
    });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        note: [
          ...prevState.note,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString(),
          },
        ],
      };
    });
  }

  onDeleteHandler(id) {
    const note = this.state.note.filter((note) => note.id !== id);
    this.setState({ note });
  }

  onMoveHandler(id) {
    const datax = this.state.note.filter((note) => note.id === id);
    datax[0].archived = false;
    const newDatax = this.state.note.map((note) => note);
    this.setState({ note: newDatax });
  }

  onArchiveHandler(id) {
    const datax = this.state.note.filter((note) => note.id === id);
    datax[0].archived = true;
    const newDatax = this.state.note.map((note) => note);
    this.setState({ note: newDatax });
  }

  render() {
    return (
      <div className="noteApp">
        {/* <NoteHeader
          title={this.state.note.title}
          onSearchNote={this.onSearchNoteHandler}
        /> */}

        <div className="noteHeader">
          <h1>Catatan Apps</h1>
          <input
            type="text"
            placeholder="Masukan Keyword..."
            className="noteSearch"
            value={this.state.title}
            onChange={this.onSearch}
          />
        </div>

        <div className="noteBody">
          <NoteInput addNote={this.onAddNoteHandler} />
          <div className="noteInfo">
            <div className="activeSide">
              <h1>Catatan Aktif</h1>
              <NoteListActive
                note={this.state.note}
                onDelete={this.onDeleteHandler}
                onArchive={this.onArchiveHandler}
              />
            </div>
            <div className="archiveSide">
              <h1>Arsip</h1>
              <NoteListArchive
                note={this.state.note}
                onDelete={this.onDeleteHandler}
                onMove={this.onMoveHandler}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NoteApp;
