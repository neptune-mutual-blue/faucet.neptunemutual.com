import { Option } from "./Option";

export const WalletList = ({ wallets, onConnect }) => {
  return (
    <div className="mt-8 flex-col h-52">
      {wallets.map((wallet) => (
        <Option
          key={wallet.id}
          onClick={() => onConnect(wallet.id)}
          {...wallet}
        />
      ))}
    </div>
  );
};
