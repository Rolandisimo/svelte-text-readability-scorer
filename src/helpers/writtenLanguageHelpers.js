import syllable from "syllable";

export function countWords(text) {
  return findWords(text).length || 1;
}

export function findWords(text) {
  return text.match(/([^\u0000-\u007F]|\w)+/g) || [];
}

export function countSentences(text) {
  const match = text.match(/[\w]\)?[.?!](\s|$)/g) || [];
  return match.length || 1;
}

export function countHardWords(text) {
  const textLower = text.toLowerCase();
  let count = 0;

  findWords(textLower).forEach(word => {
    if (countWordSyllables(word) >= 3) {
      count += 1;
    }
  })

  return count;
}

export function countSyllables(text) {
  const textLower = text.toLowerCase();
  let count = 0;

  findWords(textLower).forEach(word=> {
    count += countWordSyllables(word);
  })

  return count

}

function countWordSyllables(originalWord) {
  return syllable(originalWord)
}
