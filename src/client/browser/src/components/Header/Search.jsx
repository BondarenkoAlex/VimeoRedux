import React, {
  PropTypes,
} from 'react';

const Search = (props) => {
  return (
    <li className="nav-header-search-form">
      <form role="search">
        <input className="nav-header-intut-search" type="search" placeholder="Search"/>
        <button className="nav-header-button-search" type="submit">
          [*SVG*]
          {/*<svg className="nav-header-search-icon" xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 50 50" 'enable-background'="new 0 0 20 20" "xml:space"="preserve">
            <path
              d="M46.599 40.236l-10.545-10.545c1.836-2.973 2.946-6.441 2.946-10.191 0-10.77-8.73-19.5-19.5-19.5s-19.5 8.73-19.5 19.5 8.73 19.5 19.5 19.5c3.75 0 7.218-1.11 10.188-2.943l10.548 10.545c1.758 1.758 4.605 1.758 6.363 0s1.758-4.608 0-6.366zm-27.099-7.236c-7.455 0-13.5-6.045-13.5-13.5s6.045-13.5 13.5-13.5 13.5 6.045 13.5 13.5-6.045 13.5-13.5 13.5z"/>
          </svg>*/}
        </button>
      </form>
    </li>
  );
};

Search.propTypes    = {};
Search.defaultProps = {};

export default Search;