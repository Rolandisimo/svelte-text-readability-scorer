export const gradeDescriptionMap = (grade) => {
  if (grade > 75) {
    return { text: "Excellent", color: "#2ecc71" };
  }
  if (grade > 50) {
    return { text: "Good", color: "#f1c40f" };
  }
  if (grade > 25) {
    return { text: "Bad", color: "#f39c12" };
  }
  if (grade >= 0) {
    return { text: "Poor", color: "#e74c3c" };
  }
}
