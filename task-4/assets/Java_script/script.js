function printEvenNumbers() {
      const num = parseInt(document.getElementById('numberInput').value);
      let output = '';
      if (!isNaN(num)) {
            for (let i = 1; i <= num; i++) {
                  if (i % 2 === 0) {
                        output += i + ', ';
                  }
            }
            // إزالة الفاصلة الأخيرة قبل عرض النتيجة
            document.getElementById('output').innerText = output.slice(0, -2);
      } else {
            document.getElementById('output').innerText = 'Please enter a valid number.';
      }
}