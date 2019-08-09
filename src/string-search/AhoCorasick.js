import AhoCorasickAlgo from "ahocorasick";
import { StringSearch } from "./StringSearch";

export class AhoCorasick extends StringSearch {
  constructor({
    positivePatterns,
    negativePatterns,
  }) {
    super();

    this.positivePatterns = new AhoCorasickAlgo(positivePatterns);
    this.negativePatterns = new AhoCorasickAlgo(negativePatterns);
  }

  search(value) {
    const val = value.toLowerCase();

    return {
      positiveMatches: this.positivePatterns.search(val).length,
      negativeMatches: this.negativePatterns.search(val).length,
    }
  }
}
