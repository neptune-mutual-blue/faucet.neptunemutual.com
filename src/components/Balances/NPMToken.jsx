import OpenInNewIcon from "@/components/icons/open-in-new";
import AddCircleIcon from "@/components/icons/add-circle";

export const NPMToken = () => {
  const balance = 1000.123;

  return (
    <tr>
      <td>
        <td className="font-inter text-gray-800">{balance} NPM</td>
      </td>
      <td className="text-right flex justify-end">
        <td>
          <button className="text-36309D hover:text-red-600">Request</button>
        </td>
        <td>
          <a>
            <span className="sr-only">Open in Explorer</span>
            <OpenInNewIcon fill="currentColor" />
          </a>
        </td>
        <td>
          <button>
            <span className="sr-only">Add to Wallet</span>
            <AddCircleIcon fill="currentColor" />
          </button>
        </td>
      </td>
    </tr>
  );
};
