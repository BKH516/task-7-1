function findMaxMin() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var num3 = parseInt(document.getElementById('num3').value);

    var max = Math.max(num1, num2, num3);
    var min = Math.min(num1, num2, num3);

    document.getElementById('result').innerHTML =
     "<div class='result-display'>العدد الأكبر هو: <span class='max'>" + max + "</span><br>العدد الأصغر هو: <span class='min'>" + min + "</span></div>";
}