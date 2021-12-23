import BigNumber from "bignumber.js";

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
});

export const hasValue = (x) => {
  return !(!x || !parseFloat(x.toString()));
};

export const convertFromUnits = (value, decimals = 18) => {
  return BigNumber(value.toString()).dividedBy(Math.pow(10, decimals));
};
