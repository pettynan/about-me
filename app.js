'use strict';

var questionArray = [ // This array contains the 5 questions I decided to answer about myself.
  'I was born in the city of Seattle. True or false?',
  'I prefer console gaming over PC gaming. True or false?',
  'My dog\'s name is Bailey. True or false?',
  'My favorite movie of all time is Zoolander. True or false?',
  'I am actually quite a picky eater. True or false?',
  'How old am I?',
  'Can you guess a state (outside of Washington) I have been to?'
];
var answersArray = [true, false, true, true, false, '24', ['oregon', 'california', 'idaho', 'michigan', 'south carolina', 'georgia', 'ohio']]; // This array contains the answers to my 7 questions.

var userResponse = []; // This array will be filled with the user's responses to the questions.

var yesList = ['yes', 'y', 'true', 't']; // These are all responses accepted for 'true.'
var noList = ['no', 'n', 'false', 'f']; // These are all responses accepted for 'false.'
var numCorrect = 0; // Creates a variable which tracks the # of correct answers.
var badAttempts = [0,0,0,0,0];
var wrongAttempts = 0;

function YesNoFunction(i){
  if ((yesList.includes(userResponse[i].toLowerCase()) && answersArray[i] === true ) ||
  (noList.includes(userResponse[i].toLowerCase()) && answersArray[i] === false)) { //If the user answered some form of 'yes' and the answer was 'yes', or if the user answered some form of 'no' and the answer was 'no'.

    numCorrect ++;
    alert(questionArray[i] + ' You answered ' + userResponse[i] + '.\n\nYou are correct! :) \n \nYou\'ve gotten ' + numCorrect + ' out of ' + (i + 1) + ' questions right.');
    console.log('User answered Question ' + (i + 1) + ' correctly.');

  } else if ((yesList.includes(userResponse[i].toLowerCase()) && answersArray[i] === false ) ||
(noList.includes(userResponse[i].toLowerCase()) && answersArray[i] === true)) {

    alert(questionArray[i] + ' You answered ' + userResponse[i] + '.\n\nYou are incorrect! :( \n \nYou\'ve gotten ' + numCorrect + ' out of ' + (i + 1) + ' questions right.');
    console.log('User answered Question ' + (i + 1) + ' incorrectly.');

  } else {
    if (badAttempts[i] > 2) {
      alert('Why don\'t you try moving on?');
    } else {
      alert('Your response \'' + userResponse[i] + '\' was not a valid answer! Try answering with \'true\' or \'false\'!');
      console.log('User entered an invalid response.');
      badAttempts[i]++;
      console.log(badAttempts[i]);
      i--;
    } // /if (wrong answer...)
  } // /if (yesList...)


}


setTimeout(function() { // Small delay so that the user can see the main screen before answering prompts.
  var userName = prompt('Hey, welcome to my about-me! My name is Peter, what should I call you?');
  if (userName.toLowerCase() === 'evan') {
    alert('Hey ' + userName + '! Hope I don\'t need to resubmit the assignment this time D:');
  } else {
    alert('Nice to meet you, ' + userName + '!');
  }

  console.log('User entered their username as \'' + userName + '\'.');
  alert('Next, I\'m going to ask you a few questions about myself, so you can get to know me.');


  for (var i = 0; i < 7; i++) {
    userResponse[i] = prompt(questionArray[i]);

    if(i < 5) {
      if(userResponse[i]) {

        YesNoFunction(i);


        /* if ((yesList.includes(userResponse[i].toLowerCase()) && answersArray[i] === true ) ||
            (noList.includes(userResponse[i].toLowerCase()) && answersArray[i] === false)) { //If the user answered some form of 'yes' and the answer was 'yes', or if the user answered some form of 'no' and the answer was 'no'.

          numCorrect ++;
          alert(questionArray[i] + ' You answered ' + userResponse[i] + '.\n\nYou are correct! :) \n \nYou\'ve gotten ' + numCorrect + ' out of ' + (i + 1) + ' questions right.');
          console.log('User answered Question ' + (i + 1) + ' correctly.');

        } else if ((yesList.includes(userResponse[i].toLowerCase()) && answersArray[i] === false ) ||
          (noList.includes(userResponse[i].toLowerCase()) && answersArray[i] === true)) {

          alert(questionArray[i] + ' You answered ' + userResponse[i] + '.\n\nYou are incorrect! :( \n \nYou\'ve gotten ' + numCorrect + ' out of ' + (i + 1) + ' questions right.');
          console.log('User answered Question ' + (i + 1) + ' incorrectly.');

        } else {
          if (badAttempts[i] > 2) {
            alert('Why don\'t you try moving on?');
          } else {
            alert('Your response \'' + userResponse[i] + '\' was not a valid answer! Try answering with \'true\' or \'false\'!');
            console.log('User entered an invalid response.');
            badAttempts[i]++;
            console.log(badAttempts[i]);
            i--;
          } // /if (wrong answer...)
        } // /if (yesList...)             */
      } // /if(userResponse[i])
    } else if (i < 6) {
      if (userResponse[i] === answersArray[i]) {
        numCorrect++;
        alert(questionArray[i] + ' You answered ' + userResponse[i] + '.\n\nYou are correct! :) \n \nYou\'ve gotten ' + numCorrect + ' out of ' + (i + 1) + ' questions right.');
        console.log('User answered Question ' + (i + 1) + ' correctly.');
        wrongAttempts = 0;

      } else if (wrongAttempts === 3) {
        alert(questionArray[i] + ' You answered ' + userResponse[i] + '.\n\nYou are incorrect! The correct answer was ' + answersArray[i] + '. \n \nYou\'ve gotten ' + numCorrect + ' out of ' + (i + 1) + ' questions right.');
        console.log('User answered Question ' + (i + 1) + ' incorrectly.');
        wrongAttempts = 0;

      } else if (userResponse[i] <= answersArray[i]) {
        wrongAttempts++;
        alert(questionArray[i] + ' You answered ' + userResponse[i] + '.\n\nYou are incorrect! Your answer was too low, you have ' + (4 - wrongAttempts) + ' tries left!');
        i--;
      } else if (userResponse[i] >= answersArray[i]) {
        wrongAttempts++;
        alert(questionArray[i] + ' You answered ' + userResponse[i] + '.\n\nYou are incorrect! Your answer was too high, you have ' + (4 - wrongAttempts) + ' tries left!');
        i--;
      }

    } else if (i < 7) {
      if (answersArray[i].includes(userResponse[i].toLowerCase())) {
        numCorrect++;
        alert(questionArray[i] + ' You answered ' + userResponse[i] + '.\n\nYou are correct! :) Possible correct answers were ' + answersArray[i] + '. \n \nYou\'ve gotten ' + numCorrect + ' out of ' + (i + 1) + ' questions right.');
        console.log('User answered Question ' + (i + 1) + ' correctly.');

      } else if (wrongAttempts === 5) {
        alert(questionArray[i] + ' You answered ' + userResponse[i] + '.\n\nYou are incorrect! Possible correct answers were ' + answersArray[i] + '. \n \nYou\'ve gotten ' + numCorrect + ' out of ' + (i + 1) + ' questions right.');
        console.log('User answered Question ' + (i + 1) + ' incorrectly.');

      } else {
        wrongAttempts++;
        alert(questionArray[i] + ' You answered ' + userResponse[i] + '.\n\nYou are incorrect! Keep trying, you have ' + (6 - wrongAttempts) + ' tries left!');
        i--;

      } // /if

    } // /question 7
  } // /for
  console.log('User answered ' + numCorrect + ' out of 7 questions correctly.');

  var message = '';
  if (numCorrect === 0) {
    message = 'Yikes. I feel a bit insulted';
  } else if (numCorrect === 7) {
    message = 'Wow! You really know me';
  } else {
    message = 'Good job';
  }

  alert('You got ' + numCorrect + ' right out of 7 questions! ' + message + ', ' + userName + '!');

}, 500);
