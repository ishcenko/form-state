import { Component } from 'react';
import BookForm from './BookForm/BookForm';
import booksData from './books.json';

const books = booksData.books;
// console.log(books);
export class App extends Component {
  state = {
    books: books,
  };

  onRemoveBook = bookId => {
    // console.log(bookId);

    this.setState({
      books: this.state.books.filter(book => book.id !== bookId),
    });
  };

  onAddBook = booksData => {
    console.log(booksData);

    const finalBook = {
      ...booksData,
      id: (Math.random() * 10).toString(),
    };

    this.setState({
      books: [...this.state.books, finalBook],
    });
  };

  render() {
    return (
      <div>
        <BookForm title="Book Form" onAddBook={this.onAddBook} />
        <ul>
          {this.state.books.map(book => (
            <li key={book.id}>
              <button onClick={() => this.onRemoveBook(book.id)}>
                &times;
              </button>
              <h3>Title: {book.title}</h3>
              <h4>Author: {book.author}</h4>
              <p>Year: {book.year}</p>
              <p>Genre: {book.genre} </p>
              <p>Favourite: {book.favourite ? '❤️' : '😒'}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
