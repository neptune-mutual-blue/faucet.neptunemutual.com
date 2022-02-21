import OpenInNewIcon from "@/components/icons/open-in-new";
import AddCircleIcon from "@/components/icons/add-circle";
import { convertFromUnits, hasValue } from "@/src/utils/bn";
import { useMintableToken } from "@/src/hooks/useMintableToken";

export const MintableToken = ({ address, symbol }) => {
  const { loading, balance, request, explorerUrl, register } =
    useMintableToken(address);

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

  return (
    <>
      <tr className="flex items-center">
        <td>
          <div className="font-inter text-gray-800 text-sm">
            {hasValue(balance)
              ? convertFromUnits(balance).decimalPlaces(2).toString()
              : "0"}{" "}
            {symbol}
          </div>
        </td>
        <td className="p-1 ml-auto">
          <button
            className="text-36309D hover:text-red-600 text-sm"
            onClick={request}
          >
            Request
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
