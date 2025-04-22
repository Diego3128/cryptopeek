import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import { currencies } from "../data";
import { useCryptoStore } from "../stores/crypto-store";
import type { Pair } from "../types";
import { ErrorMessage } from "./ErrorMessage";

const pairDefault = {
  currency: "",
  cryptoCurrency: "",
};

export const CryptoSearchForm = () => {
  const cryptocurrencies = useCryptoStore((state) => state.cryptocurrencies);

  const fetchInformation = useCryptoStore((state) => state.fetchInformation);

  const [pair, setPair] = useState<Pair>(pairDefault);
  const [error, setError] = useState("");
  const validPair = useMemo(() => !Object.values(pair).includes(""), [pair]);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const allowedFileds = ["currency", "cryptoCurrency"];
    const { name, value } = e.target;
    if (!allowedFileds.includes(name)) return;

    setPair((prevPair) => {
      return {
        ...prevPair,
        [name]: value,
      };
    });
  };

  const submitRequest = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validPair) {
      setError("Make sure to choose a currency and crypto.");
      return;
    }
    setError("");
    fetchInformation(pair);
  };

  return (
    <div>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <form className="form" onSubmit={submitRequest}>
        <div className="field">
          <label htmlFor="currency">Currency</label>
          <select
            onChange={handleChange}
            value={pair.currency}
            name="currency"
            id="currency"
          >
            <option value="">choose a currency</option>
            {currencies.map((currency) => (
              <option key={currency.code} value={currency.code}>
                {currency.name.en}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="currency">Crypto</label>
          <select
            onChange={handleChange}
            value={pair.cryptoCurrency}
            name="cryptoCurrency"
            id="crypto_currency"
          >
            <option value="">choose a crypto</option>
            {cryptocurrencies.map((cryptoC) => (
              <option key={cryptoC.CoinInfo.Name} value={cryptoC.CoinInfo.Name}>
                {cryptoC.CoinInfo.FullName}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
