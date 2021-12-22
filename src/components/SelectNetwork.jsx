import { useNetwork } from "../context/network";

export const SelectNetwork = () => {
  const { network, setNetwork } = useNetwork();

  const handleChange = (ev) => {
    setNetwork(ev.target.value);
  };

  return (
    <>
      <form onSubmit={(ev) => ev.preventDefault()}>
        <p>Select a Network</p>
        <div>
          <input
            type="radio"
            id="networkChoice1"
            name="network"
            value="97"
            onChange={handleChange}
            checked={"97" === network}
          />
          <label htmlFor="networkChoice1">BSC Testnet</label>

          <input
            type="radio"
            id="networkChoice2"
            name="network"
            value="80001"
            onChange={handleChange}
            checked={"80001" === network}
          />
          <label htmlFor="networkChoice2">Mumbai</label>

          <input
            type="radio"
            id="networkChoice3"
            name="network"
            value="3"
            onChange={handleChange}
            checked={"3" === network}
          />
          <label htmlFor="networkChoice3">Ropsten</label>
        </div>
      </form>
    </>
  );
};
