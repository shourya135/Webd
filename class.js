let students = [];

// Add Student
function addStudent() {
  let name = document.getElementById("name").value;
  let roll = document.getElementById("roll").value;
  let math = Number(document.getElementById("math").value);
  let science = Number(document.getElementById("science").value);
  let english = Number(document.getElementById("english").value);

  let student = {
    name: name,
    roll: roll,
    math: math,
    science: science,
    english: english
  };

  students.push(student);
  alert("Student Added!");
}

// Total
function calculateTotal(s) {
  return s.math + s.science + s.english;
}

// Average
function calculateAverage(s) {
  return calculateTotal(s) / 3;
}

// Display All
function displayStudents() {
  let output = "";

  for (let s of students) {
    let total = calculateTotal(s);
    let avg = calculateAverage(s).toFixed(2);

    output += `<div class='card'>
      Name: ${s.name} | Roll: ${s.roll}<br>
      Total: ${total} | Average: ${avg}
    </div>`;
  }

  document.getElementById("output").innerHTML = output;
}

// Above 80
function showAbove80() {
  let output = "";

  for (let s of students) {
    let avg = calculateAverage(s);

    if (avg > 80) {
      output += `<div class='card'>
        ${s.name} (Avg: ${avg.toFixed(2)})
      </div>`;
    }
  }

  document.getElementById("output").innerHTML = output || "No students above 80";
}

// Failed Students
function showFailed() {
  let output = "";

  for (let s of students) {
    let avg = calculateAverage(s);

    if (avg < 40) {
      output += `<div class='card'>
        ${s.name} (Avg: ${avg.toFixed(2)})
      </div>`;
    }
  }

  document.getElementById("output").innerHTML = output || "No failed students";
}

// Count Students
function countStudents() {
  document.getElementById("output").innerHTML =
    "Total Students: " + students.length;
}