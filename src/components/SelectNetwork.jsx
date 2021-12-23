import { useNetwork } from "../context/network";

export const SelectNetwork = () => {
  const { network, setNetwork } = useNetwork();

  const handleChange = (ev) => {
    setNetwork(ev.target.value);
  };

  return (
    <>
      <form onSubmit={(ev) => ev.preventDefault()}>
        <p className="text-xs font-bold py-3.5 text-gray-800">
          Select a Network
        </p>
        <div className="flex justify-left items-center space-x-5">
          <div>
            <input
              type="radio"
              id="networkChoice1"
              name="network"
              value="97"
              onChange={handleChange}
              checked={"97" === network}
            />
            <label
              htmlFor="networkChoice1"
              className="font-inter text-gray-800 pl-1"
            >
              BSC Testnet
            </label>
          </div>

          <div>
            <input
              type="radio"
              id="networkChoice2"
              name="network"
              value="80001"
              onChange={handleChange}
              checked={"80001" === network}
            />
            <label
              htmlFor="networkChoice2"
              className="font-inter text-gray-800 pl-1"
            >
              Mumbai
            </label>
          </div>

          <div>
            <input
              type="radio"
              id="networkChoice3"
              name="network"
              value="3"
              onChange={handleChange}
              checked={"3" === network}
            />
            <label
              htmlFor="networkChoice3"
              className="font-inter text-gray-800 pl-1"
            >
              Ropsten
            </label>
          </div>
        </div>
      </form>
    </>
  );
};
