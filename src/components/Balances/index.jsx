import { MintableToken } from "@/components/Balances/MintableToken";
import { useNetwork } from "@/src/context/network";
import { useWeb3React } from "@web3-react/core";
import { config } from "@neptunemutual/sdk";
import { Contract, Provider } from "ethers-multicall";
import { chunk } from "@/src/utils/arrays";
import { useEffect, useState } from "react";
import { getProviderOrSigner } from "@/lib/connect-wallet/utils/web3";

export const getTokenSymbolAndDecimals = async (
  addresses,
  signerOrProvider
) => {
  const multiCallProvider = new Provider(signerOrProvider.provider);

  await multiCallProvider.init(); // Only required when `chainId` is not provided in the `Provider` constructor

  const calls = [];
  for (let i = 0; i < addresses.length; i++) {
    const address = addresses[i];

    const instance = new Contract(address, config.abis.IERC20Detailed);

    calls.push(instance.symbol(), instance.decimals());
  }

  const result = await multiCallProvider.all(calls);

  return chunk(2, result);
};

export const Balances = ({ addresses }) => {
  const { account, library } = useWeb3React();
  const { network } = useNetwork();
  const [tokenData, setTokenData] = useState({
    npmSymbol: "NPM",
    npmDecimals: 18,
    stablecoinSymbol: "DAI",
    stablecoinDecimals: 6,
  });

  useEffect(() => {
    if (!network || !account || !addresses.NPMToken || !addresses.Stablecoin) {
      return;
    }

    const signerOrProvider = getProviderOrSigner(
      library,
      account,
      parseInt(network, 10)
    );

    getTokenSymbolAndDecimals(
      [addresses.NPMToken, addresses.Stablecoin],
      signerOrProvider
    ).then(([npmData, stablecoinData]) => {
      setTokenData({
        npmSymbol: npmData[0],
        npmDecimals: npmData[1],
        stablecoinSymbol: stablecoinData[0],
        stablecoinDecimals: stablecoinData[1],
      });
    });
  }, [account, addresses, library, network]);

  if (!account || !network) {
    return null;
  }

  return (
    <div className="mt-2">
      <h3 className="text-xs font-bold text-gray-800 font-inter">
        Your Balances
      </h3>
      <table className="w-full mt-2 table-auto">
        <thead></thead>
        <tbody className="divide-y divide-gray-200">
          <MintableToken
            address={addresses.Stablecoin}
            symbol={tokenData.stablecoinSymbol}
            decimals={tokenData.stablecoinDecimals}
          />
          <MintableToken
            address={addresses.NPMToken}
            symbol={tokenData.npmSymbol}
            decimals={tokenData.npmDecimals}
          />
        </tbody>
      </table>
    </div>
  );
};
