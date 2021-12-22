import { useEffect } from "react";
import { ConnectorNames } from "../../lib/connect-wallet/config/connectors";
import {
  ACTIVE_CHAIN_KEY,
  ACTIVE_CONNECTOR_KEY,
} from "../../lib/connect-wallet/config/localstorage";

import useAuth from "./useAuth";

const _binanceChainListener = async () =>
  new Promise((resolve) =>
    Object.defineProperty(window, "BinanceChain", {
      get() {
        return this.bsc;
      },
      set(bsc) {
        this.bsc = bsc;

        resolve();
      },
    })
  );

export const useEagerConnect = () => {
  const { login } = useAuth();

  useEffect(() => {
    const connectorName = window.localStorage.getItem(ACTIVE_CONNECTOR_KEY);

    if (connectorName === ConnectorNames.BSC) {
      const isConnectorBinanceChain = connectorName === ConnectorNames.BSC;
      const isBinanceChainDefined = Reflect.has(window, "BinanceChain");

      if (isConnectorBinanceChain && !isBinanceChainDefined) {
        _binanceChainListener().then(() => login(connectorName));

        return;
      }
    }

    login(connectorName);
  }, [login]);
};
