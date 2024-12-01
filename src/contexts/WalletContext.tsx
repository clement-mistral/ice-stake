import {
  createContext,
  type Dispatch,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { ethers } from "ethers";

// Définir les types
interface WalletContextType {
  connect: () => Promise<void>;
  disconnect: () => void;
  account: string | null;
  balance: string | null;
  isPending: boolean;
  isAvailable: boolean;
  setIsPending: Dispatch<React.SetStateAction<boolean>>;
  isConnected: boolean;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

type WalletProviderProps = {
  children: ReactNode;
};

// WalletProvider : Fournit le contexte
export function WalletProvider({ children }: WalletProviderProps) {
  const [account, setAccount] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);

  const [isPending, setIsPending] = useState<boolean>(false);
  const [isAvailable, setIsAvailable] = useState<boolean>(false);
  const [isConnected, setIsConnected] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window.ethereum === "undefined") {
      setIsAvailable(false);
    } else {
      setIsAvailable(true);
      const web3provider = new ethers.BrowserProvider(window.ethereum);
      setProvider(web3provider);
    }
  }, []);

  useEffect(() => {
    checkConnection().then(() => {});
  });

  const checkConnection = async () => {
    if (!provider) return;
    const accounts = await provider.send("eth_accounts", []);
    if (accounts.length < 0) {
      setIsConnected(false);
      return;
    }
    setAccount(accounts[0]);
    setIsConnected(true);
  };

  const connect = async () => {
    setIsPending(true);
    if (typeof window.ethereum === "undefined")
      throw new Error("MetaMask is not installed");

    if (!provider) throw new Error("Il y a eu une erreur");

    provider
      .send("eth_requestAccounts", [])
      .then(async (accounts) => {
        if (accounts < 0) throw new Error("Il y a une erreur");
        setAccount(accounts[0]);
        setIsConnected(true);
        const rawBalance = await provider.getBalance(accounts[0]);
        const formattedBalance = ethers.formatEther(rawBalance);
        setBalance(formattedBalance);
      })
      .catch((_) => {
        console.error("Il y a une erreur");
      })
      .finally(() => {
        setIsPending(false);
      });
  };

  const disconnect = () => {
    setAccount(null);
    setBalance(null);
    setProvider(null);
  };

  return (
    <WalletContext.Provider
      value={{
        connect,
        disconnect,
        account,
        balance,
        isAvailable,
        isPending,
        setIsPending,
        isConnected,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

// Hook personnalisé pour utiliser le contexte
export const useWallet = (): WalletContextType => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
};
