import { ConnectorNames } from "@/lib/connect-wallet/config/connectors";

/**
 * Asynchronously load the selected connector only
 *
 * @param {string} name
 * @param {number} chainId
 */
export const getConnectorByName = async (name, chainId) => {
  switch (name) {
    case ConnectorNames.Injected: {
      const c = await import("@/lib/connect-wallet/injected/connector");

      return c.getConnector(chainId);
    }
    case ConnectorNames.BSC: {
      const c = await import("@/lib/connect-wallet/binance-wallet/connector");

      return c.getConnector(chainId);
    }
    case ConnectorNames.WalletConnect: {
      const c = await import("@/lib/connect-wallet/walletconnect/connector");

      return c.getConnector(chainId);
    }
    default:
      return null;
  }
};
