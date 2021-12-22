import { Dialog } from "@headlessui/react";

import useAuth from "src/hooks/useAuth";
import { wallets } from "@/lib/connect-wallet/config/wallets";
import { Modal } from "@/components/Modal/Modal";
import { useWeb3React } from "@web3-react/core";
import { Disclaimer } from "@/components/ConnectWallet/Disclaimer";
import { WalletList } from "@/components/ConnectWallet/WalletList";
import { useEffect, useState } from "react";
import { Loader } from "@/components/Loader/Loader";

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
          className="absolute top-7 right-14 cursor-pointer"
          onClick={onClose}
        >
          <img src="/icons/close-icon.png" />
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
