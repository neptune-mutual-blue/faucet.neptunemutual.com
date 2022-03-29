import { useEffect } from "react";
import { useNetwork } from "../context/network";

const Network_IDs = ["3", "42", "80001"];
export const SelectNetwork = () => {
  const { network, setNetwork } = useNetwork();

  const handleChange = (ev) => {
    setNetwork(ev.target.value);
  };

  useEffect(() => {
    async function getSelectedNetwork() {
      try {
        const selectedNetwork = await window.ethereum.request({
          method: "net_version",
        });
        if (Network_IDs.includes(selectedNetwork)) setNetwork(selectedNetwork);
      } catch (e) {
        console.error({ e });
      }
    }

    getSelectedNetwork();
  }, []);

  return (
    <>
      <form onSubmit={(ev) => ev.preventDefault()}>
        <h3 className="text-xs font-inter font-bold py-3.5 text-gray-800">
          Select a Network
        </h3>
        <div className="flex items-center justify-between sm:justify-start sm:space-x-5">
          <div className="flex items-center justify-center">
            <input
              type="radio"
              className="w-4 h-4 accent-36309D"
              id="networkChoice3"
              name="network"
              value="3"
              onChange={handleChange}
              checked={"3" === network}
            />
            <label
              htmlFor="networkChoice3"
              className="ml-1 text-sm text-gray-800 font-inter"
            >
              Ropsten
            </label>
          </div>
          <div className="flex items-center justify-center">
            <input
              type="radio"
              className="w-4 h-4 accent-36309D"
              id="networkChoice4"
              name="network"
              disabled={true}
              value="42"
              onChange={handleChange}
              checked={"42" === network}
            />
            <label
              htmlFor="networkChoice4"
              className="ml-1 text-sm text-gray-800 font-inter"
            >
              Kovan
            </label>
          </div>

          {/* <div className="flex items-center justify-center">
            <input
              type="radio"
              className="w-4 h-4 accent-36309D"
              id="networkChoice1"
              name="network"
              value="97"
              onChange={handleChange}
              checked={"97" === network}
            />
            <label
              htmlFor="networkChoice1"
              className="ml-1 text-sm text-gray-800 font-inter"
            >
              BSC Testnet
            </label>
          </div> */}

          <div className="flex items-center justify-center">
            <input
              type="radio"
              className="w-4 h-4 accent-36309D"
              id="networkChoice2"
              name="network"
              value="80001"
              onChange={handleChange}
              checked={"80001" === network}
            />
            <label
              htmlFor="networkChoice2"
              className="ml-1 text-sm text-gray-800 font-inter"
            >
              Mumbai
            </label>
          </div>
        </div>
      </form>
    </>
  );
};
