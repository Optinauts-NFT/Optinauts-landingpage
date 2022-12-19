import Head from "next/head";
import "../styles/globals.css";

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { optimism } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { Analytics } from '@vercel/analytics/react';

const { chains, provider } = configureChains(
  [optimism],
  [
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin=""
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      {/* !Google Fonts */}
      {/* Styles */}
      <link
        type="text/css"
        rel="stylesheet"
        href="/css/plugins.css?ver=4.1"
      />
      <link type="text/css" rel="stylesheet" href="/css/style.css?ver=4.1" />
    </Head>
    <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} theme={darkTheme()} showRecentTransactions={true}>
          <Component {...pageProps} />
          <Analytics />
        </RainbowKitProvider>
    </WagmiConfig>
    </>
  );
}

export default MyApp;
