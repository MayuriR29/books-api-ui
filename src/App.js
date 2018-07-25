import React, { Component } from "react";
import "./App.css";
const API_HOST = process.env.REACT_APP_BOOKS_API || "http://localhost:3000";
class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      authors: []
    };
  }
  render() {
    return (
      <div>
        <div>
          <h1>Books List</h1>
          {this.state.books.map(book => {
            return <li key={book._id}>{book.title}</li>;
          })}
        </div>
        <div>
          <h1>Authors List</h1>
          {this.state.authors.map(author => {
            return <li key={author._id}>{author.name}</li>;
          })}
        </div>
      </div>
    );
  }
  async getBooks() {
    const url = `${API_HOST}/books`;
    const response = await fetch(url);
    const books = await response.json();
    this.setState({
      books: books
    });
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
    await this.getBooks();
    await this.getAuthors();
  }
}

export default App;
