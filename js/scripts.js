$(document).ready(function() {
  let sentence = prompt("Enter sentence here.");
  let start = sentence.slice(0,1);
  let end = sentence.slice(-1);
  let total =  end + start;
  let capital = total.toUpperCase();
  let scramble = sentence.concat(capital);
  function getMiddle(sentence){
    let position;
    let length;

    if(sentence.length % 2 == 1) {
      position = sentence.length / 2;
      length = 1;
    } else {
      position = sentence.length / 2 - 1;
      length = 2;
    } 

    return sentence.substring(position, position + length);
  }
  console.log(getMiddle(sentence))

  
}); 

