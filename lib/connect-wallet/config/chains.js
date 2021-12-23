import { rpcUrls } from "./rpcUrls";

// Update according to https://github.com/ethereum-lists/chains
// TODO: Try to match as much as possible
export const chains = [
  {
    id: 56,
    chainId: `0x${(56).toString(16)}`,
    chainName: "Binance Smart Chain Mainnet",
    nativeCurrency: {
      name: "Binance Coin",
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: rpcUrls[56],
    blockExplorerUrls: ["https://bscscan.com"],
  },
  {
    id: 97,
    chainId: `0x${(97).toString(16)}`,
    chainName: "Binance Smart Chain Testnet",
    nativeCurrency: {
      name: "Binance Coin",
      symbol: "tBNB",
      decimals: 18,
    },
    rpcUrls: rpcUrls[97],
    blockExplorerUrls: ["https://testnet.bscscan.com"],
  },
  {
    id: 80001,
    chainId: `0x${(80001).toString(16)}`,
    chainName: "Polygon Testnet Mumbai",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: rpcUrls[80001],
    blockExplorerUrls: ["https://mumbai.polygonscan.com"],
  },
];

export const NetworkNames = {
  56: "BSC Mainnet",
  97: "BSC Testnet",
  3: "Ropsten Testnet",
  80001: "Polygon Testnet Mumbai",
};
