import "tailwindcss/tailwind.css";
import { Web3ReactProvider } from "@web3-react/core";

import { getLibrary } from "@/lib/connect-wallet/utils/web3";
import { NetworkProvider } from "../context/network";

function MyApp({ Component, pageProps }) {
  return (
    <NetworkProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Component {...pageProps} />
      </Web3ReactProvider>
    </NetworkProvider>
  );
}

export default MyApp;
