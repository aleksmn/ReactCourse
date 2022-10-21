import React, { Component } from 'react';
import { getBooks } from '../services/bookService';

// imrc - shortcut create react component
// cc - create class

class Books extends Component {
    state = {
        books: getBooks()
    };

    render() {
        return <table className="table">
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
                    </tr>
                ))}
            </tbody>
        </table>;
    }
}

export default Books;


