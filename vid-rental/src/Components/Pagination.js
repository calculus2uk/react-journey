import React from 'react';
import PropTypes from 'prop-types';
import range from 'lodash/range';

const Pagination = ({ total, pageSize, onPageChange, currentPage }) => {
  const pagesCount = Math.ceil(total / pageSize);
  if (pagesCount === 1) return null;
  const pages = range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? 'page-item active' : 'page-item'}
          >
            <a
              className="page-link"
              href="#"
              onClick={() => onPageChange(page)}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
};

export default Pagination;
