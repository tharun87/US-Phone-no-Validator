const input = document.getElementById("user-input");
const result = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const countryCode = '^(1\\s?)?';
const firstPart = '(\\([0-9]{3}\\)|[0-9]{3})';
const spacesdashes = '[\\s\\-]?';
const thirdPart = '[0-9]{3}[\\s\\-]?[0-9]{4}$'
const completerRegex = new RegExp(`${countryCode}${firstPart}${spacesdashes}${thirdPart}`);


function inputValidation(value) {
    const outputPara = document.createElement('p');
    outputPara.className = 'output-text';
    result.appendChild(outputPara);
    if (value === '') {
        alert("Please provide a phone number");
    }else if (completerRegex.test(value)) {
        outputPara.textContent += `Valid US number: \n${value}`;
    } else {
        outputPara.textContent += `Invalid US number: \n${value}`;
    }
}

checkBtn.addEventListener("click", () => {
    inputValidation(input.value.toString()); 
});

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        inputValidation(input.value.toString()); 
    }
});

clearBtn.addEventListener("click", ()=>{
    input.value="";
    result.textContent=''});
