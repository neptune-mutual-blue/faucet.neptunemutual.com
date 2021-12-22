import Link from "next/link";

export const Disclaimer = () => {
  return (
    <div className="mt-2">
      <p className="text-sm text-black-500 leading-5 mt-6">
        By connecting a wallet, you agree to Neptune Mutual
        <a className="text-blue-400 font-medium" href="#">
          {" "}
          Terms &amp; Conditions{" "}
        </a>
        and acknowledge that you have read and understand the Neptune Mutual
        <a className="text-blue-400 font-medium" href="#">
          {" "}
          Protocol Disclaimer
        </a>
        .
      </p>
    </div>
  );
};
