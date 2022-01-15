import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

import { useNetwork } from "../context/network";
import styles from "./RadioGroup.module.css";

const RadioGroup = RadioGroupPrimitive.Root;
const RadioGroupRadioItem = RadioGroupPrimitive.Item;
const RadioGroupIndicator = RadioGroupPrimitive.Indicator;

export const SelectNetwork = () => {
  const { network, setNetwork } = useNetwork();

  return (
    <>
      <form onSubmit={(ev) => ev.preventDefault()}>
        <h3 className="text-xs font-inter font-bold mt-6 text-gray-800">
          Select a Network
        </h3>
        <RadioGroup
          defaultValue="default"
          aria-label="View density"
          className="flex font-inter text-gray-800 text-sm mt-4"
          value={network}
          onValueChange={setNetwork}
        >
          <div className="flex justify-start items-center mr-6">
            <RadioGroupRadioItem
              className={styles.radio_item}
              value="3"
              id="r3"
            >
              <RadioGroupIndicator className={styles.radio_indicator} />
            </RadioGroupRadioItem>
            <label htmlFor="r3">Ropsten</label>
          </div>
          <div className="flex justify-start items-center mr-6">
            <RadioGroupRadioItem
              className={styles.radio_item}
              value="97"
              id="r1"
            >
              <RadioGroupIndicator className={styles.radio_indicator} />
            </RadioGroupRadioItem>
            <label htmlFor="r1">BSC Testnet</label>
          </div>
          <div className="flex justify-start items-center mr-6">
            <RadioGroupRadioItem
              className={styles.radio_item}
              value="80001"
              id="r2"
            >
              <RadioGroupIndicator className={styles.radio_indicator} />
            </RadioGroupRadioItem>
            <label htmlFor="r2">Mumbai</label>
          </div>
        </RadioGroup>
      </form>
    </>
  );
};
