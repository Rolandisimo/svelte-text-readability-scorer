import syllable from "syllable";
import { ABBREVIATION_TRANSLATIONS } from "./abbreviations";

// TODO: Improve logic so that only a portion of
// the text is evaluated and thus averaged e.g. only first 100 words/sentences/etc

export class TextAnalyzer {
  constructor(text) {
    this.text = this.cleanTextFromAbbreviations((text || "").toLowerCase());
    this.words = this.findWords(this.text) || []
  }

  wordCount() {
    return this.words.length;
  }

  countAvgLetters() {
    return this.words.reduce((res, curr) => {
        res += curr.length;
        return res;
    }, 0) / (this.wordCount() || 1);
  }

  mapThroughText() {
    let hardWordCount = 0;
    let syllableCount = 0;

    this.words.forEach(word => {
      const syllables = syllable(word);
      syllableCount += syllables;

      if (syllables >= 3) {
        hardWordCount += 1;
      }
    })

    return {
      hardWordCount,
      syllableCount,
    }
  }

  cleanTextFromAbbreviations(text) {
    return text.trim().split(" ").map((word) => {
      return ABBREVIATION_TRANSLATIONS[word] || word;
    }).join(" ");
  }

  findWords() {
    return this.text.match(/([^\u0000-\u007F]|\w)+/g) || [];
  }

  countSentences() {
    const match = this.text.match(/[\w\"\'\)\.]?[.?!](\s|$)/g) || [];
    return match.length;
  }
}
