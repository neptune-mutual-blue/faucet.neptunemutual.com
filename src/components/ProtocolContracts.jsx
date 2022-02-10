import { explorer } from "@/lib/connect-wallet/config/chains";
import { useNetwork } from "@/src/context/network";
import { Fragment } from "react";

export const ProtocolContracts = ({ addresses }) => {
  const { network } = useNetwork();

  return (
    <>
      <h3 className="text-xs font-inter font-bold pt-4 pb-2 text-gray-800">
        Protocol Contracts
      </h3>
      <p className="font-inter max-w-fit">
        {Object.keys(addresses).map((k, idx) => {
          return (
            <Fragment key={k}>
              <a
                href={explorer.address[network] + addresses[k]}
                rel="noreferrer"
                target="_blank"
                className="text-36309D hover:text-red-600 underline underline-offset-1 text-sm"
              >
                {k}
              </a>
              {idx !== Object.keys(addresses).length - 1 && (
                <span className="text-36309D">, </span>
              )}
            </Fragment>
          );
        })}
      </p>
    </>
  );
};
