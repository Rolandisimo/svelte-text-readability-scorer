import {
  countSentences,
  countWords,
  countHardWords,
} from "../helpers/writtenLanguageHelpers";

export const MIN_GUNNING_FLOG = 0;
export const MAX_GUNNING_FLOG = 30;

export class GunningFlogScorer {
  static calculate(text) {
    if (!text) {
      return MAX_GUNNING_FLOG;
    }

    const words = countWords(text);
    const asl = words / countSentences(text);
    const phw = 100 * (countHardWords(text) / words);
    let score = 0.4 * (asl + phw)

    if (score > MAX_GUNNING_FLOG) {
      score = MAX_GUNNING_FLOG;
    } else if(score < MIN_GUNNING_FLOG) {
      score = MIN_GUNNING_FLOG;
    }

    return score;
  }
}
