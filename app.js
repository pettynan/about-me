'use strict';

var questionArray = [ // This array contains the 5 questions I decided to answer about myself.
  'I was born in the city of Seattle. True or false?',
  'I prefer console gaming over PC gaming. True or false?',
  'My dog\'s name is Bailey. True or false?',
  'My favorite movie of all time is Zoolander. True or false?',
  'I am actually quite a picky eater. True or false?'
];
var answersArray = [true, false, true, true, false]; // This array contains the answers (as booleans!) to my 5 questions.

var userResponse = []; // This array will be filled with the user's responses to the questions.

var yesList = ['yes', 'Yes', 'YES', 'y', 'Y', 'true', 'True', 't', 'T']; // These are all responses accepted for 'true.'
var noList = ['no', 'No', 'NO', 'n', 'N', 'false', 'False', 'f', 'F']; // These are all responses accepted for 'false.'

var userName = prompt('Hey, welcome to my about-me! My name is Peter, what should I call you?');
alert('Nice to meet you, ' + userName + '!');

for (var i = 0; i < 5; i++) {
  userResponse[i] = prompt(questionArray[i]);

  if ((yesList.includes(userResponse[i]) && answersArray[i] === true ) || (noList.includes(userResponse[i]) && answersArray[i] === false)) { //If the user answered some form of 'yes' and the answer was 'yes', or if the user answered some form of 'no' and the answer was 'no'.

    alert(questionArray[i] + ' You answered ' + userResponse[i] + '. You are correct!');
    console.log('User answered Question ' + i + ' correctly.');
    
  } else {

    alert(questionArray[i] + ' You answered ' + userResponse[i] + '. You are wrong. :(');
    console.log('User answered Question ' + i + ' incorrectly.');

  }

}



  
// if (userName === 'peter') {

//   alert('Hey we\'ve got the same name. Welcome to the site, ' + userName + '!')

// } else {
//   console.log('Welcome to the site ' + userName);
// }








/*
Arrays

declare an array with "[]"
put things into an array, when we define it, by typing the values
[value1, value2] === "array literal"
elements can be any value in js
*/

