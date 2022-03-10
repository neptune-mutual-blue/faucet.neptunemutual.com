import { getAddressLink } from "@/lib/connect-wallet/utils/explorer";
import { useNetwork } from "@/src/context/network";
import { useWeb3React } from "@web3-react/core";
import { Fragment } from "react";

export const ProtocolContracts = ({ addresses }) => {
  const { network } = useNetwork();
  const { account } = useWeb3React();

  return (
    <>
      <h3 className="text-xs font-inter font-bold pt-4 pb-2 text-gray-800">
        Protocol Contracts
      </h3>
      <p className="font-inter max-w-fit">
        {!account && (
          <span className="text-red-600">Please connect your wallet</span>
        )}
        {account &&
          Object.keys(addresses)
            .sort()
            .map((k, idx) => {
              return (
                <Fragment key={k}>
                  <a
                    href={getAddressLink(network, addresses[k])}
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
