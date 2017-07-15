import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import autoBind from 'react-autobind';
import { isEmpty } from '../../../utils/check';
import { consoleCustom } from '../../../utils/consoleCustom';
import { getSubcategoryIfNeed } from '../../../actions';
import Category from '../../../components/Content/Category';

class SubcategoryContainer extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
  }

  componentWillMount() {
    const { match } = this.props;
    const { params: { category } } = match;
    if (category !== undefined) {
      this.props.getSubcategoryIfNeed(category);
    } else {
      consoleCustom.error(`The category in ${match.url} is does not find`);
    }
  }

  render() {
    const {
            subcategories,
            match,
          } = this.props;
    const { url, params: { category } } = match;

    let title = '';
    let items = [];
    const cat = subcategories.items[category];
    if (cat !== undefined) {
      title = cat.name;
      items = cat.subcategories;
    }

    return (
      <Category
        title={title}
        categories={items}
        url={url}
      />
    );
  }
}

SubcategoryContainer.propTypes = {
  getSubcategoryIfNeed: PropTypes.func.isRequired,
  subcategories: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};
SubcategoryContainer.defaultProps = {};

const mapStateToProps = (state /*,ownProps*/) => ({
  subcategories: state.subcategories,
});

const mapDispatchToProps = (dispatch /*,ownProps*/) => (
  bindActionCreators({
    getSubcategoryIfNeed,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SubcategoryContainer);
