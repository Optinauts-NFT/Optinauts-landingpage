import Link from "next/link";
import Layout from "../src/layout/Layout";
const BlogSingle = () => {
  return (
    <Layout pageTitle={"Blog Single"}>
      <div className="metaportal_fn_blog_single">
        <div className="container small">
          <div className="metaportal_fn_share">
            <h5 className="label">Share:</h5>
            <ul>
              <li>
                <a href="#">
                  <img
                    src="/svg/social/twitter-1.svg"
                    alt=""
                    className="fn__svg"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="/svg/social/facebook-1.svg"
                    alt=""
                    className="fn__svg"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="/svg/social/instagram-1.svg"
                    alt=""
                    className="fn__svg"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="/svg/social/pinterest-1.svg"
                    alt=""
                    className="fn__svg"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="/svg/social/behance-1.svg"
                    alt=""
                    className="fn__svg"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="metaportal_fn_breadcrumbs">
            <p>
              <Link href="/">
                <a>Home</a>
              </Link>
              <span className="separator">/</span>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
              <span className="separator">/</span>
              <span className="current">
                MetaPortal’s NFT Goes Public in Nod to Crypto Adoption
              </span>
            </p>
          </div>
          <div className="single_img">
            <img src="/img/blog/single.jpg" alt="" />
          </div>
          <div className="metaportal_fn_minis">
            <div className="m_item">
              <a href="#">June 01, 2022</a>
            </div>
            <div className="m_item">
              <span>
                By <a href="#">Admin</a>
              </span>
            </div>
            <div className="m_item">
              <a href="#comments">3 Comments</a>
            </div>
          </div>
          {/* Sidebar */}
          <div className="metaportal_fn_wsidebar">
            {/* Left Sidebar */}
            <div className="sidebar_left">
              {/* Single Title */}
              <div className="single_title">
                <h3
                  className="fn__maintitle"
                  data-text="MetaPortal’s NFT Goes Public In Nod To Crypto Adoption"
                  data-align="left"
                >
                  MetaPortal’s NFT Goes Public In Nod To Crypto Adoption
                </h3>
                <div className="categories">
                  <a href="#">Tokens</a>, <a href="#">NFTs</a>,{" "}
                  <a href="#">Crypto</a>
                </div>
              </div>
              {/* !Single Title */}
              {/* Single Description */}
              <div className="single_desc">
                <p>
                  Suspendisse eu velit est. Cras nec vestibulum quam. Donec
                  tincidunt purus nec enim tincidunt, sit amet facilisis massa
                  laoreet. Integer mollis nec sapien eu lacinia. Nunc eu massa
                  dictum, vulputate neque ac, porta mauris. Sed sollicitudin
                  nisi augue, a gravida turpis elementum vel. Curabitur sagittis
                  quis diam et rhoncus. Nam pellentesque imperdiet aliquet. Sed
                  non ante malesuada, ultrices sem at, tempus libero.
                </p>
                <p>
                  Duis eu lorem ut mauris pulvinar auctor. Maecenas et dapibus
                  orci, eleifend euismod justo. Quisque luctus turpis eu
                  tristique feugiat. Praesent ac magna feugiat, interdum lacus
                  ac, interdum dui. Pellentesque id quam quis enim malesuada
                  rutrum. Orci varius natoque penatibus et magnis dis parturient
                  montes, nascetur ridiculus mus. Nulla vel neque et ex
                  vestibulum elementum at sed lacus. Fusce imperdiet mauris ac
                  mi viverra viverra. Maecenas pharetra nibh non arcu finibus,
                  vel ultrices arcu porttitor. Quisque ac nisl id lectus
                  faucibus pulvinar nec ut nisl. Duis ultricies ut lacus sed
                  rutrum.
                </p>
                <p>
                  Duis eu lorem ut mauris pulvinar auctor. Maecenas et dapibus
                  orci, eleifend euismod justo. Quisque luctus turpis eu
                  tristique feugiat. Praesent ac magna feugiat, interdum lacus
                  ac, interdum dui. Pellentesque id quam quis enim malesuada
                  rutrum. Orci varius natoque penatibus et magnis dis parturient
                  montes, nascetur ridiculus mus. Nulla vel neque et ex
                  vestibulum elementum at sed lacus. Fusce imperdiet mauris ac
                  mi viverra viverra. Maecenas pharetra nibh non arcu finibus,
                  vel ultrices arcu porttitor. Quisque ac nisl id lectus
                  faucibus pulvinar nec ut nisl. Duis ultricies ut lacus sed
                  rutrum.
                </p>
                <p>
                  Suspendisse dignissim ultricies iaculis. Suspendisse ultrices
                  turpis mi, non tincidunt orci interdum tempor. Praesent
                  venenatis, lorem egestas consequat tempor, nunc neque
                  venenatis risus, vitae interdum ipsum ipsum eget purus. Proin
                  ac leo non est imperdiet commodo. Donec dictum augue ut odio
                  feugiat vulputate. Pellentesque ultricies augue in posuere
                  ornare. Pellentesque pretium non nunc ac sodales.
                </p>
                <p>
                  Nam et malesuada ante, in convallis libero. Aenean
                  sollicitudin egestas ante, eget porttitor leo fringilla sit
                  amet. Nam cursus neque ligula, in egestas elit porttitor vel.
                  Vestibulum ultricies tempus orci a auctor. Curabitur sed
                  pretium lacus, eget cursus dui. Aliquam at ex sit amet urna
                  interdum dignissim vel non dolor. Pellentesque mi nibh,
                  sollicitudin at neque id, tincidunt molestie lorem. Nulla
                  facilisi. Phasellus viverra mi ut sapien efficitur, sit amet
                  suscipit lorem commodo. Interdum et malesuada fames ac ante
                  ipsum primis in faucibus.
                </p>
              </div>
              {/* !Single Description */}
              {/* Author Information Box */}
              <div className="metaportal_fn_author_info">
                <div className="info_img">
                  <img src="/img/blog/author.jpg" alt="" />
                </div>
                <div className="info_desc">
                  <h3 className="fn_title">Josephine Sanchez</h3>
                  <p className="fn_desc">
                    Josephine is a writer, editor, etc.-er who muses about life,
                    design and travel for friendship, food, fun and more.
                  </p>
                  <ul className="author_social">
                    <li>
                      <a href="#">
                        <img
                          src="/svg/social/twitter-1.svg"
                          alt=""
                          className="fn__svg"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="/svg/social/facebook-1.svg"
                          alt=""
                          className="fn__svg"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="/svg/social/instagram-1.svg"
                          alt=""
                          className="fn__svg"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="/svg/social/pinterest-1.svg"
                          alt=""
                          className="fn__svg"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="/svg/social/behance-1.svg"
                          alt=""
                          className="fn__svg"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* !Author Information Box */}
              {/* Tags */}
              <div className="metaportal_fn_tags">
                <h4 className="label">Tags:</h4>
                <a href="#">Tokens</a>
                <span>,</span>
                <a href="#">NFT</a>
                <span>,</span>
                <a href="#">Featured</a>
                <span>,</span>
                <a href="#">Insights</a>
              </div>
              {/* !Tags */}
            </div>
            {/* !Left Sidebar */}
            {/* Right Sidebar */}
            <div className="sidebar_right">
              {/* Widget (Top Articles) */}
              <div className="widget widget-articles">
                <div className="wid-title">
                  <span className="text">Top Articles</span>
                  <span className="icon" />
                </div>
                <div className="metaportal_fn_widget_articles">
                  <ul>
                    <li>
                      <div className="item">
                        <a href="#" className="full_link" />
                        <h3 className="fn_title">
                          Use social media to jump-start your creative career.
                        </h3>
                        <p className="fn_date">
                          <span className="post_date">June 22, 2022</span>
                          <span className="comment_count">5 Comments</span>
                        </p>
                        <span className="count">1</span>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <a href="#" className="full_link" />
                        <h3 className="fn_title">
                          Staying at the Knickerbocker Mansion in Big Bear
                        </h3>
                        <p className="fn_date">
                          <span className="post_date">June 22, 2022</span>
                          <span className="comment_count">3 Comments</span>
                        </p>
                        <span className="count">2</span>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <a href="#" className="full_link" />
                        <h3 className="fn_title">
                          10 Places to Visit in California (That Aren’t Los
                          Angeles)
                        </h3>
                        <p className="fn_date">
                          <span className="post_date">June 22, 2022</span>
                          <span className="comment_count">2 Comments</span>
                        </p>
                        <span className="count">3</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* !Widget (Top Articles) */}
              {/* Widget (Custom Categories) */}
              <div className="widget widget-custom-categories">
                <div className="wid-title">
                  <span className="text">Categories</span>
                  <span className="icon" />
                </div>
                <div
                  className="metaportal_fn_categories"
                  data-more="Show More"
                  data-less="Show Less"
                  data-count={4}
                >
                  <ul>
                    <li>
                      <a href="#">
                        <span>Lifestyle</span>
                      </a>
                      <span className="count">77</span>
                    </li>
                    <li>
                      <a href="#">
                        <span>Travel</span>
                      </a>
                      <span className="count">48</span>
                    </li>
                    <li>
                      <a href="#">
                        <span>Clothing</span>
                      </a>
                      <span className="count">31</span>
                    </li>
                    <li>
                      <a href="#">
                        <span>Food</span>
                      </a>
                      <span className="count">29</span>
                    </li>
                    <li>
                      <a href="#">
                        <span>Relationships</span>
                      </a>
                      <span className="count">33</span>
                    </li>
                    <li>
                      <a href="#">
                        <span>Beauty</span>
                      </a>
                      <span className="count">24</span>
                    </li>
                    <li>
                      <a href="#">
                        <span>Interior</span>
                      </a>
                      <span className="count">53</span>
                    </li>
                    <li>
                      <a href="#">
                        <span>Health &amp; Welless</span>
                      </a>
                      <span className="count">42</span>
                    </li>
                  </ul>
                  <div className="clearfix" />
                </div>
              </div>
              {/* !Widget (Custom Categories) */}
              {/* Widget (social) */}
              <div className="widget widget-social">
                <div className="wid-title">
                  <span className="text">Subscribe &amp; Follow</span>
                  <span className="icon" />
                </div>
                <div className="metaportal_fn_widget_social">
                  <ul>
                    <li>
                      <a href="#">
                        <img
                          src="/svg/social/twitter-1.svg"
                          alt=""
                          className="fn__svg"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="/svg/social/facebook-1.svg"
                          alt=""
                          className="fn__svg"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="/svg/social/instagram-1.svg"
                          alt=""
                          className="fn__svg"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="/svg/social/pinterest-1.svg"
                          alt=""
                          className="fn__svg"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="/svg/social/behance-1.svg"
                          alt=""
                          className="fn__svg"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* !Widget (social) */}
            </div>
            {/* !Right Sidebar */}
          </div>
          {/* !Sidebar */}
        </div>
        {/* Previous & Next Box */}
        <div className="metaportal_fn_pnb">
          <div className="container small">
            <div className="pnb_wrapper">
              <div className="prev item">
                <a href="#" className="full_link" />
                <div className="item_in">
                  <div className="img" data-bg-img="/img/blog/1.jpg" />
                  <div className="desc">
                    <p className="fn_desc">Prev Post</p>
                    <h3 className="fn_title">
                      Bankman-Fried Would Like to Talk With Musk About Twitter
                    </h3>
                  </div>
                </div>
              </div>
              <div className="fn_trigger">
                <Link href="/blog">
                  <a className="full_link" />
                </Link>
                <div className="icon">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div className="next item">
                <a href="#" className="full_link" />
                <div className="item_in">
                  <div className="img" data-bg-img="/img/blog/3.jpg" />
                  <div className="desc">
                    <p className="fn_desc">Prev Post</p>
                    <h3 className="fn_title">
                      Crypto-Focused Silvergate Jumps on Blowout Earnings Report
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* !Previous & Next Box */}
        {/* Comments */}
        <div className="container small">
          <div className="metaportal_fn_comments">
            <div className="comment-title">
              <h3 className="fn_title">3 Comments</h3>
            </div>
            <div className="comment-list">
              <ul className="list">
                <li className="comment">
                  <div className="comment-body">
                    <div className="comment-avatar">
                      <img src="/img/blog/comment-author1.jpg" alt="" />
                    </div>
                    <div className="comment-text-wrap">
                      <div className="comment-data">
                        <h3 className="author">Alex Brandon</h3>
                        <p className="date">May 9, 2022 at 9:03 pm</p>
                      </div>
                      <div className="comment-text">
                        <div className="desc">
                          <p>
                            Nam et malesuada ante, in convallis libero. Aenean
                            sollicitudin egestas ante, eget porttitor leo
                            fringilla sit amet. Nam cursus neque ligula, in
                            egestas elit porttitor vel. Vestibulum ultricies
                            tempus orci a auctor.{" "}
                          </p>
                        </div>
                        <div className="fn_reply">
                          <a href="#" className="reply">
                            <img
                              src="/svg/reply.svg"
                              alt=""
                              className="fn__svg"
                            />
                            <span>Reply</span>
                          </a>
                          <a href="#" className="edit">
                            Edit
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="comment">
                  <div className="comment-body">
                    <div className="comment-avatar">
                      <img src="/img/blog/comment-author2.jpg" alt="" />
                    </div>
                    <div className="comment-text-wrap">
                      <div className="comment-data">
                        <h3 className="author">Meera</h3>
                        <p className="date">May 9, 2022 at 9:03 pm</p>
                      </div>
                      <div className="comment-text">
                        <div className="desc">
                          <p>
                            Proin ac leo non est imperdiet commodo. Donec dictum
                            augue ut odio feugiat vulputate. Pellentesque
                            ultricies augue in posuere ornare.{" "}
                          </p>
                        </div>
                        <div className="fn_reply">
                          <a href="#" className="reply">
                            <img
                              src="/svg/reply.svg"
                              alt=""
                              className="fn__svg"
                            />
                            <span>Reply</span>
                          </a>
                          <a href="#" className="edit">
                            Edit
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="comment">
                  <div className="comment-body">
                    <div className="comment-avatar">
                      <img src="/img/blog/comment-author3.jpg" alt="" />
                    </div>
                    <div className="comment-text-wrap">
                      <div className="comment-data">
                        <h3 className="author">Rachel Perry</h3>
                        <p className="date">May 9, 2022 at 9:03 pm</p>
                      </div>
                      <div className="comment-text">
                        <div className="desc">
                          <p>
                            Cras sed velit vitae velit tincidunt venenatis nec
                            in felis. Proin blandit elementum risus, sed mattis
                            dui rhoncus vel. Sed maximus mauris fringilla purus
                            auctor, eget convallis nulla facilisis.
                          </p>
                          <p>
                            Morbi et lacinia ligula, id pharetra lorem.
                            Phasellus posuere nibh et sem dapibus, ut eleifend
                            ipsum eleifend. Pellentesque vel nibh aliquam leo
                            efficitur bibendum vel sed mi. Ut pulvinar rutrum
                            ante, at ultrices leo tincidunt eget.
                          </p>
                          <p>
                            Suspendisse eget dui ac turpis consectetur
                            sollicitudin. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                          </p>
                        </div>
                        <div className="fn_reply">
                          <a href="#" className="reply">
                            <img
                              src="/svg/reply.svg"
                              alt=""
                              className="fn__svg"
                            />
                            <span>Reply</span>
                          </a>
                          <a href="#" className="edit">
                            Edit
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="comment-respond">
              <div className="respond-title">
                <h3 className="fn_title">Leave a reply</h3>
              </div>
              <div className="respond-log">
                <p>
                  Logged in as admin. <a href="#">Log out?</a>
                </p>
              </div>
              <form className="comment-form">
                <ul className="input-items">
                  <li className="input-item">
                    <div className="input_item">
                      <textarea
                        name="comment"
                        placeholder="Comment"
                        defaultValue={""}
                      />
                    </div>
                  </li>
                  <li className="input-item half-item">
                    <div className="input_item">
                      <input type="text" name="name" placeholder="Name" />
                    </div>
                  </li>
                  <li className="input-item half-item">
                    <div className="input_item">
                      <input type="text" name="email" placeholder="Email" />
                    </div>
                  </li>
                </ul>
                <div className="clearfix" />
                <a href="#" className="metaportal_fn_button full">
                  <span>Post Comment</span>
                </a>
              </form>
            </div>
          </div>
        </div>
        {/* !Comments */}
      </div>
    </Layout>
  );
};
export default BlogSingle;
