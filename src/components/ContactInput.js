import React from 'react';

class ContactInput extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      name: '',
      tag: '',
    };

    // bind context
    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onNameChangeEventHandler(evt) {
    this.setState((prevState) => {
      return {
        ...prevState,
        name: evt.target.value,
      };
    });
  }

  onTagChangeEventHandler(evt) {
    this.setState((prevState) => {
      return {
        ...prevState,
        tag: evt.target.value,
      };
    });
  }

  onSubmitEventHandler(evt) {
    evt.preventDefault();
    this.props.addContact(this.state);
  }

  render() {
    return (
      <form className="contact-input" onSubmit={this.onSubmitEventHandler}>
        <input type="text" placeholder="Nama" value={this.state.name} onChange={this.onNameChangeEventHandler} />
        <input type="text" placeholder="Tag" value={this.state.tag} onChange={this.onTagChangeEventHandler} />
        <button type="submit">Tambah</button>
      </form>
    );
  }
}

export default ContactInput;