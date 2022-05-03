function printWord(str, s) {
  for (var i = 0; i < str.length; i++) {
    if (s.indexOf(str[i]) < 0) {
      return;
    }
  }
  document.write(str);
  document.write('<br>');
}

// Function to find the words
function findWord(str1, str2) {
  var s = '';
  for (var i in str2) {
    s += str2[i];
  }
  for (var i = 0; i < str1.length; i++) {
    printWord(str1[i], s);
  }
}

var str1 = [
  'hair',
  'year',
  'road',
  'tale',
  'food',
  'map',
  'ear',
  'poet',
  'hall',
  'sir',
  'menu',
  'son',
  'art',
  'exam',
  'city',
  'ad',
  'goal',
  'gene',
  'way',
  'math',
  'dirt',
  'loss',
  'debt',
  'dad',
  'mall',
  'love',
  'fact',
  'town',
  'king',
  'oven',
  'song',
  'lady',
  'area',
  'mode',
  'girl',
  'gate',
  '	bird',
  'poem',
  'mom',
  'news',
  'meat',
  'desk',
  'bath',
  'wife',
  'data',
  'wood',
  'unit',
  'idea',
  'lab',
];
var char = 'utineslukrtameswen';
var str2 = char.split(',');
findWord(str1, str2);
