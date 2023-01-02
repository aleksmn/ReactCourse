import Like from './common/like';

const BooksTable = props => {

    const { books, onDelete, onLike, onSort } = props;

    return (
        <table className="table">
            <thead>
                <tr>
                    <th onClick={() => onSort('title')}>Название</th>
                    <th onClick={() => onSort('author')}>Автор</th>
                    <th onClick={() => onSort('genre.name')}>Жанр</th>
                    <th onClick={() => onSort('pages')}>Стр.</th>
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

export default BooksTable;