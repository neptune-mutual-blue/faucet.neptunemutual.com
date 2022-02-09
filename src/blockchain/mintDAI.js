import { ethers } from 'ethers'
import { Contract } from "@ethersproject/contracts";
import { getProviderOrSigner } from "@/lib/connect-wallet/utils/web3";

const getContract = async (tokenAddress,provider) => {
  const at = tokenAddress
  const abi = ['function mint(uint256 amount)']
  return new ethers.Contract(at, abi, provider)
}

export const mintDAI = async (tokenAddress,provider) => {
  try {
    
    const contract = await getContract(tokenAddress,provider)
    const tx = await contract.mint('100000000000000000000000')

    return tx
    
    // const result = await tx.wait()
    // console.info('Tx', result)
  } catch (error) {
    console.error(error.message)
  }
}


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

  const tx = await mintDAI(tokenAddress, signerOrProvider)
  return tx;
};
