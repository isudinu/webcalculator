// when a user clicks on a number button, display that number in the output area

  // button
  // number
  // output area

var numberButtons = document.querySelectorAll('.numbers button');
var operatorButtons = document.querySelectorAll('.operators button');
var equalsButton = document.querySelector('#equals');
var outputArea = document.querySelector ('#answer');
var firstNumber = 0;
var operator = '+';

var allNumbersText = [];


//pay attention to clicks on the numberButtons
for (var i = 0; i < numberButtons.length; i++) {

  allNumbersText.push(numberButtons[i].innerText)

  numberButtons[i].addEventListener('click', function(e) {

    allNumbersText.splice(allNumbersText.indexOf(e.target.innerText), 1);
    console.log(allNumbersText)
    //console.log('Clicked button text',e.target.innerText);
    //console.log('Array possitsion of ' + e.target.innerText, allNumbersText.indexOf(e.target.innerText));
  });

}

console.log(allNumbersText);

/*// pay attention to click on the operatorButtons
for (var i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener('click', function(e) {

// remember the operator that was selected
    operator = e.target.innerText;

//remember what the screen says
    firstNumber = outputArea.innerText;

// clear the screen of the calculator
    outputArea.innerText = '';

  });
}

// when we click on equal sign
equalsButton.addEventListener ('click', function(e) {
//do the appropiate math with firstnumner and the current number
  if (operator === '+') {
    outputArea.innerText = Number(firstNumber) + Number(outputArea.innerText);
  }
// put the answer in the outputArea
});*/
