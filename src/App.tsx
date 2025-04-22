import { useEffect } from "react";
import { CryptoSearchForm } from "./components/CryptoSearchForm";
import { useCryptoStore } from "./stores/crypto-store";
import { CryptoDetailsDisplay } from "./components/CryptoDetailsDisplay";
import { Spinner } from "./components/Spinner";

export const App = () => {
  const fetchCryptos = useCryptoStore((state) => state.fetchCryptos);
  const isLoading = useCryptoStore((state) => state.isLoading);

  useEffect(() => {
    fetchCryptos();
  }, []);

  return (
    <div className="container">
      <h1 className="app-title">
        CryptoPeek <span>Tracker</span>
      </h1>

      <div className="content">
        {/* form and result*/}
        <CryptoSearchForm />
        <CryptoDetailsDisplay/>

        {isLoading && <Spinner/>}
      </div>
    </div>
  );
};
