import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Img from '../../common/Img';

function Comment(props) {
  const {
          authorSrc,
          name,
        } = props;
  return (
    <div className="comment clearfix">
      <div className="comment-wrapper clearfix">
        <div className="author-logo">
          <Img
            src={authorSrc}
            alt="dsdfs"
          />
          {/* <img src="/vm/src/images/account-logo.jpg" /> */}
        </div>
        <div className="body-wrapper">
          <div className="body">
            <header>
              <Link
                to="#"
                className="author-comment"
              >
                {/* <a
                className="author-comment"
                href="#"
              >
                Thewoken Everscorn
              </a> */}
                Thewoken Everscorn {name}
              </Link>
              <span className="date-ago">2 month ago</span>
            </header>
            <section className="text"><p>Looooovvvveeeeeee this! Such a
              great quality and aesthetic.</p>
              <p>cute all the way.</p></section>
          </div>
        </div>
      </div>
      {/*<Comment
        name="Пупкин"
        authorSrc="https://i.vimeocdn.com/portrait/9341504_75x75"
      />*/}
    </div>
  );
}

Comment.propTypes = {
  authorSrc: PropTypes.string,
  name: PropTypes.string,
};
Comment.defaultProps = {};

export default Comment;
