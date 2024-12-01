import { useWallet } from "../contexts/WalletContext";
import MetaMask from "../assets/wallets/metamask.png";
import Button from "./Button";

export default function ConnectButton() {
  const { connect, isAvailable, isPending } = useWallet();

  return (
    <Button onClick={connect} loading={isPending} disabled={!isAvailable}>
      <img className="w-6" src={MetaMask} alt="MetaMask Icon" />
      Connecter avec MetaMask
    </Button>
  );
}
