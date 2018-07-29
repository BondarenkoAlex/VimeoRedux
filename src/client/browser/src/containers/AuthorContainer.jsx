import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { EMPTY_OBJECT, EMPTY_ARRAY } from 'src/constants/common';
import { getUsersState } from '../selectors';
import Author from '../components/common/Author';

class AuthorContainer extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { users, idUser, size } = this.props;
    const user = users.itemsByKey[idUser];
    if (!user) {
      return null;
    }
    const { name, pictures } = user;
    const sizes = pictures.sizes || EMPTY_ARRAY;
    const picture = sizes[0] || EMPTY_OBJECT;
    return (
      <Author name={name} src={picture.link} size={size} />
    );
  }
}

AuthorContainer.propTypes = {
  idUser: PropTypes.number.isRequired,
  size: PropTypes.string,
};
AuthorContainer.defaultProps = {};

const mapStateToProps = state => ({
  users: getUsersState(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthorContainer);
