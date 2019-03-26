'use strict';

var userName = prompt('Hey, welcome to my about-me! My name is Peter, what should I call you?');

var questionArray = [
  'Peter was born in the city of Seattle. Yes or no?',
  'Question 2',
  'Question 3',
  'Question 4',
  'Question 5'
];

var userResponse = [];

var answersArray = [
  true,
  'bool2',
  'bool3',
  'bool4',
  'bool5'
];

for (i < 5 , i = 0 , i++) {
  var userResponse[i] = prompt(questionArray[i]);

  
}



  
if (userName === 'peter') {

  alert('Hey we\'ve got the same name. Welcome to the site, ' + userName + '!')

} else {
  console.log('Welcome to the site ' + userName);
}








/*
Arrays

declare an array with "[]"
put things into an array, when we define it, by typing the values
[value1, value2] === "array literal"
elements can be any value in js
*/

