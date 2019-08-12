import {
  countSentences,
  countSyllables,
  countWords,
} from "../helpers/writtenLanguageHelpers";

export const MAX_FLESC_KINCAID = 100;
export const MIN_FLESC_KINCAID = 0;

export class FleschKincaidScorer {
  static calculate(text) {
    if (!text) {
      return MAX_FLESC_KINCAID;
    }

    const words = countWords(text) || 1;
    const sentences = countSentences(text) || 1;
    const asl = words / sentences;
    const asw = countSyllables(text) / words;
    let score = 206.835 - (1.015 * asl) - (84.6 * asw);

    if (score > MAX_FLESC_KINCAID) {
      score = MAX_FLESC_KINCAID;
    } else if(score < MIN_FLESC_KINCAID) {
      score = MIN_FLESC_KINCAID;
    }

    return score;
  }
}
