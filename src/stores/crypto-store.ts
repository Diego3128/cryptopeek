import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { CryptoDataResponse, CryptoResponse, Pair } from "../types";
import { getCryptoInfo, getCryptos } from "../services";
export type cryptoStoreType = {};

type CryptoStore = {
  cryptocurrencies: CryptoResponse[];
  cryptoResult: CryptoDataResponse | null;
  isLoading: boolean;
  fetchCryptos: () => Promise<void>;
  fetchInformation: (pair: Pair) => Promise<void>;
};

export const useCryptoStore = create<CryptoStore>()(
  devtools((set) => {
    return {
      cryptocurrencies: [],
      cryptoResult: null,
      isLoading: false,
      fetchCryptos: async () => {
        const cryptos = await getCryptos();
        if (cryptos) {
          set(() => ({ cryptocurrencies: cryptos }));
        }
      },
      fetchInformation: async (pair) => {
        set(() => ({ isLoading: true, cryptoResult: null }));
      
        const cryptoInfo = await getCryptoInfo(pair);
        if (cryptoInfo) {
          set(() => ({ cryptoResult: cryptoInfo }));
        }
        set(() => ({ isLoading: false }));
      },
    };
  })
);
