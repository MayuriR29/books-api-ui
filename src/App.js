import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: []
    };
  }
  render() {
    return (
      <div>
        {this.state.books.map(book => {
          return <li key={book._id}>{book.title}</li>;
        })}
      </div>
    );
  }
  async componentDidMount() {
    const url =
      process.env.REACT_APP_BOOKS_API || "http://localhost:3000/books";
    const response = await fetch(url);
    console.log("response", response);
    const books = await response.json();
    console.log("books", books);
    this.setState({
      books: books
    });
  }
}

export default App;
