import React, { Component } from 'react';
import BooksTable from './booksTable'
import { getBooks } from '../services/bookService';
import { getGenres } from '../services/genreService';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import _ from 'lodash';

// imrc - shortcut create react component
// cc - create class

class Books extends Component {
  state = {
    books: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: 'title', order: 'asc' }
  };

  componentDidMount() {
    const genres = [{ name: 'Все жанры', _id: '' }, ...getGenres()]
    this.setState({ books: getBooks(), genres: genres });
  }

  handleDelete = (book) => {
    // console.log(book)
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
    // console.log(page);
    this.setState({ currentPage: page });
  }


  handleGenreSelect = genre => {
    // console.log(genre);

    this.setState({ selectedGenre: genre, currentPage: 1 })
  }

  handleSort = sortColumn => {

    this.setState({ sortColumn, currentPage: 1 });
  }

  render() {

    if (this.state.books.length === 0) return <p>Здесь нет ни одной книги :(</p>

    // Filter
    const filteredBooks = this.state.selectedGenre && this.state.selectedGenre._id
      ? this.state.books.filter(m => m.genre._id === this.state.selectedGenre._id)
      : this.state.books;

    // Sorting
    const sortedBooks = _.orderBy(filteredBooks, [this.state.sortColumn.path], [this.state.sortColumn.order])


    const books = paginate(sortedBooks, this.state.currentPage, this.state.pageSize);

    return (
      <div className='row'>
        <div className="col-2 my-5">
          <ListGroup
            items={this.state.genres}
            onItemSelect={this.handleGenreSelect}
            selectedItem={this.state.selectedGenre}
          />
        </div>
        <div className="col">
          <p>В списке книг: {filteredBooks.length}</p>
          <BooksTable 
            books={books}
            sortColumn={this.state.sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete} 
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={filteredBooks.length}
            pageSize={this.state.pageSize}
            onPageChange={this.handlePageChange}
            currentPage={this.state.currentPage}
          />
        </div>
      </div>);
  }
}

export default Books;


