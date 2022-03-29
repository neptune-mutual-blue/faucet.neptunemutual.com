import { useWeb3React } from "@web3-react/core";

export const ConnectedAccount = () => {
  const { account } = useWeb3React();

  if (!account) {
    return null;
  }

  return (
    <div className="pt-8 pb-6">
      <p className="pb-2 text-xs font-bold text-gray-800 font-inter">
        Connected Account
      </p>
      <p className="text-sm text-gray-800 break-all font-inter">{account}</p>
    </div>
  );
};
