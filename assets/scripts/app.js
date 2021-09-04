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

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    operand: operationNumber,
    result: newResult,
  };

  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const enteredNumber = getUserNumberinput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteLog('+', initialResult, enteredNumber);
  writeToLog('add', initialResult, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = getUserNumberinput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteLog('-', initialResult, enteredNumber);
  writeToLog('subtract', initialResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserNumberinput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteLog('*', initialResult, enteredNumber);
  writeToLog('multiply', initialResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserNumberinput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteLog('/', initialResult, enteredNumber);
  writeToLog('divide', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);

subtractBtn.addEventListener('click', subtract);

multiplyBtn.addEventListener('click', multiply);

divideBtn.addEventListener('click', divide);
