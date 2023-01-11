import React, { Component } from 'react';
import Like from './common/like';
import Table from './common/table';
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
      <Table
        data={books}
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default BooksTable;
