import OpenInNewIcon from "@/components/icons/open-in-new";
import AddCircleIcon from "@/components/icons/add-circle";
import { convertFromUnits, hasValue } from "@/src/utils/bn";
import { useMintableToken } from "@/src/hooks/useMintableToken";
import CopyIcon from "@/components/icons/CopyIcon";
import { useState, useEffect } from "react";

export const MintableToken = ({ address, symbol, decimals = 18 }) => {
  const { loading, balance, request, explorerUrl, register } = useMintableToken(
    address,
    decimals
  );

  const [message, setMessage] = useState("");

  useEffect(() => {
    setTimeout(() => setMessage(""), 1000);
  }, [message]);

  if (!symbol) {
    return null;
  }

  if (loading) {
    return (
      <tr>
        <td>Loading...</td>
      </tr>
    );
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setMessage("Copied");
    } catch (error) {
      console.error(error);
      setMessage("Unable to copy token address");
    }
  };

  return (
    <>
      <tr className="flex items-center">
        <td>
          <div className="text-sm text-gray-800 font-inter">
            {hasValue(balance)
              ? convertFromUnits(balance, decimals).decimalPlaces(2).toString()
              : "0"}{" "}
            {symbol}
          </div>
        </td>
        <td className="p-1 ml-auto">
          <button
            className="text-sm text-36309D hover:text-red-600"
            onClick={request}
          >
            Request
          </button>
        </td>
        <td className="p-1 ml-1">
          <button className="relative flex" onClick={handleCopy}>
            <span className="sr-only">Copy token address</span>
            <CopyIcon fill="#9B9B9B" width={18} height={18} />
            {message && (
              <span
                className="absolute text-white -left-7 -top-9 right-0 text-center w-fit px-2 py-1 rounded-md transition-all bg-[#9b9b9b]"
                aria-hidden="true"
              >
                {message}
              </span>
            )}
          </button>
        </td>
        <td className="p-1 ml-1">
          <a href={explorerUrl} rel="noreferrer" target="_blank">
            <span className="sr-only">Open in Explorer</span>
            <OpenInNewIcon fill="#9B9B9B" width={20} height={20} />
          </a>
        </td>

        <td className="p-1 ml-1">
          <button className="flex" onClick={() => register(symbol)}>
            <span className="sr-only">Add to Wallet</span>
            <AddCircleIcon fill="#9B9B9B" width={20} height={20} />
          </button>
        </td>
      </tr>
    </>
  );
};
