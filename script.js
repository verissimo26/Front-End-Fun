const buttonsEl = document.querySelectorAll ("button");

const inputFieldEl = document.getElementById ("resutado")

for (let i = 0; i < buttonsEl.length; i++) {
    buttonsEl[i].addEventListener ("click", () => {
        const buttuonValue = buttonsEl[i].textContent;
        if (buttuonValue === "C") {
            clearResults ()
        }  else if (buttuonValue === "=") {
            calculateResults ()
        } else {
            appendValue(buttuonValue);
        }
    });
}

function clearResults () {
    inputFieldEl.value = "";
}

function calculateResults () {
    inputFieldEl.value = eval(inputFieldEl.value)
}

function appendValue (buttuonValue) {
    inputFieldEl.value += buttuonValue;
}