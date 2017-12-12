var additionBtn = document.getElementById('addition');
additionBtn.onclick = function () {
    var firstNumberValue = Number(document.getElementById('firstNumber').value);
    var secondNumberValue = Number(document.getElementById('secondNumber').value);
    var result = firstNumberValue+secondNumberValue;
    document.getElementById('result').value = result;
};

var subtractionBtn = document.getElementById('subtraction');
subtractionBtn.onclick = function () {
    var firstNumberValue = Number(document.getElementById('firstNumber').value);
    var secondNumberValue = Number(document.getElementById('secondNumber').value);
    var result = firstNumberValue-secondNumberValue;
    document.getElementById('result').value = result;

};

var multiplicationBtn = document.getElementById('multiplication');
multiplicationBtn.onclick = function () {
    var firstNumberValue = Number(document.getElementById('firstNumber').value);
    var secondNumberValue = Number(document.getElementById('secondNumber').value);
    var result = firstNumberValue*secondNumberValue;
    document.getElementById('result').value = result;

};

var divisionBtn = document.getElementById('division');
divisionBtn.onclick = function () {
    var firstNumberValue = Number(document.getElementById('firstNumber').value);
    var secondNumberValue = Number(document.getElementById('secondNumber').value);
    var result = firstNumberValue/secondNumberValue;
    document.getElementById('result').value = result;

};

var remainderBtn = document.getElementById('remainder');
remainderBtn.onclick = function () {
    var firstNumberValue = Number(document.getElementById('firstNumber').value);
    var secondNumberValue = Number(document.getElementById('secondNumber').value);
    var result = firstNumberValue%secondNumberValue;
    document.getElementById('result').value = result;

};

var clearBtn = document.getElementById('clear');
clearBtn.onclick = function () {

};


