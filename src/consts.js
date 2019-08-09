/**
 * Lists of good and bad words and word
 * combinations.
 */
export const MATCHES = {
  GOOD: [
    "https://",
    "www.",
    "net",
    "hope you are well",
    "best regards",
    "kind regards",
  ].map(v => v.toLowerCase()),
  BAD: [
    "perfect match",
    "Competitive compensation package",
    "Competitive package",
    "perfect person",
    "your profile is a good reflection of those values",
    "good fit",
    "your profile and I love it",
    "open to having a quick",
  ].map(v => v.toLowerCase()),
};
