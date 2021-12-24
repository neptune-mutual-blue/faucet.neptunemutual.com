import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { fetchFakeTokenBalance } from "@/src/blockchain/fetchFakeTokenBalance";
import { requestFakeToken } from "@/src/blockchain/requestFakeToken";
import { explorer } from "@/src/config/explorer";
import { registerToken } from "@/lib/connect-wallet/utils/wallet";

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

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

export const useFakeToken = (addresses) => {
  const { chainId, account, library } = useWeb3React();

  const [balance, setBalance] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!chainId || !account) return;

    let ignore = false;
    setLoading(true);

    fetchBalance(addresses[chainId], library, account, chainId)
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

    return () => (ignore = true);
  }, [account, library, chainId, addresses]);

  const request = () => {
    if (!chainId || !account) return;

    requestToken(addresses[chainId], library, account, chainId)
      .then(console.log)
      .catch(console.error);
  };

  const register = (symbol) => {
    if (!chainId || !account) return;

    registerToken(addresses[chainId], symbol, 18)
      .then(console.log)
      .catch(console.error);
  };

  return {
    loading,
    balance,
    request,
    register,
    explorerUrl: explorer.address[chainId] + addresses[chainId],
  };
};
