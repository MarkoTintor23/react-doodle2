import { createContext, useState } from "react";
import "./App.css";
import Payment from "./Components/Payment";

export const CurrencyContext = createContext("USD");
export const AmountContext = createContext(0);

function App() {
  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState(0);
  const updateCurrency = () => {
    setCurrency("EUR");
  };

  const updateAmount = (value) => {
    setAmount(value);
  };
  return (
    <div>
      <CurrencyContext.Provider value={{ currency, updateCurrency }}>
        <AmountContext.Provider value={{ amount, updateAmount }}>
          <Payment />
        </AmountContext.Provider>
        <input onInput={(e) => updateAmount(e.target.value)} />
        <button onClick={updateCurrency}>Change currency</button>
      </CurrencyContext.Provider>
    </div>
  );
}

export default App;
