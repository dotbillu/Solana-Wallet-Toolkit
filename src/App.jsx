import Airdrop from "./components/requestAirdrop.jsx";
import Balance from "./components/showBalance.jsx"
import { SendTokens } from "./components/SendTokens.jsx";
import React, { FC, useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";
import "@solana/wallet-adapter-react-ui/styles.css";

import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";

function App() {
  const endpoint = "https://api.devnet.solana.com";
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div className="flex justify-start">
            <div className="p-3 pr-1">
              <WalletMultiButton />
            </div>
            <div className="p-3 pl-1">
              <WalletDisconnectButton />
            </div>
          </div>
          <div >
            {/* <Airdrop /> */}
            {/**/}
            {/* <Balance/>  */}
            <SendTokens/>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
