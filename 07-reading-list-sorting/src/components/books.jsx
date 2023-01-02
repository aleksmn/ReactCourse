import React, { Component } from 'react';
import { getBooks } from '../services/bookService';
import { getGenres } from '../services/genreService';
import Like from './common/like';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';

// imrc - shortcut create react component
// cc - create class

class Books extends Component {
  state = {
    books: [],
    genres: [],
    pageSize: 4,
    currentPage: 1
  };

  componentDidMount() {
    const genres = [{ name: 'Все жанры', _id: 0 }, ...getGenres()]
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

  render() {

    if (this.state.books.length === 0) return <p>Здесь нет ни одной книги :(</p>

    const filteredBooks = this.state.selectedGenre && this.state.selectedGenre._id
      ? this.state.books.filter(m => m.genre._id === this.state.selectedGenre._id)
      : this.state.books;

    const books = paginate(filteredBooks, this.state.currentPage, this.state.pageSize);

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
              {books.map(book => (
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


