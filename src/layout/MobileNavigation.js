import Link from "next/link";
import { Fragment, useState } from "react";
import { ConnectButton } from '@rainbow-me/rainbowkit';

const MobileNavigation = ({ walletToggle, navigationToggle }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <Fragment>
      <div className="metaportal_fn_mobnav">
        <div className="mob_mid">
          <div className="logo">
            <Link href="/">
              <a>
                <img src="/img/logo.png" alt="" />
              </a>
            </Link>
          </div>
          <div className="wallet">
            <ConnectButton />
          </div>
          <div
            className={`trigger ${toggle ? "active" : ""}`}
            onClick={() => setToggle(!toggle)}
          >
            <span />
          </div>
        </div>
        <div className="mob_bot" style={{ display: toggle ? "block" : "none" }}>
          <ul>
            <li>
              <a href="/" className="creative_link">Home</a>
            </li>
            <li>
              <a href="/nft" className="creative_link">Mint page</a>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default MobileNavigation;
