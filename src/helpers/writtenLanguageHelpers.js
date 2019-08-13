import syllable from "syllable";

// TODO: Improve logic so that only a portion of
// the text is evaluated and thus averaged e.g. only first 100 words/sentences/etc

export function countWords(text) {
  return findWords(text).length;
}

export function countAvgLetters(text) {
  const words = findWords(text);
  return words.reduce((res, curr) => {
      res += curr.length;
      return res;
  }, 0) / (words.length || 1);
}

export function findWords(text) {
  return text.match(/([^\u0000-\u007F]|\w)+/g) || [];
}

export function countSentences(text) {
  const match = text.match(/[\w]\)?[.?!](\s|$)/g) || [];
  return match.length;
}

export function countHardWords(text) {
  const textLower = text.toLowerCase();
  let count = 0;

  findWords(textLower).forEach(word => {
    if (syllable(word) >= 3) {
      count += 1;
    }
  })

  return count;
}

export function countSyllables(text) {
  const textLower = text.toLowerCase();
  let count = 0;

  findWords(textLower).forEach(word=> {
    count += syllable(word);
  })

  return count

}

