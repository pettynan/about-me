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
var numCorrect = 0; // Creates a variable which tracks the # of correct answers.

setTimeout(function() { // Small delay so that the user can see the main screen before answering prompts. 
  var userName = prompt('Hey, welcome to my about-me! My name is Peter, what should I call you?');
  if (userName === 'Evan') {
    
    alert('Hey Evan! Hope I don\'t need to resubmit the assignment this time D:')
  } else {
  
  alert('Nice to meet you, ' + userName + '!');
  }

  console.log('User entered their username as \'' + userName + '\'.')
  alert('Next, I\'m going to ask you a few questions about myself, so you can get to know me.');

  for (var i = 0; i < 5; i++) {
    userResponse[i] = prompt(questionArray[i]);

    if ((yesList.includes(userResponse[i]) && answersArray[i] === true ) || 
        (noList.includes(userResponse[i]) && answersArray[i] === false)) { //If the user answered some form of 'yes' and the answer was 'yes', or if the user answered some form of 'no' and the answer was 'no'.

      numCorrect ++;

      alert(questionArray[i] + ' You answered ' + userResponse[i] + '. You are correct! You\'ve gotten ' + numCorrect + '   out of ' + (i + 1) + ' questions right.');
      console.log('User answered Question ' + i + ' correctly.');
      
    } else {

      alert(questionArray[i] + ' You answered ' + userResponse[i] + '. You are wrong :( You\'ve gotten ' + numCorrect + '   out of ' + (i + 1) + ' questions right.');
      console.log('User answered Question ' + i + ' incorrectly.');

    }

  }
  console.log('User answered ' + numCorrect + ' out of 5 questions correctly.')

  document.getElementById("p1").style.color = "black";
}, 500);