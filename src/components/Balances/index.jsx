import { LiquidityToken } from "@/components/Balances/LiquidityToken";
import { NPMToken } from "@/components/Balances/NPMToken";

export const Balances = () => {
  return (
    <>
      <p className="font-inter font-bold text-xs pt-8">Your Balances</p>
      <table>
        <thead></thead>
        <LiquidityToken />
        <NPMToken />
      </table>
    </>
  );
};
