import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { fetchFakeTokenBalance } from "@/src/blockchain/fetchFakeTokenBalance";
import { requestFakeToken } from "@/src/blockchain/requestFakeToken";
import { getAddressLink } from "@/lib/connect-wallet/utils/explorer";
import { registerToken } from "@/lib/connect-wallet/utils/wallet";

const fetchBalance = async (tokenAddress, library, account, networkId) => {
  const res = await fetchFakeTokenBalance(
    tokenAddress,
    library,
    account,
    networkId
  );
  return res;
};

const requestToken = async (tokenAddress, library, account, networkId) => {
  const res = await requestFakeToken(tokenAddress, library, account, networkId);
  return res;
};

export const useMintableToken = (address) => {
  const { chainId, account, library } = useWeb3React();

  const [balance, setBalance] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!chainId || !account) return;

    let ignore = false;
    setLoading(true);

    fetchBalance(address, library, account, chainId)
      .then((bal) => {
        if (ignore) return;

        setBalance(bal);
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
        if (ignore) return;

        setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [account, library, chainId, address]);

  const request = () => {
    if (!chainId || !account) return;

    requestToken(address, library, account, chainId)
      .then(() => {
        fetchBalance(address, library, account, chainId)
          .then((bal) => setBalance(bal))
          .catch(console.error);
      })
      .catch(console.error);
  };

  const register = (symbol) => {
    if (!chainId || !account) return;

    const image = symbol
      ? `https://api.neptunemutual.com/images/tokens/${symbol.toLowerCase()}.svg`
      : undefined;

    registerToken(address, symbol, 18, image)
      .then(console.log)
      .catch(console.error);
  };

  return {
    loading,
    balance,
    request,
    register,
    explorerUrl: getAddressLink(chainId, address),
  };
};
