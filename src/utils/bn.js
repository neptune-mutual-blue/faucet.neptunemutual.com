import BigNumber from "bignumber.js";

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
});

export const hasValue = (x) => {
  return !(!x || !parseFloat(x.toString()));
};

export const convertFromUnits = (value, decimals = 18) => {
  return new BigNumber(value.toString()).dividedBy(Math.pow(10, decimals));
};

export const convertToUnits = (value, decimals = 18) => {
  return new BigNumber(value.toString())
    .multipliedBy(Math.pow(10, decimals))
    .decimalPlaces(0);
};
