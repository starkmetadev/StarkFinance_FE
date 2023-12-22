import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Dashboard from "./layout/Dashboard";
import LayoutBuy from "./layout/Buy";
import LayoutStaking from "./layout/Staking";
import LayoutSwap from "./layout/Swap";

import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base, zora } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import "@rainbow-me/rainbowkit/styles.css";
import "./App.css";

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora],
  [
    alchemyProvider({ apiKey: process.env.REACT_APP_ALCHEMY_API_KEY }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  // appName: "My RainbowKit App",
  appName: process.env.REACT_APP_NAME,
  projectId: process.env.REACT_APP_PROJECT_ID,
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider coolMode theme={darkTheme()} chains={chains}>
        <Router>
          <div className="App">
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route exact path="/staking" element={<LayoutStaking />} />
              <Route exact path="/swap" element={<LayoutSwap />} />
              <Route exact path="/buy" element={<LayoutBuy />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
