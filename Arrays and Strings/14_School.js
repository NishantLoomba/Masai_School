let studentScores = [45, 38, 95, 62, 30, 85, 92, 28, 75, 65];
for (let i = 0; i < studentScores.length; i++) {
    if (studentScores[i] < 40) {
        studentScores[i] += 20;
    } else if (studentScores[i] > 90) {
        studentScores[i] = 90;
    }
}
let passedCount = studentScores.filter(score => score >= 50).length;
console.log("No. of students who passed:", passedCount);
console.log("Final adjusted scores:", studentScores);

