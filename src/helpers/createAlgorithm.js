import { MATCHES } from "../consts";
import { CONFIG } from "../config";

export const createAlgorithm = () => {
  return new CONFIG.algorithm({
    negativePatterns: MATCHES.BAD,
    positivePatterns: MATCHES.GOOD,
  })
}
