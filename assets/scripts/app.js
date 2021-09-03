const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberinput() {
  return parseInt(userInput.value);
}

function createAndWriteLog(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function add() {
  const enteredNumber = getUserNumberinput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteLog('+', initialResult, enteredNumber);

  logEntries.push(enteredNumber);
  console.log(logEntries[0]);
}

function subtract() {
  const enteredNumber = getUserNumberinput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteLog('-', initialResult, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserNumberinput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteLog('*', initialResult, enteredNumber);
}

function divide() {
  const enteredNumber = getUserNumberinput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteLog('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add);

subtractBtn.addEventListener('click', subtract);

multiplyBtn.addEventListener('click', multiply);

divideBtn.addEventListener('click', divide);
