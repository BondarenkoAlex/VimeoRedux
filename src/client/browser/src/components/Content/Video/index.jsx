/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { EMPTY_OBJECT } from '../../../constants/common';
import { isEmpty } from '../../../utils/check';
import Author from '../../common/Author/index';
import Favorite from '../../common/Favorite/index';
import TagsTag from './TagsTag/TagsTag';
import CalendarTag from './CalendarTag/index';
import ViewTag from './ViewTag/ViewTag';
import CommentTag from './CommentTag/CommentTag';
import ClipStatistics from './ClipStatistics/index';
import Comments from './Comments';
import RelatedVideos from './RelatedVideos';
import HeaderVideo from './HeaderVideo';

class Video extends PureComponent {
  render() {
    const { video } = this.props;
    if (isEmpty(video)) return null;
    const {
      name: title,
      user,
      tags,
      created_time: createdTime,
      metadata,
    } = video;
    const { name: userName, pictures } = user;
    const userPictureUrl = pictures && pictures.sizes && pictures.sizes[1].link; // todo
    const { connections: { comments: { total: commentsTotal } } } = metadata;
    const { connections: { likes: { total: likesTotal } } } = metadata;
    return (
      <main className="site-main clearfix">
        <div className="container">
          <div className="wrap-container video-clip-wrapper">
            <div className="video-clip">

              <HeaderVideo
                title={title}
                userName={userName}
                userPictureUrl={userPictureUrl}
                tags={tags}
                commentsTotal={commentsTotal}
                createdTime={createdTime}
                likesTotal={likesTotal}
              />


              {/*                   <ul className="clip-statistics clearfix">
                            <li className="date">
                              <CalendarTag ago={createdTime} />
                            </li>
                            <li className="view">
                              <ViewTag number={likesTotal} />
                            </li>
                            <li className="comment">
                              <CommentTag number={commentsTotal} />
                            </li>
                            <li className="tags">
                              <TagsTag
                                tags={tags}
                              />
                            </li>
                            <li className="favorite">
                              <Favorite />
                            </li>
                          </ul> */}
              <Comments />
              {/* <section className="comments clearfix"><h2>Comments</h2>
                <article className="comments-container">
                  <Comment
                    name="Пупкин"
                    authorSrc="https://i.vimeocdn.com/portrait/9341504_75x75"
                  />
                </article>
              </section> */}
            </div>
          </div>
          <RelatedVideos />
          {/*          <aside className="related">
            <div className="wrap-container"><h3>Related video</h3></div>
            <ul>
              <li className="clearfix">
                <div className="preview-wrapper">
                  <div className="preview">
                    <a href="#"><img src="/vm/src/images/playlist/596175114_640x427.jpg" /></a>
                  </div>
                </div>
                <div className="title-container">
                  <div className="title"><a href="#">RUIN AND ROSE Whistler ParkEdit</a></div>
                  <div className="author"><a href="#">Spela Cadez</a></div>
                </div>
              </li>
              <li className="clearfix">
                <div className="preview-wrapper">
                  <div className="preview">
                    <a href="#"><img src="/vm/src/images/playlist/602555565_640x360.jpg" /></a>
                  </div>
                </div>
                <div className="title-container">
                  <div className="title"><a href="#">By The Name of Boston</a></div>
                  <div className="author"><a href="#">Grant Kolton</a></div>
                </div>
              </li>
              <li className="clearfix">
                <div className="preview-wrapper">
                  <div className="preview">
                    <a href="#"><img src="/vm/src/images/playlist/604090110_640x360.jpg" /></a>
                  </div>
                </div>
                <div className="title-container">
                  <div className="title"><a href="#">Richard Marx - I Will be Right here Waiting
                    for You</a></div>
                  <div className="author"><a href="#">Zumbakamera</a></div>
                </div>
              </li>
              <li className="clearfix">
                <div className="preview-wrapper">
                  <div className="preview">
                    <a href="#"><img src="/vm/src/images/playlist/606733956_640x270.jpg" /></a>
                  </div>
                </div>
                <div className="title-container">
                  <div className="title"><a href="#">Makeba / Jain</a></div>
                  <div className="author"><a href="#">Greg&Lio</a></div>
                </div>
              </li>
              <li className="clearfix">
                <div className="preview-wrapper">
                  <div className="preview">
                    <a href="#"><img src="/vm/src/images/playlist/616252871_640x360.jpg" /></a>
                  </div>
                </div>
                <div className="title-container">
                  <div className="title"><a href="#">Sharks’ Teeth - Lost In The Cosmos</a></div>
                  <div className="author"><a href="#">Derek Beck</a></div>
                </div>
              </li>
              <li className="clearfix">
                <div className="preview-wrapper">
                  <div className="preview">
                    <a href="#"><img src="/vm/src/images/playlist/623113911_640x270.jpg" /></a>
                  </div>
                </div>
                <div className="title-container">
                  <div className="title"><a href="#">The Books – ALEATORIC</a></div>
                  <div className="author"><a href="#">Yours Truly</a></div>
                </div>
              </li>
            </ul>
          </aside> */}
        </div>
      </main>
    );
  }
}

Video.propTypes = {
  video: PropTypes.object,
};
Video.defaultProps = {
  video: EMPTY_OBJECT,
};

export default Video;
