import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import style from './comment.module.scss';

function Comment(props) {
  const {
    authorSrc,
    name,
  } = props;
  return (
    <div className={style.comment}>
      <div className={style.commentWrapper}>
        <div className={style.commentAuthorLogoContainer}>
          <img
            className={style.commentAuthorLogo}
            src={authorSrc}
            alt=""
          />
        </div>
        <div className={style.commentBody}>
          <header className={style.commentTitle}>
            <Link
              to="#"
              className={style.commentAuthor}
            >
              Thewoken Everscorn {name}
            </Link>
            <span className={style.commentDateAgo}>
                2 month ago
              </span>
          </header>
          <section className={style.commentText}>
            <p>
              Looooovvvveeeeeee this! Such a
              great quality and aesthetic.
            </p>
            <p>cute all the way.</p>
          </section>
        </div>
      </div>

      {/*-----------------------------*/}
      <div className={style.comment}>
        <div className={style.commentWrapper}>
          <div className={style.commentAuthorLogoContainer}>
            <img
              className={style.commentAuthorLogo}
              src={authorSrc}
              alt=""
            />
          </div>
          <div className={style.commentBody}>
            <header className={style.commentTitle}>
              <Link
                to="#"
                className={style.commentAuthor}
              >
                Thewoken Everscorn {name}
              </Link>
              <span className={style.commentDateAgo}>
                2 month ago
              </span>
            </header>
            <section className={style.commentText}>
              <p>
                Looooovvvveeeeeee this! Such a
                great quality and aesthetic.
              </p>
              <p>cute all the way.</p>
            </section>
          </div>
        </div>

        {/*-----------------------------*/}
        <div className={style.comment}>
          <div className={style.commentWrapper}>
            <div className={style.commentAuthorLogoContainer}>
              <img
                className={style.commentAuthorLogo}
                src={authorSrc}
                alt=""
              />
            </div>
            <div className={style.commentBody}>
              <header className={style.commentTitle}>
                <Link
                  to="#"
                  className={style.commentAuthor}
                >
                  Thewoken Everscorn {name}
                </Link>
                <span className={style.commentDateAgo}>
                2 month ago
              </span>
              </header>
              <section className={style.commentText}>
                <p>
                  Looooovvvveeeeeee this! Such a
                  great quality and aesthetic.
                </p>
                <p>cute all the way.</p>
              </section>
            </div>
          </div>
        </div>

      </div>


    </div>
  );
}

Comment.propTypes = {
  authorSrc: PropTypes.string,
  name: PropTypes.string,
};
Comment.defaultProps = {};

export default Comment;
