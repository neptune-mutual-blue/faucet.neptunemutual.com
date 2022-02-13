import { ethers } from "ethers";
import { getProviderOrSigner } from "@/lib/connect-wallet/utils/web3";

const getContract = async (tokenAddress, provider) => {
  const at = tokenAddress;
  const abi = ["function mint(uint256 amount)"];
  return new ethers.Contract(at, abi, provider);
};

export const mintDAI = async (tokenAddress, provider) => {
  try {
    const contract = await getContract(tokenAddress, provider);
    const tx = await contract.mint("100000000000000000000000");
    await tx.wait();
    return tx;
  } catch (error) {
    console.error(error.message);
  }
};

export const requestMockDAI = async (
  tokenAddress,
  library,
  account,
  networkId
) => {
  const signerOrProvider = getProviderOrSigner(library, account, networkId);

  if (!signerOrProvider) {
    console.log("No provider found");
  }

  const tx = await mintDAI(tokenAddress, signerOrProvider);
  await tx.wait();
  return tx;
};
