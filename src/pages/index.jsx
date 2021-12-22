import "tailwindcss/tailwind.css";
import Head from "next/head";
import { ConnectWallet } from "@/components/ConnectWallet/ConnectWallet";
import { SelectNetwork } from "@/components/SelectNetwork";
import { ConnectedAccount } from "@/components/ConnectedAccount";
import { Balances } from "@/components/Balances";
import { ProtocolContracts } from "@/components/ProtocolContracts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Neptune Mutual Testnet Faucet</title>
        <meta name="description" content="Testnet Faucet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Neptune Mutual Testnet Faucet</h1>

        <SelectNetwork />

        <ConnectWallet />

        <ConnectedAccount />

        <Balances />

        <ProtocolContracts />
      </main>

      <footer></footer>
    </>
  );
}
