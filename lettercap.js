function letterCap(str) {
  str = str.split(' ');
  for (var i = 0; i < str.length; i++) {
    var j = str[i].charAt(0).toUpperCase();
    str[i] = j + str[i].substr(1);
  }
  return str.join(' ');
}
console.log(letterCap('hello this is dog'));
