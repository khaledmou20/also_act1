let lastName = ['mohamed', 'ahmed', 'mahmoud', 'ali'];
function FirstLetter(item) {
  if (item.substring(0,1) == 'M') {
    return lastName;
  }
}

console.log(lastName.filter(FirstLetter)); 
