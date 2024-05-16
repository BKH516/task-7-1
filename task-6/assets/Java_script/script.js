function calculateGrade() {
    
    const physics = parseFloat(document.getElementById('physics').value);
    const chemistry = parseFloat(document.getElementById('chemistry').value);
    const biology = parseFloat(document.getElementById('biology').value);
    const mathematics = parseFloat(document.getElementById('mathematics').value);
    const computer = parseFloat(document.getElementById('computer').value);


    const totalMarks = physics + chemistry + biology + mathematics + computer;
    const percentage = (totalMarks / 500) * 100;


    let grade;
    if (percentage >= 90) {
        grade = 'A';
    } else if (percentage >= 80) {
        grade = 'B';
    } else if (percentage >= 70) {
        grade = 'C';
    } else if (percentage >= 60) {
        grade = 'D';
    } else if (percentage >= 40) {
        grade = 'E';
    } else {
        grade = 'F';
    }

    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `Percentage: ${percentage.toFixed(2)}%<br>Grade: ${grade}`;
}