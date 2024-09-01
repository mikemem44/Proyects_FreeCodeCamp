const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputDiv = document.getElementById("output");
const romanConversionValues = [{
   decimalValue: 1000,
   romanValue: "M"
},
{
   decimalValue: 900,
   romanValue: "CM"
},
{
   decimalValue: 500,
   romanValue: "D"
},
{
   decimalValue: 400,
   romanValue: "CD"
},
{
   decimalValue: 100,
   romanValue: "C"
},
{
   decimalValue: 90,
   romanValue: "XC"
},
{
   decimalValue: 50,
   romanValue: "L"
},
{
   decimalValue: 40,
   romanValue: "XL"
},
{
   decimalValue: 10,
   romanValue: "X"
},
{
   decimalValue: 9,
   romanValue: "IX"
},
{
   decimalValue: 5,
   romanValue: "V"
},
{
   decimalValue: 4,
   romanValue: "IV"
},
{
   decimalValue: 1,
   romanValue: "I"
}];

const outputValue = [];
let quotient;
let remainer;
let stopLoop = false;

const buttonClicked= () => {
     const number = parseInt(numberInput.value.trim());

     if (!numberInput.value){
        outputDiv.textContent = "Please enter a valid number";
     }else if(number < 1){
        outputDiv.textContent = "Please enter a number greater than or equal to 1";
     }else if(number > 3999){
        outputDiv.textContent =  "Please enter a number less than or equal to 3999";
     }else{
         conversion(number);      
         outputDiv.textContent = outputValue.join("");
         outputValue.splice(0,outputValue.length); 
         stopLoop = false;
   }
}


const conversion = (input) => {
   romanConversionValues.forEach((obj) => {
      if (input >= obj.decimalValue && stopLoop === false){
         quotient = Math.floor(input / obj.decimalValue);
         outputValue.push(obj.romanValue.repeat(quotient));
         remainer = input % obj.decimalValue;
         stopLoop = true;
      }
   })

   if (remainer !== 0){
      stopLoop = false;
      conversion(remainer);
      return;
   }
}

convertBtn.addEventListener("click", buttonClicked);

numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      buttonClicked();
    }
  });