import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Layout from "../src/layout/Layout";
import { getNfts, getSingleNft } from "../src/redux/actions/nfts";

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
                  style={{ backgroundImage: `url(/img/mint_nft.gif)` }}
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
                OptiNauts
              </h3>
              <div className="desc">
                <p>
                Hold 3 or more to receive potential rewards.
                </p>
                <p>
                Incentivized Quests.
                </p>
                <p>
                Pioneer DeFi protocols on Optimism L2.
                </p>
                <p>
                OG Naut Private Chat.
                </p>
                <p>
                Join a community of experienced DeFi Users, ALL WELCOME.
                </p>
                {/* mintplex */}
                <div 
                  id='rampp-minting-container-0c3ee588-a457-474d-b7b5-aebdcc40806b' 
                  className='rampp-minting-container'>
                  <button
                    id='rampp-minting-button-0c3ee588-a457-474d-b7b5-aebdcc40806b'
                    className='rampp-minting-button' 
                    data-merkle-proof-uri='https://us-central1-nft-rampp.cloudfunctions.net/allowlist/YfJU183fMDSD420PZwxL/merkle/verify'
                    data-styles='eyJvcGVuIjp7InRleHQiOiJNaW50Iiwic3R5bGVzIjoiYm9yZGVyOm5vbmU7d2lkdGg6IDE1cmVtO3BhZGRpbmc6MC41cmVtO2ZvbnQtc2l6ZTogMS4xMjVyZW07bGluZS1oZWlnaHQ6IDEuNzVyZW07dGV4dC1hbGlnbjogY2VudGVyO2N1cnNvcjogcG9pbnRlcjtib3JkZXItcmFkaXVzOjAuMzc1cmVtO2NvbG9yOiNGRkZGRkY7YmFja2dyb3VuZC1jb2xvcjojNTMyNGZmOyJ9LCJwYXVzZWQiOnsidGV4dCI6Ik1pbnQlMjBDbG9zZWQiLCJzdHlsZXMiOiJib3JkZXI6bm9uZTt3aWR0aDogMTVyZW07cGFkZGluZzowLjVyZW07Zm9udC1zaXplOiAxLjEyNXJlbTtsaW5lLWhlaWdodDogMS43NXJlbTt0ZXh0LWFsaWduOiBjZW50ZXI7Y3Vyc29yOiBwb2ludGVyO2JvcmRlci1yYWRpdXM6MC4zNzVyZW07Y29sb3I6IzY3NjU2NTtiYWNrZ3JvdW5kLWNvbG9yOiNDQ0RCREM7Y3Vyc29yOm5vdC1hbGxvd2VkOyJ9LCJzdXBwbHlSZWFjaGVkIjp7InRleHQiOiJBbGwlMjBUb2tlbnMlMjBNaW50ZWQhIiwic3R5bGVzIjoiYm9yZGVyOm5vbmU7d2lkdGg6IDE1cmVtO3BhZGRpbmc6MC41cmVtO2ZvbnQtc2l6ZTogMS4xMjVyZW07bGluZS1oZWlnaHQ6IDEuNzVyZW07dGV4dC1hbGlnbjogY2VudGVyO2N1cnNvcjogcG9pbnRlcjtib3JkZXItcmFkaXVzOjAuMzc1cmVtO2NvbG9yOiNmZjAwMDA7YmFja2dyb3VuZC1jb2xvcjojZmZiOGI4O2N1cnNvcjpub3QtYWxsb3dlZDsifSwiZXJyb3IiOnsidGV4dCI6Ik1pbnRpbmcgVW5hdmFpbGFibGUiLCJzdHlsZXMiOiJib3JkZXI6bm9uZTt3aWR0aDogMTVyZW07cGFkZGluZzowLjVyZW07Zm9udC1zaXplOiAxLjEyNXJlbTtsaW5lLWhlaWdodDogMS43NXJlbTt0ZXh0LWFsaWduOiBjZW50ZXI7Y3Vyc29yOiBwb2ludGVyO2JvcmRlci1yYWRpdXM6MC4zNzVyZW07Y29sb3I6I2ZmMDAwMDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmI4Yjg7Y3Vyc29yOm5vdC1hbGxvd2VkOyJ9LCJjbGFpbVRleHQiOnsidGV4dCI6bnVsbCwic3R5bGVzIjoiY29sb3I6IHJnYmEoMTU2LCAxNjMsIDE3NSk7Zm9udC1zaXplOiAwLjc1cmVtO2xpbmUtaGVpZ2h0OiAxcmVtO3RleHQtYWxpZ246IGNlbnRlcjtwYWRkaW5nLXRvcDogMC4yNXJlbTtwYWRkaW5nLWJvdHRvbTogMC4yNXJlbTttYXJnaW46MDtmb250LWZhbWlseTpzYW5zLXNlcmlmOyJ9LCJxdWFudGl0eSI6eyJ0ZXh0IjpudWxsLCJzdHlsZXMiOiJ3aWR0aDo0MHB4O2NvbG9yOiM1MzI0ZmY7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDoxcHg7Ym9yZGVyLWNvbG9yOiM1MzI0ZmY7Ym9yZGVyLXJhZGl1czowLjM3NXJlbTtmb250LXNpemU6MS4zcmVtO3RleHQtYWxpZ246Y2VudGVyOyJ9LCJtaW50TWVzc2FnZSI6IiJ9'
                    data-abi-link="https://firebasestorage.googleapis.com/v0/b/nft-rampp.appspot.com/o/solidity_outputs%2FYfJU183fMDSD420PZwxL%2FOptiNautsContract_data-f9850c9d-93b1-4be5-81a7-800242e02505.json?alt=media"
                    data-redirect="null"
                    data-contract-address="0x780F4D9cCa855830334deE6b38364Ab69FCd3047"
                    data-show-claim-count="true"
                    data-network="optimism"
                    data-format="multi"
                    data-erc20-payments=""
                    data-redemption-contracts=""
                    data-use-winter="false"
                    data-winter-project-id="null">
                  </button>
                </div>
                {/* !mintplex */}
              </div>
              <div className="view_on">
                <ul>
                  <li>
                    <span>View On:</span>
                  </li>
                  <li>
                    <a href="https://opensea.io/collection/optinauts-v2" target="_blank" rel="noreferrer">
                      <img src="/svg/opensea.webp" alt="opensea nft marketplace" />
                    </a>
                  </li>
                  <li>
                    <a href="https://qx.app/collection/optinauts" target="_blank" rel="noreferrer">
                      <img src="/svg/qx.webp" alt="qx nft marketplace" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* !Mint Top */}
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
