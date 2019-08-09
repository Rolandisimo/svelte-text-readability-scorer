import { gradeDescriptionMap } from "../helpers/gradeDescriptionMap";

export class Grader {
  constructor(algorithm) {
    if (!algorithm) {
      throw new Error("Algorithm must be passed");
    }
    this.algorithm = algorithm;
  }

  grade(value) {
    if (!value) {
      return 0;
    }

    const matches = this.algorithm.search(value);
    const positiveMatches = matches.positiveMatches || 1;
    const negativeMatches = matches.negativeMatches;

    return Math.min(
      negativeMatches > positiveMatches ? 0 : Infinity,
      +(Math.abs(positiveMatches - negativeMatches) / positiveMatches) * 100,
      100,
    );
  }

  formatGrade(grade) {
    const { color, text } = gradeDescriptionMap(grade);
    return `<span style="color: ${color};">${text} - ${grade.toFixed(2)}%</span>`
  }
}
