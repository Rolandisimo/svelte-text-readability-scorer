export const MAX_AUTOMATED_READABILITY = 14;
export const MIN_AUTOMATED_READABILITY = 1;

export class AutomatedReadabilityIndex {
  static calculate({ text, words, sentences, anl }) {
    if (!text) {
      return MIN_AUTOMATED_READABILITY;
    }

    const aws = words / sentences;
    let score = 4.71 * anl + 0.5 * aws - 21.43;

    if (score > MAX_AUTOMATED_READABILITY) {
      score = MAX_AUTOMATED_READABILITY;
    } else if(score < MIN_AUTOMATED_READABILITY) {
      score = MIN_AUTOMATED_READABILITY;
    }

    return score;
  }
}
