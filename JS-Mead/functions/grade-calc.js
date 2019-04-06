const gradeCalc = (score, totalScore = 20) => {
  let grade = null;
  let percentage = (score / totalScore) * 100;
  if (percentage <= 20) {
    grade = 'E';
  } else if (percentage <= 40) {
    grade = 'D';
  } else if (percentage <= 60) {
    grade = 'C';
  } else if (percentage <= 80) {
    grade = 'B';
  } else if (percentage <= 100) {
    grade = 'A';
  }
  return `For ${score}, you got a ${grade} (${percentage}%)`;
};

console.log(gradeCalc(17));
// for (score = 60; score <= 100; score++) {
//     console.log(assignGrade(score));
// }
