import Head from "next/head";
import { Provider } from "react-redux";
import store from "../src/redux/store";
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
import Script from 'next/script'

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
    <Provider store={store}>
      <Head>
      {/* <script async src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.7.0-rc.0/web3.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script async type="text/javascript" src="https://unpkg.com/web3modal@1.9.8/dist/index.js"></script>
        <script async type="text/javascript" src="https://unpkg.com/evm-chains@0.2.0/dist/umd/index.min.js"></script>
        <script async type="text/javascript" src="https://unpkg.com/@walletconnect/web3-provider@1.7.8/dist/umd/index.min.js"></script>
        
        <script async type='text/javascript' src="https://mintplex.xyz/embeds/v2.1/embed.js" data-uuid='0c3ee588-a457-474d-b7b5-aebdcc40806b'></script> */}
        
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
          </RainbowKitProvider>
      </WagmiConfig>
    </Provider>
  );
}

export default MyApp;
