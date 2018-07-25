import React, { Component } from "react";
import {API_HOST} from "./config";
class Authors extends Component {
  constructor() {
    super();
    this.state = {
      authors: []
    };
  }
  render() {
    return (
      <div>
        <h1>Authors List</h1>
        {this.state.authors.map(author => {
          return <li key={author._id}>{author.name}</li>;
        })}
      </div>
    );
  }
  async getAuthors() {
    const url = `${API_HOST}/authors`;
    const response = await fetch(url);
    const authors = await response.json();
    this.setState({
      authors: authors
    });
  }
  async componentDidMount() {
    await this.getAuthors();
  }
}
export default Authors;
