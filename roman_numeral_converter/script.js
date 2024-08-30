const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputDiv = document.getElementById("output");

const convertToRoman= () => {
     const number = parseInt(numberInput.value.trim());

     if (!numberInput.value){
        outputDiv.textContent = "Please enter a valid number";
     }else if(number < 1){
        outputDiv.textContent = "Please enter a number greater than or equal to 1";
     }else if(number > 3999){
        outputDiv.textContent =  "Please enter a number less than or equal to 3999";
     }
        
}

const conversion = (number) => {

}

convertBtn.addEventListener("click", convertToRoman);

numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      convertToRoman();
    }
  });