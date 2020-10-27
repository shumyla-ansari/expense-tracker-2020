import React, { useContext } from "react";
import { transactionContext } from "./context";
import Divider from "@material-ui/core/Divider";

export default function TotalTransactions() {
  const { state } = useContext(transactionContext);

  const amounts = state.map((value) => value.amountNum);
  console.log(amounts);
  const income = amounts
    .filter((value) => value > 0)
    .reduce((acc, value) => (acc += value), 0)
    .toFixed(2);
  console.log(income);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className='heading'>
      <h3 className='totalincome'>Total Income</h3>
      <h3 className='totalincome'>${income}</h3>
      <Divider orientation='vertical' flexItem />
      <h3 className='totalexpense'>Total Expense</h3>
      <h3 className='totalexpense'>${expense}</h3>
    </div>
  );
}
