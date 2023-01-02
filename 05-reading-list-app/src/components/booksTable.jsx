import React, { Component } from 'react';
import Like from './common/like';

class BooksTable extends Component {
  raiseSort = path => {
    // Testing:
    // console.log(path)

    const sortColumn = { ...this.props.sortColumn };

    if (sortColumn.path === path) {
      sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
    }
    else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }

    this.props.onSort(sortColumn);

  }

  render() {

    const { books, onDelete, onLike } = this.props;

    return (
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => this.raiseSort('title')}>Название</th>
            <th onClick={() => this.raiseSort('author')}>Автор</th>
            <th onClick={() => this.raiseSort('genre.name')}>Жанр</th>
            <th onClick={() => this.raiseSort('pages')}>Стр.</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book._id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre.name}</td>
              <td>{book.pages}</td>
              <td>
                <Like liked={book.liked} onLikeToggle={() => onLike(book)} />
              </td>
              <td><button onClick={() => onDelete(book)} className="btn btn-danger btn-sm">Удалить</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default BooksTable;
