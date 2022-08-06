import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      word: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    this.onResetEventHandler = this.onResetEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    let num = 50;
    this.setState((prevState) => {
      return {
        ...prevState,
        title: event.target.value.slice(0, num),
        word:
          num - event.target.value.length < 0
            ? 0
            : num - event.target.value.length,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value,
      };
    });
  }

  onResetEventHandler() {
    this.setState({
      title: "",
      body: "",
      word: 50
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.onResetEventHandler();
  }

  render() {
    return (
      <div className="noteInput">
        <h2>Buat Catatan</h2>
        <label>Sisa Karakter: {this.state.word}</label>
        <form onSubmit={this.onSubmitEventHandler}>
          <input
            type="text"
            placeholder="Masukkan Judul Catatan..."
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />
          <textarea
            placeholder="Masukkan Isi Catatan..."
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
          ></textarea>
          <button>Buat Catatan</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
