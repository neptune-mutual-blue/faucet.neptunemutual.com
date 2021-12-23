import { useWeb3React } from "@web3-react/core";

export const ConnectedAccount = () => {
  const { account } = useWeb3React();

  if (!account) {
    return null;
  }

  return (
    <div className="pt-8 pb-6">
      <p className="text-xs font-inter font-bold text-gray-800 pb-2">
        Connected Account
      </p>
      <p className="font-inter text-gray-800 text-sm">{account}</p>
    </div>
  );
};
