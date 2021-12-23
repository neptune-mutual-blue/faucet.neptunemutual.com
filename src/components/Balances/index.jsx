import { LiquidityToken } from "@/components/Balances/LiquidityToken";
import { NPMToken } from "@/components/Balances/NPMToken";
import { useWeb3React } from "@web3-react/core";

export const Balances = () => {
  const { account } = useWeb3React();

  return (
    <div className={`pb-2 ${!account ? "pt-8" : ""}`}>
      <p className="font-inter font-bold text-xs text-gray-800">
        Your Balances
      </p>
      <table className="table-auto w-full mt-2">
        <thead></thead>
        <LiquidityToken />
        <NPMToken />
      </table>
    </div>
  );
};
