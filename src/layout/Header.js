import Link from "next/link";
import { useEffect } from "react";
import { stickyNav } from "../utilits";
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Header = () => {
  useEffect(() => {
    stickyNav();
  }, []);

  return (
    <header id="header">
      <div className="header">
        <div className="header_in">
          <div className="trigger_logo">
            <div className="logo">
              <Link href="/">
                <a>
                  <img src="/img/logo.png" alt="" />
                </a>
              </Link>
            </div>
          </div>
          <div className="nav" style={{ opacity: 1 }}>
            <ul>
              <li>
                <a href="/" className="creative_link">Home</a>
              </li>
              <li>
                <a href="/nft" className="creative_link">Mint page</a>
              </li>
            </ul>
          </div>
          <div className="wallet">
            <ConnectButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
