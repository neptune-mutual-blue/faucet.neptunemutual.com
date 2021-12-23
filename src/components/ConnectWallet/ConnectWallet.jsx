import { useState } from "react";

import { useWeb3React } from "@web3-react/core";
import useAuth from "src/hooks/useAuth";
import { Popup } from "./Popup";

export const ConnectWallet = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { active, account, chainId } = useWeb3React();

  const { logout } = useAuth();

  function onClose() {
    setIsOpen(false);
  }

  function onOpen() {
    if (active) {
      logout();
    }

    setIsOpen(true);
  }

  let button = (
    <button
      type="button"
      onClick={onOpen}
      className="mt-6 bg-36309D font-inter hover:bg-indigo-700 text-white text-sm font-semibold py-2 px-6 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800 focus:outline-none transition-colors duration-200"
    >
      Connect
    </button>
  );

  if (active) {
    button = (
      <button
        type="button"
        onClick={logout}
        className="mt-6 bg-red-600 font-inter hover:bg-red-700 text-white text-sm font-semibold py-2 px-6 focus:ring-2 focus:ring-offset-2 focus:ring-red-800 focus:outline-none transition-colors duration-200"
      >
        Disconnect
      </button>
    );
  }

  return (
    <>
      {button}
      <Popup isOpen={isOpen} onClose={onClose} />
    </>
  );
};
