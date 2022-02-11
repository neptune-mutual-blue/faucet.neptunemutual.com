import ConnectWallet from "@/lib/connect-wallet/components/ConnectWallet/ConnectWallet";
import { useNetwork } from "@/src/context/network";
import { useWeb3React } from "@web3-react/core";
import { useEffect } from "react";
import useAuth from "@/lib/connect-wallet/hooks/useAuth";

export const ConnectToWallet = () => {
  const { active } = useWeb3React();
  const { network } = useNetwork();
  const networkId = parseInt(network, 10);

  const { logout } = useAuth(networkId);

  useEffect(() => {
    logout();
  }, [networkId]);

  return (
    <ConnectWallet networkId={networkId} notifier={console.log}>
      {({ onOpen, logout }) => (
        <button
          type="button"
          onClick={active ? () => logout() : () => onOpen()}
          className={`mt-6 font-inter text-white text-sm font-semibold py-2 px-6 focus:ring-2 focus:ring-offset-2 focus:outline-none transition-colors duration-200 ${
            active
              ? "bg-red-600 hover:bg-red-700 focus:ring-red-800"
              : "bg-36309D hover:bg-indigo-700 focus:ring-indigo-800 "
          }`}
        >
          {active ? "Disconnect" : "Connect"}
        </button>
      )}
    </ConnectWallet>
  );
};
