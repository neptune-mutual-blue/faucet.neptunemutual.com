import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

import { POLLING_INTERVAL } from "@/lib/connect-wallet/config/connectors";
import { getNodeUrl } from "@/lib/connect-wallet/utils/getRpcUrl";

/**
 *
 * @param {number} chainId
 * @returns
 */
export const getConnector = (chainId) => {
  const rpcUrl = getNodeUrl(chainId);

  const walletconnect = new WalletConnectConnector({
    rpc: { [chainId]: rpcUrl },
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
    pollingInterval: POLLING_INTERVAL,
    chainId: chainId,
    supportedChainIds: [chainId],
  });

  return walletconnect;
};

console.log("walletconnect connector loaded");
