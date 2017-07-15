import React from 'react';
import PropTypes from 'prop-types';

//заменить на контейнер
//import CategoryListItem from './Category/CategoryListItem';
import CategoryListItem from './CategoryListItem';

function Category(props) {
  const {
          categories,
          title,
          url,
        } = props;
  return (
    <main className="site-main clearfix">
      <div className="container">
        <div className="wrap-container">
          <div className="categories-title">
            <h2>{title}</h2>
          </div>
        </div>
        <CategoryListItem
          categories={categories}
          url={url}
        />
      </div>
    </main>
  );
}

Category.propTypes = {
  title: PropTypes.string.isRequired,
  categories: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
};
Category.defaultProps = {};

export default Category;
