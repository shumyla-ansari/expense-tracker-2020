import React, { useContext } from "react";
import { transactionContext } from "./context";
//import TotalTransactions from './TotalTransactions'

export default function Balance() {
  const { state } = useContext(transactionContext);
  const balance = state
    .map((value) => value.amountNum)
    .reduce((acc, value) => (acc += value), 0);

  return (
    <div className='heading'>
      <h2 className='balance'>BALANCE: </h2>
      <h2 className={balance < 0 ? "credit" : "debit"}>${balance}</h2>
    </div>
  );
}
