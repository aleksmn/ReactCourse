import React, { Component, Fragment } from 'react';
import { getBooks } from '../services/bookService';

// imrc - shortcut create react component
// cc - create class

class Books extends Component {
  state = {
    books: getBooks()
  };

  handleDelete = (book) => {
    console.log(book)
    const books = this.state.books.filter(b => b._id !== book._id)
    this.setState({ books: books })
  }

  render() {
    if (this.state.books.length === 0) return <p>Здесь нет ни одной книги :(</p>

    return (
      <React.Fragment>
        <p>В списке книг: {this.state.books.length}</p>
        <table className="table">
          <thead>
            <tr>
              <th>Название</th>
              <th>Автор</th>
              <th>Жанр</th>
              <th>Стр.</th>
            </tr>
          </thead>
          <tbody>
            {this.state.books.map(book => (
              <tr key={book._id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.genre.name}</td>
                <td>{book.pages}</td>
                <td><button onClick={() => this.handleDelete(book)} className="btn btn-danger btn-sm">Удалить</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>);
  }
}

export default Books;


