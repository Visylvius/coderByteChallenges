function vowelCount(str) {
  var counter = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i].match(/[aeiou]/ig)) {
      counter ++;
    }
  }
  console.log('this string has ' + counter + ' vowels');
  return str;
}

console.log(vowelCount('hello thIs is dOg'));
