 function checkVowel() {
      var char = document.getElementById('charInput').value.toLowerCase();
      var vowels = ['a', 'e', 'i', 'o', 'u'];
      if (vowels.includes(char)) {
          document.getElementById('result').innerText = "Vowel";
      } else {
          document.getElementById('result').innerText = "Consonant";
      }
  }