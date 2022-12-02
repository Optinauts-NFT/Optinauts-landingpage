import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Layout from "../../src/layout/Layout";
import { getNfts, getSingleNft } from "../../src/redux/actions/nfts";
const Nft = ({ getSingleNft, nft, getNfts, nfts }) => {
  const router = useRouter();
  const { id } = router.query;
  const [similarItem, setSimilarItem] = useState([]);
  useEffect(() => {
    getSingleNft(id);
    getNfts();
  }, [id]);
  useEffect(() => {
    if (nfts && nft) {
      setSimilarItem(
        nfts.filter(
          (nft_) =>
            nft_.type === nft.type ||
            nft.special === nft_.special ||
            nft.clothing == nft_.clothing
        )
      );
    }
  }, [nfts]);

  const [quantity, setQuantity] = useState(nft ? nft.quantity : 0);

  const updateQuantity = (type) => {
    if (type == "+") {
      setQuantity((nft.quantity = nft.quantity + 1));
    } else {
      setQuantity((nft.quantity = nft.quantity == 1 ? 1 : nft.quantity - 1));
    }
  };

  return (
    <Layout pageTitle={"Minting"}>
      <div className="metaportal_fn_mintpage">
        <div className="container small">
          {/* Mint Top */}
          <div className="metaportal_fn_mint_top">
            <div className="mint_left">
              <div className="img">
                <div
                  className="img_in"
                  style={{ backgroundImage: `url(${nft && nft.image})` }}
                >
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="mint_right">
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
                  <Link href="/collection">
                    <a>Collection</a>
                  </Link>
                  <span className="separator">/</span>
                  <span className="current">{nft && nft.title}</span>
                </p>
              </div>
              <h3
                className="fn__maintitle"
                data-text={nft && nft.title}
                data-align="left"
              >
                {nft && nft.title}
              </h3>
              <div className="desc">
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
                  rutrum. Orci varius natoque penatibus et magnis dis
                  parturient.
                </p>
              </div>
              <div className="view_on">
                <ul>
                  <li>
                    <span>View On:</span>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/svg/opensea.svg" alt="" className="fn__svg" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/svg/portal.svg" alt="" className="fn__svg" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* !Mint Top */}
          {/* Mint Box */}
          <div className="metaportal_fn_mintbox">
            <div className="mint_left">
              <div className="mint_title">
                <span>Public Mint is Live</span>
              </div>
              <div className="mint_list">
                <ul>
                  <li>
                    <div className="item">
                      <h4>Price</h4>
                      <h3>{nft && nft.price} ETH</h3>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <h4>Remaining</h4>
                      <h3>344/999</h3>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <h4>Quantity</h4>
                      <div className="qnt">
                        <span
                          className="decrease"
                          onClick={() => updateQuantity("-")}
                        >
                          -
                        </span>
                        <span className="summ" data-price={nft && nft.quantity}>
                          {nft && nft.quantity}
                        </span>
                        <span
                          className="increase"
                          onClick={() => updateQuantity("+")}
                        >
                          +
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <h4>Total Price</h4>
                      <h3>
                        {nft && (
                          <span className="total_price">
                            {(Number(nft.price) * Number(nft.quantity)).toFixed(
                              2
                            )}
                          </span>
                        )}
                        ETH + GAS
                      </h3>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mint_desc">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="metaportal_fn_button"
                >
                  <span>Mint Now</span>
                </a>
                <p>
                  By clicking “MINT NOW” button, you agree to our{" "}
                  <a href="#">Terms of Service</a> and our{" "}
                  <a href="#">Privacy Policy</a>.
                </p>
              </div>
            </div>
            <div className="mint_right">
              <div className="mright">
                <div className="mint_time">
                  <h4>Public Mint Ends In</h4>
                  {/* 
      There is two types of countdown: due_date (Due Date), ever (Evergreen timer)
       1. 	data-type="due_date"
        In this case you have to change value of data-date. For example:
        data-date="October 13, 2022 12:30:00"
        It will mean that mint will finished at this time

       2. 	data-type="ever"
        In this case you have to change values of data-days, data-hours, data-minutes and data-seconds. For example:
        data-days="34"
        data-hours="10"
        data-minutes="20"
        data-seconds="0"
        It will mean that the time expires after this time, but when the page is refreshed, the value will return again. It means, it won't end.
     */}
                  <h3
                    className="metaportal_fn_countdown"
                    data-type="ever"
                    data-date="October 13, 2022 12:30:00"
                    data-days={34}
                    data-hours={10}
                    data-minutes={20}
                    data-seconds={0}
                  >
                    0d: 0h: 0m: 0s
                  </h3>
                </div>
                <div className="mint_checked">
                  <p>
                    <span className="text">Whitelist:</span>
                    <span className="status">
                      Soldout{" "}
                      <span className="icon">
                        <img
                          src="/svg/checked.svg"
                          alt=""
                          className="fn__svg"
                        />
                      </span>
                    </span>
                  </p>
                  <p>
                    <span className="text">Presale:</span>
                    <span className="status">
                      Soldout{" "}
                      <span className="icon">
                        <img
                          src="/svg/checked.svg"
                          alt=""
                          className="fn__svg"
                        />
                      </span>
                    </span>
                  </p>
                </div>
                <div className="mint_info">
                  <p>
                    You need to pay a GAS fee during minting. We allow max 5
                    mints per wallet.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* !Mint Box */}
          {/* NFT Categories */}
          <div className="metaportal_fn_nft_cats">
            <ul>
              <li>
                <div className="item">
                  <h4 className="parent_category">Clothing</h4>
                  <h3 className="child_category" title="Black Yukata">
                    Black Yukata
                  </h3>
                </div>
              </li>
              <li>
                <div className="item">
                  <h4 className="parent_category">Eyes</h4>
                  <h3 className="child_category" title="Daydreaming">
                    Daydreaming
                  </h3>
                </div>
              </li>
              <li>
                <div className="item">
                  <h4 className="parent_category">Special</h4>
                  <h3 className="child_category" title="Fireflies, Smoke">
                    Fireflies, Smoke
                  </h3>
                </div>
              </li>
              <li>
                <div className="item">
                  <h4 className="parent_category">Type</h4>
                  <h3 className="child_category" title="Human, Sand">
                    Human, Sand
                  </h3>
                </div>
              </li>
              <li>
                <div className="item">
                  <h4 className="parent_category">Mouth</h4>
                  <h3 className="child_category" title="Not Bad">
                    Not Bad
                  </h3>
                </div>
              </li>
              <li>
                <div className="item">
                  <h4 className="parent_category">Neck</h4>
                  <h3 className="child_category" title="Zen Headphones">
                    Zen Headphones
                  </h3>
                </div>
              </li>
              <li>
                <div className="item">
                  <h4 className="parent_category">Eyes</h4>
                  <h3 className="child_category" title="Striking">
                    Striking
                  </h3>
                </div>
              </li>
              <li>
                <div className="item">
                  <h4 className="parent_category">Neck</h4>
                  <h3 className="child_category" title="Zen Headphones">
                    Zen Headphones
                  </h3>
                </div>
              </li>
            </ul>
          </div>
          {/* !NFT Categories */}
          {/* Similar Items */}
          <div className="metaportal_fn_similar">
            <h3 className="fn__maintitle" data-text="Similar Items">
              Similar Items
            </h3>
            <div className="fn_cs_divider">
              <div className="divider">
                <span />
                <span />
              </div>
            </div>
            <div className="metaportal_fn_drops">
              <ul className="grid">
                {nfts &&
                  similarItem.map(
                    (nft, i) =>
                      nft.id < 8 && (
                        <li key={nft.id}>
                          <div className="nft__item">
                            <div className="img_holder">
                              <img src={nft.image} alt="" />
                              <Link href={`/nft/${nft.id}`}>
                                <a className="full_link"></a>
                              </Link>
                            </div>
                            <div className="title_holder">
                              <h3 className="fn_title">
                                <a href="#">{nft.title}</a>
                              </h3>
                            </div>
                          </div>
                        </li>
                      )
                  )}
              </ul>
            </div>
          </div>
          {/* !Similar Items */}
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  nft: state.nfts.nft,
  nfts: state.nfts.data,
});

export default connect(mapStateToProps, { getSingleNft, getNfts })(Nft);
