import { useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
export default function airdrop() {
  const [amount, setAmount] = useState("");
  const wallet = useWallet();
  const { publicKey } = useWallet();

  const { connection } = useConnection();

  async function requestAirDrop() {
    const num = parseInt(amount);
    setAmount("");
    if (num < 0 || Number.isNaN(num)) {
      alert("not suppported");
      return;
    }
    try {
      await connection.requestAirdrop(publicKey, num * LAMPORTS_PER_SOL);
      alert(`${num}SOL sent to ${wallet.publicKey?.toBase58()}`);
    } catch (e) {
      alert.err();
    }
  }
  return (
    <>
      <div className="flex justify-start p-4">
        <div>
          <input
            type="text"
            placeholder="Amount.."
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            value={amount}
            className="p-3 border border-gray-50"
          ></input>
        </div>
        <div>
          <button
            onClick={requestAirDrop}
            className="p-3  bg-blue-500 border border-gray-100 cursor-pointer"
          >
            AirDrop
          </button>
        </div>
      </div>
    </>
  );
}
