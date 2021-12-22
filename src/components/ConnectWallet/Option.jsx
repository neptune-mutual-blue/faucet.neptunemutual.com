import Link from "next/link";

export const Option = (props) => {
  const { id, name, iconSrc, onClick } = props;

  if (name.toLowerCase() == "metamask") {
    if (!(window.web3 || window.ethereum)) {
      return (
        <a
          href="https://metamask.io/"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex w-full text-sm mb-5 font-normal text-black-900 bg-white border border-dfdfee rounded-lg focus:border-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
        >
          <img src={iconSrc} className="mx-6 my-4" />
          <p className="py-4 text-base">Install Metamask</p>
        </a>
      );
    }
  }

  if (name.toLowerCase() == "binance chain wallet") {
    if (!window.BinanceChain) {
      return (
        <a
          href="https://docs.binance.org/smart-chain/wallet/binance.html"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex w-full text-sm mb-5 font-normal text-black-900 bg-white border border-dfdfee rounded-lg focus:border-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
        >
          <img src={iconSrc} className="mx-6 my-4" />
          <p className="py-4 text-base">Install Binance Wallet</p>
        </a>
      );
    }
  }

  return (
    <button
      key={id}
      onClick={onClick}
      type="button"
      className="inline-flex w-full text-sm mb-5 font-normal text-black-900 bg-white border border-dfdfee rounded-lg focus:border-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
    >
      <img src={iconSrc} className="mx-6 my-4" />
      <p className="py-4 text-base">{name}</p>
    </button>
  );
};
