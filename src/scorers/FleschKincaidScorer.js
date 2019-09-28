
export const MAX_FLESC_KINCAID = 100;
export const MIN_FLESC_KINCAID = 0;

export class FleschKincaidScorer {
  static calculate({ text, words, asl, syllableCount }) {
    if (!text) {
      return MAX_FLESC_KINCAID;
    }

    const asw = syllableCount / words;
    let score = 206.835 - (1.015 * asl) - (84.6 * asw);

    if (score > MAX_FLESC_KINCAID) {
      score = MAX_FLESC_KINCAID;
    } else if(score < MIN_FLESC_KINCAID) {
      score = MIN_FLESC_KINCAID;
    }

    return score;
  }
}
