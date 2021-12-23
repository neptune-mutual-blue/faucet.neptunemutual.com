import OpenInNewIcon from "@/components/icons/open-in-new";
import AddCircleIcon from "@/components/icons/add-circle";

export const NPMToken = () => {
  const balance = 1000.123;

  return (
    <tr className="border-t-default border-gray-300">
      <td>
        <td className="font-inter text-gray-800 text-sm">{balance} NPM</td>
      </td>
      <div className="text-right flex justify-end items-center">
        <td>
          <button className="text-36309D hover:text-red-600 text-sm">
            Request
          </button>
        </td>
        <td className="px-2 py-0">
          <a>
            <span className="sr-only">Open in Explorer</span>
            <OpenInNewIcon
              fill="#9B9B9B"
              width={20}
              height={18}
              viewBox="0 0 24 24"
            />
          </a>
        </td>
        <td>
          <button className="flex">
            <span className="sr-only">Add to Wallet</span>
            <AddCircleIcon
              fill="#9B9B9B"
              width={20}
              height={18}
              viewBox="0 0 22 22"
            />
          </button>
        </td>
      </div>
    </tr>
  );
};
