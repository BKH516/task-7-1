document.getElementById('gradesForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let total = 0;
    let valid = true;
    for (let i = 1; i <= 5; i++) {
        let mark = parseFloat(document.getElementById('subject' + i).value);
        if (mark > 100) {
            alert(`العلامة للمادة ${i} يجب أن لا تتجاوز 100`);
            valid = false;
            break;
        }
        total += mark;
    }
    
    if (valid) {
        let average = total / 5;
        let percentage = (total / 500) * 100;
        
        document.getElementById('total').textContent = total.toFixed(2);
        document.getElementById('average').textContent = average.toFixed(2);
        document.getElementById('percentage').textContent = percentage.toFixed(2);
    }
});