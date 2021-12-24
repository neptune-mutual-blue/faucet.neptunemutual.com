import { useEffect, useState } from "react";
import { ChainId, registry } from "@neptunemutual/sdk";

export const useProtocolContracts = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    [ChainId.BinanceSmartChainTestnet, ChainId.Mumbai, ChainId.Ropsten].forEach(
      (chain) => {
        registry.ClaimsProcessor.getAddress(chain).then((addr) => {
          setData((prev) => ({
            ...prev,
            [chain]: {
              ...prev[chain],
              ClaimsProcessor: addr,
            },
          }));
        });

        registry.Reassurance.getAddress(chain).then((addr) => {
          setData((prev) => ({
            ...prev,
            [chain]: {
              ...prev[chain],
              Reassurance: addr,
            },
          }));
        });

        registry.Cover.getAddress(chain).then((addr) => {
          setData((prev) => ({
            ...prev,
            [chain]: {
              ...prev[chain],
              Cover: addr,
            },
          }));
        });

        registry.Governance.getAddress(chain).then((addr) => {
          setData((prev) => ({
            ...prev,
            [chain]: {
              ...prev[chain],
              Governance: addr,
            },
          }));
        });

        registry.LiquidityToken.getAddress(chain).then((addr) => {
          setData((prev) => ({
            ...prev,
            [chain]: {
              ...prev[chain],
              LiquidityToken: addr,
            },
          }));
        });

        registry.NPMToken.getAddress(chain).then((addr) => {
          setData((prev) => ({
            ...prev,
            [chain]: {
              ...prev[chain],
              NPMToken: addr,
            },
          }));
        });

        registry.PolicyContract.getAddress(chain).then((addr) => {
          setData((prev) => ({
            ...prev,
            [chain]: {
              ...prev[chain],
              PolicyContract: addr,
            },
          }));
        });

        registry.ProvisionContract.getAddress(chain).then((addr) => {
          setData((prev) => ({
            ...prev,
            [chain]: {
              ...prev[chain],
              ProvisionContract: addr,
            },
          }));
        });

        registry.Staking.getAddress(chain).then((addr) => {
          setData((prev) => ({
            ...prev,
            [chain]: {
              ...prev[chain],
              Staking: addr,
            },
          }));
        });
      }
    );
  }, []);

  return { data };
};
