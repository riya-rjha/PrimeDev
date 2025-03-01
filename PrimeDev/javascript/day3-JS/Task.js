let username = prompt("Enter username: ", "user");
let numberOfSubjects = prompt("Enter number of subjects: ");
let obj = {};
for (let i = 0; i < numberOfSubjects; i++) {
    let subject = prompt("Enter subject name: ");
    let subjectMarks = prompt("Enter subject marks: ");
    obj[subject] = Number(subjectMarks);
}

let totalMarks = 0;
// Accessing values - for-in
for (let key in obj) {
    totalMarks += obj[key];
}
console.log("Percentage: ", totalMarks / numberOfSubjects);

let maxMarks = 0;
let maxMarksSubject;

// Accessing keys and values - for-in
for (let subject in obj) {
    if (obj[subject] > maxMarks) {
        maxMarks = obj[subject];
        maxMarksSubject = subject;
    }
}

console.log("Maximum marks scored in: " + maxMarksSubject + " & Score: " + maxMarks);

// Grades
console.log(obj);

let grade;

console.log("Grades: ");

for (let key in obj) {
    let sub = key;
    let subMarks = obj[key];
    if (subMarks > 90 && subMarks <= 100) {
        grade = 'A';
    } else if (subMarks > 80 && subMarks <= 90) {
        grade = 'B';
    }
    else if (subMarks > 70 && subMarks <= 80) {
        grade = 'C';
    }
    else if (subMarks > 60 && subMarks <= 70) {
        grade = 'D';
    }
    else {
        grade = 'F';
    }
    console.log("Subject: " + sub + " & Grade: " + grade);
}