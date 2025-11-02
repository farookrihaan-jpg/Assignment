// Create a 2D array of students' names and marks
const students = [
  ["Rihaan", 85],
  ["kishore", 72],
  ["aarthi", 90],
  ["harini", 77],
  ["dharshika",87]
];
for (let i = 0; i < students.length; i++) {
  const name = students[i][0]; 
  const marks = students[i][1]; 
  console.log("name: " , name+   ", marks: ", marks);
}