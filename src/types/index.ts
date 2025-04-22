import { z } from "zod";
import {
  CryptoCurrencyResponseSchema,
  CryptoDataResponseSchema,
  CurrencySchema,
  PairSchema,
} from "../schemas";

export type CurrencyType = z.infer<typeof CurrencySchema>;

export type CryptoResponse = z.infer<typeof CryptoCurrencyResponseSchema>;

export type Pair = z.infer<typeof PairSchema>;

export type CryptoDataResponse = z.infer<typeof CryptoDataResponseSchema>;
