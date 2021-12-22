import { LiquidityToken } from "@/components/Balances/LiquidityToken";
import { NPMToken } from "@/components/Balances/NPMToken";

export const Balances = () => {
  return (
    <>
      <h2>Your Balances</h2>
      <table>
        <thead></thead>
        <LiquidityToken />
        <NPMToken />
      </table>
    </>
  );
};
