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

      <main className="bg-36309D w-screen h-screen flex flex-col justify-center items-center">
        <section className="bg-white h-auto w-auto p-12 rounded-3xl">
          <p className="text-36309D font-bold text-2xl font-inter">
            Neptune Mutual Testnet Faucet
          </p>

          <SelectNetwork />

          <ConnectWallet />

          <ConnectedAccount />

          <Balances />

          <ProtocolContracts />
        </section>
      </main>

      <footer></footer>
    </>
  );
}
