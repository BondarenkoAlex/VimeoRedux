import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment/index';

import style from './comments.module.scss';

function Comments(props) {
  const {
          name,
        } = props;
  return (
    <section className={style.comments}>
      <div className={style.commentsTitle}>
        <h3>Comments</h3>
      </div>
      <article className="comments-container">
        <Comment
          name="Пупкин"
          authorSrc="https://i.vimeocdn.com/portrait/6193530_75x75"
        />
      </article>
    </section>
  );
}

Comments.propTypes = {};
Comments.defaultProps = {};

export default Comments;
