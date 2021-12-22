import Link from "next/link";

export const ProtocolContracts = () => {
  return (
    <>
      <h2>Protocol Contracts</h2>
      <p>
        <Link href="#">
          <a className="text-indigo-800 hover:text-red-600 underline underline-offset-1">
            Store
          </a>
        </Link>
        ,{" "}
        <Link href="#">
          <a className="text-indigo-800 hover:text-red-600 underline underline-offset-1">
            Reassurance Vault
          </a>
        </Link>
        ,{" "}
        <Link href="#">
          <a className="text-indigo-800 hover:text-red-600 underline underline-offset-1">
            Claims Processor
          </a>
        </Link>
        ,
      </p>
    </>
  );
};
