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




//pay attention to clicks on the numberButtons
for (var i = 0; i < 11; i++) {
  numberButtons[i].addEventListener('click', function(e) {
    var number = e.target.innerText;

// put the number in the output area
  var oldNumber = outputArea.innerText;
  var newNumber = oldNumber + number ;

    outputArea.innerText = newNumber;
  });
}

// pay attention to click on the operatorButtons
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
});
