import { Component } from 'react';
import BookForm from './BookForm/BookForm';
import booksData from './books.json';

const books = booksData.books;
console.log(books);
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

  render() {
    return (
      <div>
        <BookForm />
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
