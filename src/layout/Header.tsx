import Icon from "../components/Icon";
import { useWallet } from "../contexts/WalletContext";
import ConnectButton from "../components/ConnectButton";

export default function Header() {
  const { isConnected, account } = useWallet();

  return (
    <header className="flex h-16 w-full px-20 items-center justify-between">
      <div className="flex px-6 py-3 w-1/3 bg-[#1C2940] rounded-full gap-4 items-center">
        <Icon icon="search" className="header-icon" />
        <input
          className="bg-transparent outline-none w-full"
          type="search"
          placeholder="Rechercher une transaction"
        />
      </div>

      {isConnected ? account : <ConnectButton />}
    </header>
  );
}
