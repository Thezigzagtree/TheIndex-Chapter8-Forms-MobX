import React, { Component } from "react";

import bookStore from "../stores/BookStore";

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      color: "",
      authors: []
    };
    this.onTextChange = this.onTextChange.bind(this);
    this.submitBook = this.submitBook.bind(this);
  }

  submitBook(e) {
    e.preventDefault();
    //ADD CURRENT AUTHOR TO AUTHORS ARRAY
    bookStore.addBook(this.state);
  }

  onTextChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onColorChange(e) {
    this.setState({ color: e.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.submitBook(e)}>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Title</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="title"
              onChange={e => this.onTextChange(e)}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Book Color</span>
            </div>
            <div class="form-group">
              <label for="sel1">Select Color:</label>
              <select
                class="form-control"
                id="sel1"
                onChange={e => this.onColorChange(e)}
              >
                <option>red</option>
                <option>green</option>
                <option>blue</option>
                <option>black</option>
                <option>white</option>
                <option>yellow</option>
                <option>grey</option>
                <option>orange</option>
                <option>purple</option>
              </select>
            </div>
          </div>
          <input type="submit" /> <br />
        </form>
      </div>
    );
  }
}

export default BookForm;
