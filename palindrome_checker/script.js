const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

const palindromeCheck = () => {
    let text = textInput.value.trim().toLowerCase();

    if (text === ""){
        alert("Please input a value");
        resultDiv.innerText = "";
        return;
    }

    let cleanedText = text.replace(/[^a-z0-9]/g, '');

    let reverseText = cleanedText.split('').reverse().join('');

    if (cleanedText === reverseText){
        resultDiv.innerText = `${textInput.value.trim()} is a palindrome`;
    }else{
        resultDiv.innerText = `${textInput.value.trim()} is not a palindrome`;
    }
    
}


checkButton.addEventListener("click",palindromeCheck);