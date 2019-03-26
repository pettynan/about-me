'use strict';

var userName = prompt('Hey, welcome to my about-me! My name is Peter, what should I call you?');

var questionArray = [
  'Peter was born in the city of Seattle. Yes or no?',
  'Question 2',
  'Question 3',
  'Question 4',
  'Question 5'
];

var yesList = ['yes', 'Yes', 'y', 'Y', 'true', 'True'];
var noList = ['no', 'No', 'n', 'N', 'false', 'False']

var userResponse = [];

var answersArray = ['yes', 'no', 'yes', 'yes', 'no'
];

for (var i = 0; i < 5; i++) {
  userResponse[i] = prompt(questionArray[i]);

  if ((yesList.includes(userResponse[i]) && answersArray[i] === 'yes') || (noList.includes(userResponse[i]) && answersArray[i] === 'no') ) { //If the user answered some form of 'yes' and the answer was 'yes', or if the user answered some form of 'no' and the answer was 'no'.

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

