import _ from 'lodash'
import PropTypes from 'prop-types'

// imr
// sfc

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {

    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1 && currentPage === 1) return null;
    const pages = _.range(1, pagesCount + 1);

    return (
        <nav>
            <ul className="pagination">
                {pages.map(page => (
                                        
                    // <li key={page} className='page-item'>
                    //     <span className="page-link" onClick={() => onPageChange(page)}>
                    //         {page}
                    //     </span>
                    // </li>
                    
                    <li key={page} className={page === currentPage ? 'page-item active' : 'page-item'}>
                        <span className="page-link" onClick={() => onPageChange(page)}>
                            {page}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired, 
    pageSize: PropTypes.number.isRequired, 
    currentPage: PropTypes.number.isRequired, 
    onPageChange: PropTypes.func.isRequired
}

export default Pagination;

