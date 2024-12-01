import { useState } from "react";
import ButtonWidget from "../components/ButtonWidget";
import Widget from "../components/Widget";
import Modal from "../layout/Modal";
import PageLayout from "../layout/Page";
import { Loader } from "../components/Icon";
import { useWallet } from "../contexts/WalletContext";

export default function DashboardPage() {
  const [sendModalOpen, setSendModalOpen] = useState(false);
  const [receiveModalOpen, setReceiveModalOpen] = useState(false);

  const { balance } = useWallet();

  return (
    <PageLayout title="Tableau de bord">
      <div className="flex items-center gap-10 w-full">
        <Widget
          className="w-1/3"
          contentClassName="flex flex-col mt-4"
          title="Solde"
        >
          <span className="text-3xl">
            {balance ? `${balance} ETH` : "No data"}
          </span>
          {/* <p className="text-green-400">+€240.32</p> */}
        </Widget>
        <ButtonWidget
          icon="receive"
          title="Recevoir"
          onClick={() => setReceiveModalOpen(true)}
        />
        <ButtonWidget
          icon="send"
          title="Envoyer"
          onClick={() => setSendModalOpen(true)}
        />
        <Modal
          title="Envoyer des ETH"
          isOpen={sendModalOpen}
          onClose={() => setSendModalOpen(false)}
        >
          Envoyer <Loader />
        </Modal>
        <Modal
          title="Recevoir des ETH"
          isOpen={receiveModalOpen}
          onClose={() => setReceiveModalOpen(false)}
        >
          receive
        </Modal>
      </div>
    </PageLayout>
  );
}
