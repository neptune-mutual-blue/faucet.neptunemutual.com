import { explorer } from "@/src/config/explorer";
import { useNetwork } from "@/src/context/network";
import { useProtocolContracts } from "@/src/hooks/useProtocolContracts";

export const ProtocolContracts = () => {
  const { data } = useProtocolContracts();
  const { network } = useNetwork();

  const addresses = data[network] || [];

  return (
    <>
      <h3 className="text-xs font-inter font-bold pt-4 pb-2 text-gray-800">
        Protocol Contracts
      </h3>
      <p className="font-inter max-w-fit">
        {Object.keys(addresses).map((k, idx) => {
          return (
            <>
              <a
                key={k}
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
            </>
          );
        })}
      </p>
    </>
  );
};
