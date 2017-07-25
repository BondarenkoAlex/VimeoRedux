import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import autoBind from 'react-autobind';
import { createSelector } from 'reselect';
import { isEmpty } from '../../../utils/check';
import { consoleCustom } from '../../../utils/consoleCustom';
import { getSubcategoriesIfNeed } from '../../../actions';
import Category from '../../../components/Content/Category';

class SubcategoryContainer extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
  }

  componentWillMount() {
    const { match: { params: { category } } } = this.props;
    if (category !== undefined) {
      this.props.getSubcategoriesIfNeed(category);
    } else {
      consoleCustom.error(`The category in ${match.url} is does not find`);
    }
  }

  render() {
    const {
            match : { url },
            title,
            subcategory,
          } = this.props;
    return (
      <Category
        title={title}
        itemsByKey={subcategory.itemsByKey}
        url={url}
        isLoading={subcategory.isFetching}
      />
    );
  }
}

SubcategoryContainer.propTypes = {
  getSubcategoriesIfNeed: PropTypes.func.isRequired,
  title: PropTypes.string,
  subcategories: PropTypes.object,
  match: PropTypes.object.isRequired,
};
SubcategoryContainer.defaultProps = {
  title: '',
  subcategory: {},
};

const getCategories = state => state.categories;
const getParams = (_, props) => props.match.params;
const getSubcategories = state => state.subcategories;

const getTitleCategory = createSelector(
  [getCategories, getParams],
  (categories, params) => {
    const category = categories.itemsByKey[params.category];
    return category && category.name; // undefined or name
  },
);

const getSubcategoryByCategoryParam = createSelector(
  [getSubcategories, getParams],
  (subcategories, params) => subcategories[params.category],
);

const mapStateToProps = (state, ownProps) => ({
  title: getTitleCategory(state, ownProps), //state.categories,
  subcategory: getSubcategoryByCategoryParam(state, ownProps),  //state.subcategories,
});

const mapDispatchToProps = (dispatch /*,ownProps*/) => (
  bindActionCreators({
    getSubcategoriesIfNeed,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SubcategoryContainer);

// import React, {
//   Component,
// } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import autoBind from 'react-autobind';
// import { isEmpty } from '../../../utils/check';
// import { consoleCustom } from '../../../utils/consoleCustom';
// import { getSubcategoriesIfNeed } from '../../../actions';
// import Category from '../../../components/Content/Category';
//
// class SubcategoryContainer extends Component {
//   constructor(props, context) {
//     super(props, context);
//     autoBind(this);
//   }
//
//   componentWillMount() {
//     const { match } = this.props;
//     const { params: { category } } = match;
//     if (category !== undefined) {
//       this.props.getSubcategoriesIfNeed(category);
//     } else {
//       consoleCustom.error(`The category in ${match.url} is does not find`);
//     }
//   }
//
//   render() {
//     const {
//             categories,
//             subcategories,
//             match,
//           } = this.props;
//     const { url, params: { category: categoryParam } } = match;
//
//     let title = '';
//     let items = {};
//
//     const category = categories.items[categoryParam];
//     if (!isEmpty(category)) {
//       title = category.name;
//     }
//
//     const subcategory = subcategories.items[categoryParam];
//     if (!isEmpty(subcategory)) {
//       items = subcategory;
//     }
//
//     return (
//       <Category
//         title={title}
//         items={items}
//         url={url}
//       />
//     );
//   }
// }
//
// SubcategoryContainer.propTypes = {
//   getSubcategoriesIfNeed: PropTypes.func.isRequired,
//   categories: PropTypes.object.isRequired,
//   subcategories: PropTypes.object.isRequired,
//   match: PropTypes.object.isRequired,
// };
// SubcategoryContainer.defaultProps = {};
//
// const mapStateToProps = (state /*,ownProps*/) => ({
//   categories: state.categories,
//   subcategories: state.subcategories,
// });
//
// const mapDispatchToProps = (dispatch /*,ownProps*/) => (
//   bindActionCreators({
//     getSubcategoriesIfNeed,
//   }, dispatch)
// );
//
// export default connect(mapStateToProps, mapDispatchToProps)(SubcategoryContainer);