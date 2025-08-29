import { createContext, useState } from "react";
import "./App.css";
import Payment from "./Components/Payment";
import { CURRENCIES } from "./Utils/CurrencyUtil";

export const CurrencyContext = createContext("USD");
export const AmountContext = createContext(0);

function App() {
  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState(0);
  const [userName, setUserName] = useState(null);
  console.log(userName);
  const updateCurrency = (currency) => {
    setCurrency(currency);
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
        <input
          placeholder="enter your Username"
          onInput={(e) => setUserName(e.target.value)}
        />
        <select onChange={(e) => updateCurrency(e.target.value)}>
          {Object.keys(CURRENCIES).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </CurrencyContext.Provider>
    </div>
  );
}

export default App;
