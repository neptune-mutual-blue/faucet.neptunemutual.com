import { ChainId, registry } from "@neptunemutual/sdk";

export const getAddresses = () => {
  [ChainId.BinanceSmartChainTestnet, ChainId.Mumbai, ChainId.Ropsten].forEach(
    (chain) => {
      registry.LiquidityToken.getAddress(chain).then((addr) => {
        console.log("LiquidityToken", chain, addr);
      });
    }
  );

  [ChainId.BinanceSmartChainTestnet, ChainId.Mumbai, ChainId.Ropsten].forEach(
    (chain) => {
      registry.NPMToken.getAddress(chain).then((addr) => {
        console.log("NPMToken", chain, addr);
      });
    }
  );
};
