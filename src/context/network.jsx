import { createContext, useContext, useState } from "react";

const initialValue = "80001";

const NetworkContext = createContext({
  network: initialValue,
  setNetwork: (_value) => {},
});

export const useNetwork = () => {
  const context = useContext(NetworkContext);

  if (!context) {
    console.error("Use Context inside the Provider");
  }

  return context;
};

export const NetworkProvider = ({ children }) => {
  const [network, setNetwork] = useState(initialValue);

  return (
    <NetworkContext.Provider value={{ network, setNetwork }}>
      {children}
    </NetworkContext.Provider>
  );
};
