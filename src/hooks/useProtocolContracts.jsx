import { useEffect, useState } from "react";
import { registry, multicall, config, utils } from "@neptunemutual/sdk";
import { AddressZero } from "@ethersproject/constants";
import { useWeb3React } from "@web3-react/core";
import { getProviderOrSigner } from "@/lib/connect-wallet/utils/web3";
import { useNetwork } from "@/src/context/network";
import { getMetadataKeys } from "@/src/utils/keys";

export const useProtocolContracts = () => {
  const [data, setData] = useState({});

  const { library, account } = useWeb3React();
  const { network } = useNetwork();

  useEffect(() => {
    const getAddresses = async () => {
      const chain = parseInt(network, 10);

      const signerOrProvider = getProviderOrSigner(
        library,
        account || AddressZero,
        chain
      );

      if (!network || !account) {
        return;
      }

      let store = registry.Store.getInstance(chain, signerOrProvider);

      const metadataKeys = getMetadataKeys();
      const metadataResult = await utils.store.readStorage(
        chain,
        metadataKeys,
        signerOrProvider.provider
      );
      setData({
        [chain]: {
          ...metadataResult,
        },
      });
    };
    getAddresses();
  }, [account, library, network]);

  return { data };
};
