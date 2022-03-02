import { MintableToken } from "@/components/Balances/MintableToken";
import { useNetwork } from "@/src/context/network";
import { useWeb3React } from "@web3-react/core";
import { addresses as configured } from "@/src/config";

export const Balances = ({ addresses }) => {
  const { account } = useWeb3React();
  const { network } = useNetwork();

  if (!account || !network) {
    return null;
  }

  return (
    <div className="mt-2">
      <h3 className="font-inter font-bold text-xs text-gray-800">
        Your Balances
      </h3>
      <table className="table-auto w-full mt-2">
        <thead></thead>
        <tbody className="divide-y divide-gray-200">
          <MintableToken address={addresses.Stablecoin} symbol="DAI" />
          <MintableToken address={addresses.NPMToken} symbol="NPM" />
        </tbody>
      </table>
    </div>
  );
};
