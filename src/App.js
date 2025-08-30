import { createContext, useReducer, useState } from "react";
import "./App.css";
import Payment from "./Components/Payment";
import { CURRENCIES } from "./Utils/CurrencyUtil";
import { initialUserState, userReducer } from "./Reducers/User";

export const CurrencyContext = createContext("USD");
export const AmountContext = createContext(0);

function App() {
  const [userState, dispatch] = useReducer(userReducer, initialUserState);
  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState(0);

  const updateCurrency = (currency) => {
    setCurrency(currency);
  };

  const updateAmount = (value) => {
    setAmount(value);
  };

  const saveUser = () => {
    if (
      userState.userName === null ||
      userState.userName.trim() === "" ||
      userState.money === null ||
      isNaN(userState.money)
    ) {
      return;
    }
    dispatch({ type: "SET_USER_CREATED", payload: true });
  };
  return (
    <div>
      <CurrencyContext.Provider value={{ currency, updateCurrency }}>
        <AmountContext.Provider value={{ amount, updateAmount }}>
          <Payment />
        </AmountContext.Provider>
        <input onInput={(e) => updateAmount(e.target.value)} />
        {!userState.isUserCreated && (
          <form>
            <input
              placeholder="enter your Username"
              onInput={(e) =>
                dispatch({ type: "SET_USERNAME", payload: e.target.value })
              }
            />
            <input
              placeholder="enter your money"
              onInput={(e) =>
                dispatch({ type: "SET_MONEY", payload: e.target.value })
              }
            />
            <button type="button" onClick={saveUser}>
              Generate User
            </button>
          </form>
        )}
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
