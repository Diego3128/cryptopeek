import { z } from "zod";

export const CurrencySchema = z.object({
  code: z.string(),
  name: z.object({
    en: z.string(),
    es: z.string(),
  }),
});

export const CryptoCurrencyResponseSchema = z.object({
  CoinInfo: z.object({
    Name: z.string(),
    FullName: z.string(),
  }),
});

export const CryptoCurrenciesResponseSchema = z.array(
  CryptoCurrencyResponseSchema
);

export const PairSchema = z.object({
  currency: z.string(),
  cryptoCurrency: z.string(),
});

// validate crypto data
export const CryptoDataResponseSchema = z.object({
  HIGHDAY: z.string(),
  LOWDAY: z.string(),
  CHANGEPCT24HOUR: z.string(),
  LASTUPDATE: z.string(),
  IMAGEURL: z.string(),
  PRICE: z.string(),
});
