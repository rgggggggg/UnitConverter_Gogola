var num = document.getElementById('num');
var result = document.getElementById('result');
var numType = document.getElementById('numType');
var resultType = document.getElementById('resultType');
var numTypeValue,resultTypeValue;

num.addEventListener("keyup",myResult);
numType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

numTypeValue = numType.value;
resultTypeValue = resultType.value;

function myResult(){

    numTypeValue = numType.value;
    resultTypeValue = resultType.value;

    result.value = num.value;
}

