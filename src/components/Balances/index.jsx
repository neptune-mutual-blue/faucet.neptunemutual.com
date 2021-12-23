import { LiquidityToken } from "@/components/Balances/LiquidityToken";
import { NPMToken } from "@/components/Balances/NPMToken";

export const Balances = () => {
  return (
    <>
      <p className="font-inter font-bold text-xs pt-8">Your Balances</p>
      <table className="table-auto w-full my-3">
        <thead></thead>
        <LiquidityToken />
        <NPMToken />
      </table>
    </>
  );
};
