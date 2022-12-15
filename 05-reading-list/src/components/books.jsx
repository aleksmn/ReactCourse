import React, { Component } from 'react';
import { getBooks } from '../services/bookService';
import Like from './common/like';
import Pagination from './common/pagination';

// imrc - shortcut create react component
// cc - create class



class Books extends Component {
  state = {
    books: getBooks(),
    pageSize: 4
  };

  handleDelete = (book) => {
    console.log(book)
    const books = this.state.books.filter(b => b._id !== book._id)
    this.setState({ books: books })
  }

  handleLike = book => {
    // console.log('Лайк!', book)

    const books = [...this.state.books];
    const index = books.indexOf(book);
    books[index] = { ...books[index] };
    books[index].liked = !books[index].liked;
    this.setState({ books })

  }

  handlePageChange = page => {
    console.log(page)
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.books.map(book => (
              <tr key={book._id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.genre.name}</td>
                <td>{book.pages}</td>
                <td>
                  <Like liked={book.liked} onLikeToggle={() => this.handleLike(book)} />
                </td>
                <td><button onClick={() => this.handleDelete(book)} className="btn btn-danger btn-sm">Удалить</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemsCount={this.state.books.length}
          pageSize={this.state.pageSize}
          onPageChnge={this.handlePageChange}
        />
      </React.Fragment>);
  }
}

export default Books;


