import React from 'react';
import PropTypes from 'prop-types';

import style from './search.module.scss';

const Search = props => (
  <form
    role="search"
    className={style.search}
  >
    <input
      className={style.searchInput}
      type="search"
      placeholder="Search"
    />
    <button
      className={style.searchButton}
      type="submit"
    >
      <svg
        className={style.searchIcon}
        viewBox="0 0 50 50"
      >
        <path d="M46.599 40.236l-10.545-10.545c1.836-2.973 2.946-6.441 2.946-10.191 0-10.77-8.73-19.5-19.5-19.5s-19.5 8.73-19.5 19.5 8.73 19.5 19.5 19.5c3.75 0 7.218-1.11 10.188-2.943l10.548 10.545c1.758 1.758 4.605 1.758 6.363 0s1.758-4.608 0-6.366zm-27.099-7.236c-7.455 0-13.5-6.045-13.5-13.5s6.045-13.5 13.5-13.5 13.5 6.045 13.5 13.5-6.045 13.5-13.5 13.5z" />
      </svg>
    </button>
  </form>
);

Search.propTypes = {};
Search.defaultProps = {};

export default Search;
