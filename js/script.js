const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

const countryCode = "^(1\\s?)?";
const areaCode = "(\\([0-9]{3}\\)|[0-9]{3})";
const spacesDashes = "[\\s\\-]?";
const phoneNumber = "[0-9]{3}[\\s\\-]?[0-9]{4}$";
const phoneRegex = new RegExp(`${countryCode}${areaCode}${spacesDashes}${phoneNumber}`);

const checkValidNumber = input => {
    if (input === "") {
        alert("Please provide a phone number");
        return;
    }

    const showResult = document.createElement("p");
    showResult.className = "results-text";
    phoneRegex.test(input)
        ? (showResult.style.color = "green")
        : (showResult.style.color = "red");
    showResult.appendChild(
        document.createTextNode(`${phoneRegex.test(input) ? 'Valid' : 'Invalid'} US number: ${input}`)
    );
    resultsDiv.appendChild(showResult);
};

checkBtn.addEventListener("click", () => {
    checkValidNumber(userInput.value);
    userInput.value = "";
});

userInput.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        checkValidNumber(userInput.value);
        userInput.value = "";
    }
});

clearBtn.addEventListener("click", () => {
    resultsDiv.textContent = "";
});