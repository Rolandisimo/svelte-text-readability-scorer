import {
  countSentences,
  countWords,
  countHardWords,
} from "../helpers/writtenLanguageHelpers";

export const MIN_GUNNING_FLOG = 0;
export const MAX_GUNNING_FLOG = 30;

const scoreToLevelMap = {
  20:	"Post-graduate Plus",
  19:	"Post-graduate",
  18:	"Post-graduate",
  17:	"College graduate",
  16:	"College senior",
  15:	"College junior",
  14:	"College sophomore",
  13:	"College freshman",
  12:	"High school senior",
  11:	"High school junior",
  10:	"High school sophomore",
  9:	"High school freshman",
  8:	"Eighth grade",
  7:	"Seventh grade",
  6:	"Sixth grade",
}

export class GunningFlogScorer {
  static calculate(text) {
    if (!text) {
      return MIN_GUNNING_FLOG;
    }

    const words = countWords(text) || 1;
    const sentences = countSentences(text) || 1;
    const asl = words / sentences;
    const phw = 100 * (countHardWords(text) / words);
    let score = 0.4 * (asl + phw)

    if (score > MAX_GUNNING_FLOG) {
      score = MAX_GUNNING_FLOG;
    } else if(score < MIN_GUNNING_FLOG) {
      score = MIN_GUNNING_FLOG;
    }

    return score;
  }
  static scoringLevel(score) {
    const integerScore = parseInt(score);
    const scores = Object.keys(scoreToLevelMap);
    const minScore = scores[0];
    const maxScore = scores[scores.length - 1];

    if (integerScore < minScore) {
      return "";
    };

    if (score > maxScore) {
      return scoreToLevelMap[maxScore]
    } else if (score < minScore) {
      return scoreToLevelMap[minScore]
    }

    return scoreToLevelMap[integerScore]
  }
}
