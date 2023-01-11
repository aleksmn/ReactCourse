import React, { Component } from 'react';
import TableHeader from './common/tableHeader';
import Like from './common/like';
import TableBody from './common/tableBody';

class BooksTable extends Component {
  columns = [
    { path: 'title', label: 'Название' },
    { path: 'author', label: 'Автор' },
    { path: 'genre.name', label: 'Жанр' },
    { path: 'pages', label: 'Стр.' },
    // { key: 'like'},
    // { key: 'delete'}
    { key: 'like', content: book => <Like liked={book.liked} onLikeToggle={() => this.props.onLike(book)} /> },
    { key: 'delete', content: book => <button onClick={() => this.props.onDelete(book)} className="btn btn-danger btn-sm">Удалить</button> }
  ];

  

  render() {

    const { books, onSort, sortColumn } = this.props;

    return (
      <table className="table">
        <TableHeader columns={this.columns} sortColumn={sortColumn} onSort={onSort} />

        <TableBody data={books} columns={this.columns} />

      </table>
    );
  }
}

export default BooksTable;
