import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {  LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect ,useState} from "react";

export default function ShowBalance() {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const [balance, setBalance] = useState(0);
  useEffect(() => {
    if (!connection || !publicKey) {
      return;
    }
    const getBalance = async () => {
      try {
        console.log(`balance updated`);
        const num = await connection.getBalance(publicKey);
        setBalance(num / LAMPORTS_PER_SOL);
      } catch (e) {
        console.error(`${e}`);
      } 
    };
    getBalance();
  }, [connection, publicKey]);

  return (
    <>
      {publicKey ? (
        <p>
          Wallet:{publicKey?.toBase58()}
          <br />
          Balance:{balance} SOL;
        </p>
      ) : (
        <p>Connect your wallet</p>
      )}
    </>
  );
}
