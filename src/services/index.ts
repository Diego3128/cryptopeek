import axios from "axios";
import {
  CryptoCurrenciesResponseSchema,
  CryptoDataResponseSchema,
} from "../schemas";
import { CryptoDataResponse, CryptoResponse, Pair } from "../types";

export const getCryptos = async (): Promise<CryptoResponse[] | undefined> => {
  const limit = 20;
  const currency = "USD";
  const URL = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=${limit}&tsym=${currency}`;
  const {
    data: { Data },
  } = await axios.get(URL);
  const result = CryptoCurrenciesResponseSchema.safeParse(Data);
  if (result.success) {
    // return array of cryptos result.data
    return result.data;
  }
};

export const getCryptoInfo = async (
  pair: Pair
): Promise<CryptoDataResponse | undefined> => {
  const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.cryptoCurrency}&tsyms=${pair.currency}`;
  const {
    data: { DISPLAY },
  } = await axios.get(URL);
  //validate data
  const result = CryptoDataResponseSchema.safeParse(
    DISPLAY[pair.cryptoCurrency][pair.currency]
  );

  if (result.success) {
    // return array of cryptos result.data
    return result.data;
  }
};
