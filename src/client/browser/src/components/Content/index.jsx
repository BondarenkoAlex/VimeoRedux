import React, {
  PropTypes,
} from 'react';

//заменить на контейнер
//import CategoryListItem from './Category/CategoryListItem';
import CategoryListItemContainer from '../../containers/ContentContainer/CategoryListItemContainer';

function Content(props) {
  let list = [
    {
      title: 'Animation',
      logo: 'animation_logo',
      preview: 'animation',

    }, {
      title: 'Arts & Design',
      logo: 'arts_and_design',
      preview: 'art',

    }, {
      title: 'Cameras & Techniques',
      logo: 'camera_and_techniques',
      preview: 'animation',

    },
  ];

  const currentMenuTitle = 'Categories';
  return (
    <main className="site-main clearfix">
      <div className="container">
        <div className="wrap-container">
          <div className="categories-title">
            <h2>{currentMenuTitle}</h2>
          </div>
        </div>
        <CategoryListItemContainer />
      </div>
    </main>
  );
}

Content.propTypes    = {};
Content.defaultProps = {};

export default Content;
