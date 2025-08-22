import { useContext } from "react";
import { AmountContext, CurrencyContext } from "../App";
import { CURRENCIES } from "../Utils/CurrencyUtil";

const Paypal = () => {
  const currency = useContext(CurrencyContext);
  const amount = useContext(AmountContext);

  return (
    <>
      <p>
        {currency.currency}, {amount.amount} ={" "}
        {amount.amount * CURRENCIES[currency.currency]} RSD
      </p>
    </>
  );
};

export default Paypal;
