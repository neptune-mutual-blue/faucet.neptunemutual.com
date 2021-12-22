import { useWeb3React } from "@web3-react/core";

export const ConnectedAccount = () => {
  const { account } = useWeb3React();

  if (!account) {
    return null;
  }

  return (
    <>
      <h2>Connected Account</h2>
      <p>{account}</p>
    </>
  );
};
