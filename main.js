var num = document.getElementById('num');
var result = document.getElementById('result');
var len1 = document.getElementById('len1');
var len2 = document.getElementById('len2');
var wei1 = document.getElementById('wei1');
var wei2 = document.getElementById('wei2');
var tem1 = document.getElementById('tem1');
var tem2 = document.getElementById('tem2');

var len1Value, len2Value;
var wei1Value, wei2Value;
var tem1Value, tem2Value;

num.addEventListener("keyup",convertUnit);
len1.addEventListener("change",convertUnit);
len2.addEventListener("change",convertUnit);
wei1.addEventListener("change",convertUnit);
wei2.addEventListener("change",convertUnit);
tem1.addEventListener("change",convertUnit);
tem2.addEventListener("change",convertUnit);

len1Value = len1.value;
len2Value = len2.value;
wei1Value = wei1.value;
wei2Value = wei2.value;
tem1Value = wei1.value;
tem2Value = wei2.value;


function convertUnit(){

    len1Value = len1.value;
    len2Value = len2.value;
    wei1Value = wei1.value;
    wei2Value = wei2.value;
    tem1Value = tem1.value;
    tem2Value = tem2.value;

    
    //process if the same type
    if(len1Value == len2Value)
        result.value = num.value;
    if(wei1Value == wei2Value)
        result.value = num.value;
    if(tem1Value == tem2Value)
        result.value = num.value;
    
             
    //Length Process
    if((len1Value === "kilometer" && len2Value === "meter") || (len1Value === "meter" && len2Value === "kilometer")){
        if(len1Value === "kilometer" && len2Value === "meter"){
            result.value = num.value * 1000;
        }else{
            result.value = num.value / 1000;
        }
    }else if((len1Value === "kilometer" && len2Value === "mile") || (len1Value === "mile" && len2Value === "kilometer")){
        if(len1Value === "kilometer" && len2Value === "mile"){
            result.value = num.value / 1.609347;
        }else{
            result.value = num.value * 1.609347;
        }
    }else if((len1Value === "kilometer" && len2Value === "foot") || (len1Value === "foot" && len2Value === "kilometer")){
        if(len1Value === "kilometer" && len2Value === "foot"){
            result.value = num.value * 3280.84;
        }else{
            result.value = num.value * 0.0003048;
        }
    }else if((len1Value === "kilometer" && len2Value === "inch") || (len1Value === "inch" && len2Value === "kilometer")){
        if(len1Value === "kilometer" && len2Value === "inch"){
            result.value = num.value * 39370.0787;
        }else{
            result.value = num.value *  0.0000254;
        }
    }else if((len1Value === "mile" && len2Value === "meter") || (len1Value === "meter" && len2Value === "mile")){
        if(len1Value === "mile" && len2Value === "meter"){
            result.value = num.value * 1609.34;
        }else{
            result.value = num.value *  0.0006213689;
        }
    }else if((len1Value === "mile" && len2Value === "foot") || (len1Value === "foot" && len2Value === "mile")){
        if(len1Value === "mile" && len2Value === "foot"){
            result.value = num.value * 5280;
        }else{
            result.value = num.value * 0.0001893932;
        }
    }else if((len1Value === "mile" && len2Value === "inch") || (len1Value === "inch" && len2Value === "mile")){
        if(len1Value === "mile" && len2Value === "inch"){
            result.value = num.value * 63360;
        }else{
            result.value = num.value * 0.0000157828;
        }
    }else if((len1Value === "meter" && len2Value === "foot") || (len1Value === "foot" && len2Value === "meter")){
        if(len1Value === "meter" && len2Value === "foot"){
            result.value = num.value * 3.28084;
        }else{
            result.value = num.value * 0.3048;
        }
    }else if((len1Value === "meter" && len2Value === "inch") || (len1Value === "inch" && len2Value === "meter")){
        if(len1Value === "meter" && len2Value === "inch"){
            result.value = num.value * 39.3701;
        }else{
            result.value = num.value * 0.0254;
        }
    }else if((len1Value === "foot" && len2Value === "inch") || (len1Value === "inch" && len2Value === "foot")){
        if(len1Value === "foot" && len2Value === "inch"){
            result.value = num.value * 12;
        }else{
            result.value = num.value * 0.0833333333;
        }
    }
    //Weight Process    
    else if((wei1Value === "kilogram" && wei2Value === "gram") || (wei1Value === "gram" && wei2Value === "kilogram")){
        if(wei1Value === "kilogram" && wei2Value === "gram"){
            result.value = num.value * 1000;
        }else{
            result.value = num.value * 0.001;
        }
    }else if((wei1Value === "kilogram" && wei2Value === "miligram") || (wei1Value === "miligram" && wei2Value === "kilogram")){
        if(wei1Value === "kilogram" && wei2Value === "miligram"){
            result.value = num.value * 1000000;
        }else{
            result.value = num.value * 0.000001;
        }
    }else if((wei1Value === "kilogram" && wei2Value === "pound") || (wei1Value === "pound" && wei2Value === "kilogram")){
        if(wei1Value === "kilogram" && wei2Value === "pound"){
            result.value = num.value * 2.2046244202;
        }else{
            result.value = num.value * 0.453592;
        }
    }else if((wei1Value === "gram" && wei2Value === "miligram") || (wei1Value === "miligram" && wei2Value === "gram")){
        if(wei1Value === "gram" && wei2Value === "miligram"){
            result.value = num.value * 1000;
        }else{
            result.value = num.value * 0.0000022046;
        }
    }else if((wei1Value === "gram" && wei2Value === "pound") || (wei1Value === "pound" && wei2Value === "gram")){
        if(wei1Value === "gram" && wei2Value === "pound"){
            result.value = num.value * 0.0022046244;
        }else{
            result.value = num.value * 453.592;
        }
    }else if((wei1Value === "miligram" && wei2Value === "pound") || (wei1Value === "pound" && wei2Value === "miligram")){
        if(wei1Value === "miligram" && wei2Value === "pound"){
            result.value = num.value / 453,592.37;
        }else{
            result.value = num.value * 453.59237;
        }
    }    
    //Temperature Process
    else if((tem1Value === "celsius" && tem2Value === "kelvin") || (tem1Value === "kelvin" && tem2Value === "celsius")){
        if(tem1Value === "celsius" && tem2Value === "kelvin"){
            result.value = num.value + 273.15;
        }else{
            result.value = num.value * 0.0254;
        }
    }else if((tem1Value === "celsius" && tem2Value === "fahrenheit") || (tem1Value === "fahrenheit" && tem2Value === "celsius")){
        if(tem1Value === "celsius" && tem2Value === "fahrenheit"){
            result.value = num.value * 33.8;
        }else{
            result.value = num.value * 0.0254;
        }
    }else if((tem1Value === "kelvin" && tem2Value === "fahrenheit") || (tem1Value === "fahrenheit" && tem2Value === "kelvin")){
        if(tem1Value === "kelvin" && tem2Value === "fahrenheit"){
            result.value = ((num.value-273.15)*1.8)+32;
        }else{
            result.value = num.value * 0.0254;
        }
    }
    
    if(document.getElementById('button1').clicked == true || document.getElementById('button2').clicked == true || document.getElementById('button3').clicked == true)
    {
        len1.value="";
        len2.value="";
        wei1.value="";
        wei2.value="";
        tem1.value="";
        tem2.value="";
    }

    

}
