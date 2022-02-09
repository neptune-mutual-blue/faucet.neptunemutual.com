import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { fetchFakeTokenBalance } from "@/src/blockchain/fetchFakeTokenBalance";
import { explorer } from "@/src/config/explorer";
import { registerToken } from "@/lib/connect-wallet/utils/wallet";
import { requestMockDAI } from "@/src/blockchain/mintDAI";

const fetchBalance = async (tokenAddress, library, account, networkId) => {
  const res = await fetchFakeTokenBalance(
    tokenAddress,
    library,
    account,
    networkId
  );
  return res;
};

export const useMockDAI = (address) => {
  const { chainId, account, library } = useWeb3React();

  const [balance, setBalance] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!chainId || !account) return;

    let ignore = false;

    async function updateBalance() {
      try {
        setLoading(true);
        const bal = await fetchBalance(address, library, account, chainId);

        if (ignore) return;
        setBalance(bal);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }

    updateBalance();

    return () => {
      ignore = true;
    };
  }, [account, library, chainId, address]);

  const request = () => {
    if (!chainId || !account) return;

    requestMockDAI(address, library, account, chainId)
      .then(console.log)
      .catch(console.error);
  };

  const register = (symbol) => {
    if (!chainId || !account) return;

    registerToken(address, symbol, 18).then(console.log).catch(console.error);
  };

  return {
    loading,
    balance,
    request,
    register,
    explorerUrl: explorer.address[chainId] + address,
  };
};
