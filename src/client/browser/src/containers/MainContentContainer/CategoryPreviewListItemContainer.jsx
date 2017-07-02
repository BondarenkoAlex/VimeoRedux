import React, {
  Component,
  PropTypes,
} from 'react';
import autoBind from 'react-autobind';
import CategoryPreviewListItem from '../../components/MainContent/CategoryPreviewListItem';

class CategoryPreviewListItemContainer extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
  }

  render() {
    return (
      <CategoryPreviewListItem />
    );
  }
}

CategoryPreviewListItemContainer.propTypes    = {};
CategoryPreviewListItemContainer.defaultProps = {};

export default CategoryPreviewListItemContainer;
