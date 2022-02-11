import { Contract } from "@ethersproject/contracts";
import { getProviderOrSigner } from "@/lib/connect-wallet/utils/web3";
import FakeTokenABI from "./abis/FakeTokenABI.json";

export const fetchFakeTokenBalance = async (
  tokenAddress,
  library,
  account,
  networkId
) => {
  const signerOrProvider = getProviderOrSigner(library, account, networkId);

  if (!signerOrProvider) {
    console.log("No provider found");
  }

  const instance = new Contract(tokenAddress, FakeTokenABI, signerOrProvider);

  if (!instance) {
    console.log("No instance found");
  }

  const result = await instance.balanceOf(account);
  return result.toString();
};
