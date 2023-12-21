import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import MainBoard from "./layout/MainBoard";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base, zora } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import "@rainbow-me/rainbowkit/styles.css";
import "./App.css";

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
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
      <RainbowKitProvider chains={chains}>
        <Router>
          <div className="App">
            <Navbar />
            <Routes>
              <Route exact path="/" element={<MainBoard />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
