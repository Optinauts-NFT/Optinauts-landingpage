import Layout from "../src/layout/Layout";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
  RedditShareButton,
  RedditIcon,
  EmailShareButton,
  EmailIcon
} from 'next-share';

function MintPlex() {
  return {__html:`
  <div 
    id='rampp-minting-container-24acfb24-586b-4857-8022-8dee87482e89' 
    class='rampp-minting-container'>
    <button
      id='rampp-minting-button-24acfb24-586b-4857-8022-8dee87482e89'
      class='rampp-minting-button' 
      style='display:none'
      data-merkle-proof-uri='https://us-central1-nft-rampp.cloudfunctions.net/allowlist/YfJU183fMDSD420PZwxL/merkle/verify'
      data-styles='eyJvcGVuIjp7InRleHQiOiJNaW50Iiwic3R5bGVzIjoiYm9yZGVyOm5vbmU7d2lkdGg6IDE1cmVtO3BhZGRpbmc6MC41cmVtO2ZvbnQtc2l6ZTogMS4xMjVyZW07bGluZS1oZWlnaHQ6IDEuNzVyZW07dGV4dC1hbGlnbjogY2VudGVyO2N1cnNvcjogcG9pbnRlcjtib3JkZXItcmFkaXVzOjAuMTI1cmVtO2NvbG9yOiNGRkZGRkY7YmFja2dyb3VuZC1jb2xvcjojNTMyNGZmOyJ9LCJwYXVzZWQiOnsidGV4dCI6Ik1pbnQlMjBDbG9zZWQiLCJzdHlsZXMiOiJib3JkZXI6bm9uZTt3aWR0aDogMTVyZW07cGFkZGluZzowLjVyZW07Zm9udC1zaXplOiAxLjEyNXJlbTtsaW5lLWhlaWdodDogMS43NXJlbTt0ZXh0LWFsaWduOiBjZW50ZXI7Y3Vyc29yOiBwb2ludGVyO2JvcmRlci1yYWRpdXM6MC4xMjVyZW07Y29sb3I6IzY3NjU2NTtiYWNrZ3JvdW5kLWNvbG9yOiNDQ0RCREM7Y3Vyc29yOm5vdC1hbGxvd2VkOyJ9LCJzdXBwbHlSZWFjaGVkIjp7InRleHQiOiJBbGwlMjBUb2tlbnMlMjBNaW50ZWQhIiwic3R5bGVzIjoiYm9yZGVyOm5vbmU7d2lkdGg6IDE1cmVtO3BhZGRpbmc6MC41cmVtO2ZvbnQtc2l6ZTogMS4xMjVyZW07bGluZS1oZWlnaHQ6IDEuNzVyZW07dGV4dC1hbGlnbjogY2VudGVyO2N1cnNvcjogcG9pbnRlcjtib3JkZXItcmFkaXVzOjAuMTI1cmVtO2NvbG9yOiNmZjAwMDA7YmFja2dyb3VuZC1jb2xvcjojZmZiOGI4O2N1cnNvcjpub3QtYWxsb3dlZDsifSwiZXJyb3IiOnsidGV4dCI6Ik1pbnRpbmcgVW5hdmFpbGFibGUiLCJzdHlsZXMiOiJib3JkZXI6bm9uZTt3aWR0aDogMTVyZW07cGFkZGluZzowLjVyZW07Zm9udC1zaXplOiAxLjEyNXJlbTtsaW5lLWhlaWdodDogMS43NXJlbTt0ZXh0LWFsaWduOiBjZW50ZXI7Y3Vyc29yOiBwb2ludGVyO2JvcmRlci1yYWRpdXM6MC4xMjVyZW07Y29sb3I6I2ZmMDAwMDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmI4Yjg7Y3Vyc29yOm5vdC1hbGxvd2VkOyJ9LCJjbGFpbVRleHQiOnsidGV4dCI6bnVsbCwic3R5bGVzIjoiY29sb3I6IHJnYmEoMTU2LCAxNjMsIDE3NSk7Zm9udC1zaXplOiAwLjc1cmVtO2xpbmUtaGVpZ2h0OiAxcmVtO3RleHQtYWxpZ246IGNlbnRlcjtwYWRkaW5nLXRvcDogMC4yNXJlbTtwYWRkaW5nLWJvdHRvbTogMC4yNXJlbTttYXJnaW46MDtmb250LWZhbWlseTpzYW5zLXNlcmlmOyJ9LCJxdWFudGl0eSI6eyJ0ZXh0IjpudWxsLCJzdHlsZXMiOiJ3aWR0aDo0MHB4O2NvbG9yOiM1MzI0ZmY7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDoxcHg7Ym9yZGVyLWNvbG9yOiM1MzI0ZmY7Ym9yZGVyLXJhZGl1czowLjEyNXJlbTtmb250LXNpemU6MS4zcmVtO3RleHQtYWxpZ246Y2VudGVyOyJ9LCJtaW50TWVzc2FnZSI6IiJ9'
      data-abi-link="https://firebasestorage.googleapis.com/v0/b/nft-rampp.appspot.com/o/solidity_outputs%2FYfJU183fMDSD420PZwxL%2FOptiNautsContract_data-f9850c9d-93b1-4be5-81a7-800242e02505.json?alt=media"
      data-redirect="null"
      data-contract-address="0x780F4D9cCa855830334deE6b38364Ab69FCd3047"
      data-show-claim-count="true"
      data-network="optimism"
      data-format="multi"
      data-erc20-payments="0x4200000000000000000000000000000000000042"
      data-redemption-contracts=""
      data-use-winter="false"
      data-winter-project-id="null">
    </button>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.7.0-rc.0/web3.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script type="text/javascript" src="https://unpkg.com/web3modal@1.9.8/dist/index.js"></script>
    <script type="text/javascript" src="https://unpkg.com/evm-chains@0.2.0/dist/umd/index.min.js"></script>
    <script type="text/javascript" src="https://unpkg.com/@walletconnect/web3-provider@1.7.8/dist/umd/index.min.js"></script>
    <script type='text/javascript' src="https://mintplex.xyz/embeds/v2.1/embed.js" data-uuid='24acfb24-586b-4857-8022-8dee87482e89'></script>  
  `};
}

const Nft = () => {

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
                    <TwitterShareButton
                      title={'MINTING NOW 3000 Nauts, pioneering exploration of DeFi protocols on Optimism L2.🔴 '}
                    >
                      <TwitterIcon size={32} round />
                    </TwitterShareButton>
                  </li>
                  <li>
                    <FacebookShareButton
                        quote={'MINTING NOW 3000 Nauts, pioneering exploration of DeFi protocols on Optimism L2.🔴'}
                        hashtag={'#optinauts'}
                        >
                      <FacebookIcon size={32} round />
                    </FacebookShareButton>
                  </li>
                  <li>
                    <TelegramShareButton
                      title={'MINTING NOW 3000 Nauts, pioneering exploration of DeFi protocols on Optimism L2.🔴'}
                    >
                      <TelegramIcon size={32} round />
                    </TelegramShareButton>
                  </li>
                  <li>
                    <RedditShareButton
                      title={'MINTING NOW 3000 Nauts, pioneering exploration of DeFi protocols on Optimism L2.🔴'}
                      >
                      <RedditIcon size={32} round />
                    </RedditShareButton>
                  </li>
                  <li>
                    <EmailShareButton
                      subject={'MINTING NOW 3000 Nauts, pioneering exploration of DeFi protocols on Optimism L2.🔴'}
                      body="MINTING NOW 3000 Nauts, pioneering exploration of DeFi protocols on Optimism L2.🔴"
                    >
                      <EmailIcon size={32} round />
                    </EmailShareButton>
                  </li>
                </ul>
              </div>
              <h3
                className="fn__maintitle"
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
                <div dangerouslySetInnerHTML={MintPlex()} />
                {/* !mintplex */}
              </div>
              <div className="view_on">
                <ul>
                  <li>
                    <span>View On:</span>
                  </li>
                  <li>
                    <a href="https://opensea.io/collection/optinauts-op" target="_blank" rel="noreferrer">
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

export default Nft;
