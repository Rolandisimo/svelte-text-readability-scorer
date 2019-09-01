export const MIN_COLEMAN_LIAU_INDEX = 0;
export const MAX_COLEMAN_LIAU_INDEX = 30;

export class ColemanLiauScorer {
  static calculate({ text, words, sentences, anl }) {
    if (!text) {
      return MIN_COLEMAN_LIAU_INDEX;
    }

    const ans = sentences / words;
    let score = (5.89 * anl) - (0.296 * ans) - 15.8;

    if (score > MAX_COLEMAN_LIAU_INDEX) {
      score = MAX_COLEMAN_LIAU_INDEX;
    } else if(score < MIN_COLEMAN_LIAU_INDEX) {
      score = MIN_COLEMAN_LIAU_INDEX;
    }

    return score;
  }
}
