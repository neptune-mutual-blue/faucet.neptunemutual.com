import { Dialog } from "@headlessui/react";

import useAuth from "src/hooks/useAuth";
import { wallets } from "@/lib/connect-wallet/config/wallets";
import { Modal } from "@/components/Modal/Modal";
import { useWeb3React } from "@web3-react/core";
import { Disclaimer } from "@/components/ConnectWallet/Disclaimer";
import { WalletList } from "@/components/ConnectWallet/WalletList";
import { useEffect, useState } from "react";
import { Loader } from "@/components/Loader/Loader";
import CloseIcon from "@/components/icons/close";

export const Popup = ({ isOpen, onClose }) => {
  const [isConnecting, setIsConnecting] = useState(false);
  const { active, account } = useWeb3React();
  const { login, logout } = useAuth();

  useEffect(() => {
    if (!isOpen) setIsConnecting(false);

    if (active) {
      setIsConnecting(false);
      onClose();
    }
  }, [isOpen, active, onClose]);

  const onConnect = (id) => {
    setIsConnecting(true);
    const wallet = wallets.find((x) => x.id === id);
    const connectorName = wallet.connectorName;
    login(connectorName);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="inline-block max-w-md p-12 my-8 overflow-hidden text-left align-middle transition-all transform shadow-xl rounded-2xl bg-f1f3f6">
        <button
          onClick={onClose}
          className="absolute top-7 right-12 flex justify-center items-center text-gray-300 hover:text-black focus:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-364253 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
        >
          <span className="sr-only">Close</span>
          <CloseIcon />
        </button>
        <Dialog.Title
          as="h3"
          className="font-sora text-3xl font-bold text-black-900 leading-9"
        >
          Connect Wallet
        </Dialog.Title>

        {!isConnecting && (
          <>
            <Disclaimer />
            <WalletList wallets={wallets} onConnect={onConnect} />
          </>
        )}

        {isConnecting && (
          <>
            <div className="mt-8 flex justify-left items-center">
              <Loader />
              <p className="text-base">Connecting</p>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};
