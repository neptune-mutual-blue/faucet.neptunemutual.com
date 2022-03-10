import { useEffect, useState } from "react";
import { registry } from "@neptunemutual/sdk";
import { AddressZero } from "@ethersproject/constants";
import { useWeb3React } from "@web3-react/core";
import { getProviderOrSigner } from "@/lib/connect-wallet/utils/web3";
import { useNetwork } from "@/src/context/network";

export const useProtocolContracts = () => {
  const [data, setData] = useState({});

  const { library, account } = useWeb3React();
  const { network } = useNetwork();

  useEffect(() => {
    if (!network || !account) {
      return;
    }

    const chain = parseInt(network, 10);
    const signerOrProvider = getProviderOrSigner(
      library,
      account || AddressZero,
      chain
    );

    registry.ClaimsProcessor.getAddress(chain, signerOrProvider).then(
      (addr) => {
        setData((prev) => ({
          ...prev,
          [chain]: {
            ...prev[chain],
            ClaimsProcessor: addr,
          },
        }));
      }
    );

    registry.Reassurance.getAddress(chain, signerOrProvider).then((addr) => {
      setData((prev) => ({
        ...prev,
        [chain]: {
          ...prev[chain],
          Reassurance: addr,
        },
      }));
    });

    registry.Cover.getAddress(chain, signerOrProvider).then((addr) => {
      setData((prev) => ({
        ...prev,
        [chain]: {
          ...prev[chain],
          Cover: addr,
        },
      }));
    });

    registry.Governance.getAddress(chain, signerOrProvider).then((addr) => {
      setData((prev) => ({
        ...prev,
        [chain]: {
          ...prev[chain],
          Governance: addr,
        },
      }));
    });

    registry.Stablecoin.getAddress(chain, signerOrProvider).then((addr) => {
      setData((prev) => ({
        ...prev,
        [chain]: {
          ...prev[chain],
          Stablecoin: addr,
        },
      }));
    });

    registry.NPMToken.getAddress(chain, signerOrProvider).then((addr) => {
      setData((prev) => ({
        ...prev,
        [chain]: {
          ...prev[chain],
          NPMToken: addr,
        },
      }));
    });

    registry.PolicyContract.getAddress(chain, signerOrProvider).then((addr) => {
      setData((prev) => ({
        ...prev,
        [chain]: {
          ...prev[chain],
          PolicyContract: addr,
        },
      }));
    });

    registry.ProvisionContract.getAddress(chain, signerOrProvider).then(
      (addr) => {
        setData((prev) => ({
          ...prev,
          [chain]: {
            ...prev[chain],
            ProvisionContract: addr,
          },
        }));
      }
    );

    registry.Staking.getAddress(chain, signerOrProvider).then((addr) => {
      setData((prev) => ({
        ...prev,
        [chain]: {
          ...prev[chain],
          Staking: addr,
        },
      }));
    });

    registry.Protocol.getAddress(chain, signerOrProvider).then((addr) => {
      setData((prev) => ({
        ...prev,
        [chain]: {
          ...prev[chain],
          Protocol: addr,
        },
      }));
    });

    registry.BondPool.getAddress(chain, signerOrProvider).then((addr) => {
      setData((prev) => ({
        ...prev,
        [chain]: {
          ...prev[chain],
          BondPool: addr,
        },
      }));
    });

    registry.StakingPools.getAddress(chain, signerOrProvider).then((addr) => {
      setData((prev) => ({
        ...prev,
        [chain]: {
          ...prev[chain],
          StakingPools: addr,
        },
      }));
    });
  }, [account, library, network]);

  return { data };
};
