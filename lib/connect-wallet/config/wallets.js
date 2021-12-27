import { ConnectorNames } from "./connectors";

export const wallets = [
  {
    id: "1",
    name: "MetaMask",
    connectorName: ConnectorNames.Injected,
    iconSrc: "/icons/metamask.png",
  },
  {
    id: "2",
    name: "Binance Chain Wallet",
    connectorName: ConnectorNames.BSC,
    iconSrc: "/icons/binance-wallet.png",
  },
  {
    id: "3",
    name: "Wallet Connect",
    connectorName: ConnectorNames.WalletConnect,
    iconSrc: "/icons/walletconnect.png",
  },
];
