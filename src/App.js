import React, { useReducer } from "react";
import reducers from "./components/reducers";
import { transactionContext } from "./components/context";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Transaction from "./components/Transaction";
import AddTransaction from "./components/AddTransaction";
import TotalTransactions from "./components/TotalTransactions";
import Balance from "./components/Balance";


function App() {

  const list = [];

  const [state, dispatch] = useReducer(reducers, list);

  return (
    <div>
      <transactionContext.Provider value={{ state, dispatch }}>
        <header className='App-header'>
          <Header />
        </header>
        <Balance />
        <TotalTransactions />

        {state.map((prevValue, index) => (
          <Transaction
            key={index}
            id={index}
            itemName={prevValue.itemName}
            amountNum={prevValue.amountNum}
            dispatch={dispatch}
            state={state}
          />
        ))}
        <AddTransaction />

        <footer className='App-footer'>
          <Footer />
        </footer>
      </transactionContext.Provider>
    </div>
  );
}

export default App;
