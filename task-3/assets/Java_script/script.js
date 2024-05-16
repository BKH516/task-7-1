function generateTable() {
      var num = parseInt(document.getElementById('numberInput').value);
      if (!isNaN(num)) {
          var table = '<table>';
          table += '<tr><th>Number</th><th>Result</th></tr>';
          for (var i = 1; i <= 12; i++) {
              table += '<tr><td>' + num + ' x ' + i + '</td><td>' + num * i + '</td></tr>';
          }
          table += '</table>';
          document.getElementById('multiplicationTable').innerHTML = table;
      } else {
          document.getElementById('multiplicationTable').innerHTML = '<p>Please enter a valid integer.</p>';
      }
  }