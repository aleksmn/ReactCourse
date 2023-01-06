import React, { Component } from 'react';
import TableHeader from './common/tableHeader';
import Like from './common/like';

class BooksTable extends Component {
  columns = [
    { path: 'title', label: 'Название' },
    { path: 'author', label: 'Автор' },
    { path: 'genre.name', label: 'Жанр' },
    { path: 'pages', label: 'Стр.' },
    { key: 'like' },
    { key: 'delete' }
  ];
  
  render() {


    const { books, onDelete, onLike, onSort, sortColumn } = this.props;

    return (
      <table className="table">
        <TableHeader columns={this.columns} sortColumn={sortColumn} onSort={onSort} />
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
