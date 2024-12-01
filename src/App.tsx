import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./layout/Header";
import SideBar from "./layout/SideBar";
import DashboardPage from "./pages/DashBoardPage";
import WalletPage from "./pages/WalletPage";
import StakePage from "./pages/StakePage";
import HistoryPage from "./pages/HistoryPage";
import { WalletProvider } from "./contexts/WalletContext";

function App() {
  return (
    <Router>
      <WalletProvider>
        <div className="flex w-2/3">
          <SideBar />
          <div className="flex flex-col w-full">
            <Header />
            <div className="p-14">
              <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/wallet" element={<WalletPage />} />
                <Route path="/stake" element={<StakePage />} />
                <Route path="/history" element={<HistoryPage />} />
              </Routes>
            </div>
          </div>
        </div>
      </WalletProvider>
    </Router>
  );
}

export default App;
