import "tailwindcss/tailwind.css";
import Head from "next/head";
import { ConnectToWallet } from "@/components/ConnectToWallet";
import { SelectNetwork } from "@/components/SelectNetwork";
import { ConnectedAccount } from "@/components/ConnectedAccount";
import { Balances } from "@/components/Balances";
import { ProtocolContracts } from "@/components/ProtocolContracts";
import { useProtocolContracts } from "@/src/hooks/useProtocolContracts";
import { useNetwork } from "@/src/context/network";

export default function Home() {
  const { data } = useProtocolContracts();
  const { network } = useNetwork();

  const addresses = data[network] || {};

  return (
    <>
      <Head>
        <title>Neptune Mutual Testnet Faucet</title>
        <meta name="description" content="Testnet Faucet" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>

      <main className="flex flex-col items-center justify-center w-screen h-screen bg-36309D">
        <section className="w-auto h-auto p-8 mx-4 bg-white sm:p-12 sm:mx-0 rounded-3xl">
          <p className="text-2xl font-bold text-36309D font-inter">
            Neptune Mutual Testnet Faucet
          </p>

          <SelectNetwork />

          <ConnectToWallet />

          <ConnectedAccount />

          <Balances addresses={addresses} />

          <ProtocolContracts addresses={addresses} />
        </section>
      </main>

      <footer></footer>
    </>
  );
}
