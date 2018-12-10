import React, { Component } from "react";

import authorStore from "../stores/AuthorStore";

class AuthorForm extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      imageUrl: "",
      books: []
    };
    this.onTextChange = this.onTextChange.bind(this);
    this.submitAuthor = this.submitAuthor.bind(this);
  }

  submitAuthor(e) {
    e.preventDefault();
    authorStore.addAuthor(this.state);
  }

  onTextChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.submitAuthor(e)}>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">First Name</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="first_name"
              onChange={e => this.onTextChange(e)}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Last Name</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="last_name"
              onChange={e => this.onTextChange(e)}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Image URL</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="imageUrl"
              onChange={e => this.onTextChange(e)}
            />
          </div>
          <input type="submit" /> <br />
        </form>
      </div>
    );
  }
}

export default AuthorForm;
