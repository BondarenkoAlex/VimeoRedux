/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { EMPTY_OBJECT } from '../../../constants/common';

class Video extends PureComponent {
  render() {
    const { video } = this.props;
    const {
            name,
          } = video;
    return (
      <main className="site-main clearfix">
        <div className="container">
          <div className="wrap-container video-clip-wrapper">
            <div className="video-clip">
              <div className="title">
                <h1>
                  {name}
                </h1>
              </div>
              <div className="author">
                <a href="#">
                  <img src="/vm/src/images/account-logo.jpg" /><span>Steve Cutts</span>
                </a>
              </div>
              <ul className="clip-statistics clearfix">
                <li className="date">
                  <img src="/vm/src/images/tags-icon/date.png" /><span>25 JUN 17</span></li>
                <li className="view"><img src="/vm/src/images/tags-icon/view.png" />
                  <span>236</span>
                </li>
                <li className="comment">
                  <img src="/vm/src/images/tags-icon/comment.png" /><span>12</span></li>
                <li className="tags"><img src="/vm/src/images/tags-icon/tags.png" />
                  <ul>
                    <li><a href="#"><span>Comedy</span></a></li>
                    <li><a href="#"><span>Sport</span></a></li>
                    <li><a href="#"><span>Snow</span></a></li>
                  </ul>
                </li>
                <li className="favorite">
                  <a href="#"><img src="/vm/src/images/tags-icon/favorite.png" /></a></li>
              </ul>
              <section className="comments clearfix"><h2>Comments</h2>
                <article className="comments-container">
                  <div className="comment clearfix">
                    <div className="comment-wrapper clearfix">
                      <div className="author-logo"><img src="/vm/src/images/account-logo.jpg" />
                      </div>
                      <div className="body-wrapper">
                        <div className="body">
                          <header><a className="author-comment"
                                     href="#">Nice Cat
                            Media</a><span className="date-ago">1 week ago</span>
                          </header>
                          <section className="text"><p>This is amazing. The animation is
                            perfect and the light setups are stunning. Also the
                            narrative is great, it reminds me the films from
                            Alexandr Sokurov in some ways.</p></section>
                        </div>
                      </div>
                    </div>
                    <div className="comment clearfix">
                      <div className="comment-wrapper clearfix">
                        <div className="author-logo">
                          <img src="/vm/src/images/account-logo.jpg" /></div>
                        <div className="body-wrapper">
                          <div className="body">
                            <header><a className="author-comment"
                                       href="#">Dana
                              Sink</a><span className="date-ago">1 month ago</span>
                            </header>
                            <section className="text"><p>Spela, this is great,</p>
                              <p>Excellent work indeed,</p>
                              <p>Lovely story and great execution,</p>
                              <p>I really like that.</p></section>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="comment clearfix">
                      <div className="comment-wrapper clearfix">
                        <div className="author-logo">
                          <img src="/vm/src/images/account-logo.jpg" /></div>
                        <div className="body-wrapper">
                          <div className="body">
                            <header><a className="author-comment"
                                       href="#">Thewoken
                              Everscorn</a><span className="date-ago">2 month ago</span>
                            </header>
                            <section className="text"><p>Looooovvvveeeeeee this! Such a
                              great quality and aesthetic.</p>
                              <p>cute all the way.</p></section>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="button-wrapper text-align-right">
                      <button className="btn-as-text"
                              type="button">Reply
                      </button>
                    </div>
                  </div>
                  <div className="comment clearfix">
                    <div className="comment-wrapper clearfix">
                      <div className="author-logo"><img src="/vm/src/images/account-logo.jpg" />
                      </div>
                      <div className="body-wrapper">
                        <div className="body">
                          <header><a className="author-comment"
                                     href="#">Nice Cat
                            Media</a><span className="date-ago">1 week ago</span>
                          </header>
                          <section className="text"><p>This is amazing. The animation is
                            perfect and the light setups are stunning. Also the
                            narrative is great, it reminds me the films from
                            Alexandr Sokurov in some ways.</p></section>
                        </div>
                      </div>
                    </div>
                    <div className="comment clearfix">
                      <div className="comment-wrapper clearfix">
                        <div className="author-logo">
                          <img src="/vm/src/images/account-logo.jpg" /></div>
                        <div className="body-wrapper">
                          <div className="body">
                            <header><a className="author-comment"
                                       href="#">Dana
                              Sink</a><span className="date-ago">1 month ago</span>
                            </header>
                            <section className="text"><p>Spela, this is great,</p>
                              <p>Excellent work indeed,</p>
                              <p>Lovely story and great execution,</p>
                              <p>I really like that.</p></section>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="comment clearfix">
                      <div className="comment-wrapper clearfix">
                        <div className="author-logo">
                          <img src="/vm/src/images/account-logo.jpg" /></div>
                        <div className="body-wrapper">
                          <div className="body">
                            <header><a className="author-comment"
                                       href="#">Thewoken
                              Everscorn</a><span className="date-ago">2 month ago</span>
                            </header>
                            <section className="text"><p>Looooovvvveeeeeee this! Such a
                              great quality and aesthetic.</p>
                              <p>cute all the way.</p></section>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="comment comment-add-reply-wrapper clearfix">
                      <div className="comment-wrapper clearfix">
                        <div className="author-logo">
                          <img src="/vm/src/images/account-logo.jpg" /></div>
                        <div className="body-wrapper">
                          <div className="body">
                            <form className="comment"
                                  name="commentForm">
                                                <textarea placeholder="New reply"
                                                          rows="4"></textarea>
                              <div className="button-wrapper text-align-right">
                                <button className="btn-default"
                                        type="button">Cancel
                                </button>
                                <button className="btn-default"
                                        type="submit">Reply
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comment clearfix">
                    <div className="comment-wrapper clearfix">
                      <div className="author-logo"><img src="/vm/src/images/account-logo.jpg" />
                      </div>
                      <div className="body-wrapper">
                        <div className="body">
                          <header><a className="author-comment"
                                     href="#">Thewoken
                            Everscorn</a><span className="date-ago">2 month ago</span>
                          </header>
                          <section className="text"><p>Looooovvvveeeeeee this! Such a
                            great quality and aesthetic.</p>
                            <p>cute all the way.</p></section>
                        </div>
                      </div>
                    </div>
                    <div className="button-wrapper text-align-right">
                      <button className="btn-as-text"
                              type="button">Reply
                      </button>
                    </div>
                  </div>
                  <div className="comment clearfix">
                    <div className="comment-wrapper clearfix">
                      <div className="author-logo"><img src="/vm/src/images/account-logo.jpg" />
                      </div>
                      <div className="body-wrapper">
                        <div className="body">
                          <header><a className="author-comment"
                                     href="#">Dana
                            Sink</a><span className="date-ago">1 month ago</span>
                          </header>
                          <section className="text"><p>Spela, this is great,</p>
                            <p>Excellent work indeed,</p>
                            <p>Lovely story and great execution,</p>
                            <p>I really like that.</p></section>
                        </div>
                      </div>
                    </div>
                    <div className="button-wrapper text-align-right">
                      <button className="btn-as-text"
                              type="button">Reply
                      </button>
                    </div>
                  </div>
                  <div className="comment comment-add-reply-wrapper clearfix">
                    <div className="comment-wrapper clearfix">
                      <div className="author-logo"><img src="/vm/src/images/account-logo.jpg" />
                      </div>
                      <div className="body-wrapper">
                        <div className="body">
                          <form className="comment"
                                name="commentForm"><textarea placeholder="New comment"
                                                             rows="4"></textarea>
                            <div className="button-wrapper text-align-right">
                              <button className="btn-default"
                                      type="submit">Add comment
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </section>
            </div>
          </div>
          <aside className="related">
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
          </aside>
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
