import { useContext } from "react";
import { AmountContext, CurrencyContext } from "../App";

const Paypal = () => {
  const currency = useContext(CurrencyContext);
  const value = useContext(AmountContext);
  console.log(currency, value);

  return (
    <>
      <p>ovde je nista</p>
    </>
  );
};

export default Paypal;
