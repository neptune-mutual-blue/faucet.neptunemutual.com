import Link from "next/link";

export const ProtocolContracts = () => {
  return (
    <>
      <p className="text-xs font-inter font-bold py-3.5 text-gray-800">
        Protocol Contracts
      </p>
      <p className="font-inter">
        <Link href="#">
          <a className="text-36309D hover:text-red-600 underline underline-offset-1 text-sm">
            Store
          </a>
        </Link>
        <span className="text-36309D">,</span>
        <Link href="#">
          <a className="text-36309D hover:text-red-600 underline underline-offset-1 text-sm">
            Reassurance Vault
          </a>
        </Link>
        <span className="text-36309D">,</span>

        <Link href="#">
          <a className="text-36309D hover:text-red-600 underline underline-offset-1 text-sm">
            Claims Processor
          </a>
        </Link>
        <span className="text-36309D">, ...</span>
      </p>
    </>
  );
};
