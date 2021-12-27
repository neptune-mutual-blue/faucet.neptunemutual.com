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
          className="inline-flex w-full text-sm mb-5 font-normal text-black bg-white border border-d4dfee rounded-lg focus:border-4e7dd9 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-4e7dd9"
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
          className="inline-flex w-full text-sm mb-5 font-normal text-black bg-white border border-d4dfee rounded-lg focus:border-4e7dd9 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-4e7dd9"
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
      className="inline-flex w-full text-sm mb-5 font-normal text-black bg-white border border-d4dfee rounded-lg focus:border-4e7dd9 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-4e7dd9"
    >
      <img src={iconSrc} className="mx-6 my-4" />
      <p className="py-4 text-base">{name}</p>
    </button>
  );
};
