import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

function Comments(props) {
  const {
          name,
        } = props;
  return (
    <section className="comments clearfix"><h2>Comments</h2>
      <article className="comments-container">
        <Comment
          name="Пупкин"
          authorSrc="https://i.vimeocdn.com/portrait/9341504_75x75"
        />
      </article>
    </section>
  );
}

Comments.propTypes = {};
Comments.defaultProps = {};

export default Comments;
