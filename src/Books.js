import React, { Component } from "react";
import { API_HOST } from "./config";

class Books extends Component {
  constructor() {
    super();
    this.state = {
      books: []
    };
  }
   async componentDidMount() {
     await this.getBooks();
  }
  
  async getBooks() {
    const url = `${API_HOST}/books`;
    const response = await fetch(url);
    const books = await response.json();
    this.setState({
      books: books
    });
  }
  render() {
    return (
      <div>
        <h1>Books List</h1>
        {this.state.books.map(book => {
          return <li key={book._id}>{book.title}</li>;
        })}
      </div>
    );
  }
}
export default Books;
