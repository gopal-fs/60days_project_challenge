let display = document.getElementById("display-num");
let buttons = document.querySelectorAll(".action-buttons p");
let currentInput = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent.trim();

        // Clear
        if (value === "C") {
            display.textContent = "";
            currentInput = "";
        }
        // Evaluate expression
        else if (value === "=") {
            if (currentInput.trim() === "") return;
            try {
                const result = eval(currentInput);
                display.textContent = result;
                currentInput = result.toString();
            } catch (e) {
                
                display.textContent = "Error";
                currentInput = "";
            }
        }
        
        else if (button.querySelector(".bi-x-square")) {
            currentInput = currentInput.slice(0, -1);
        }
        
        else if (button.querySelector(".bi-percent")) {
            currentInput += "/100";
        }
        // Slash (division)
        else if (button.querySelector(".bi-slash-lg")) {
            currentInput += "/";
        }
        // Dash (minus)
        else if (button.querySelector(".bi-dash")) {
            currentInput += "-";
        }
        // Plus
        else if (button.querySelector(".bi-plus")) {
            currentInput += "+";
        }
        // Multiply
        else if (value === "*") {
            currentInput += "*";
        }
        // Calculator icon
        else if (button.querySelector(".bi-calculator")) {
            alert("Thanks for Using Mini Calculator");
        }
        // Numbers and dot
        else {
            currentInput += value;
        }

        // Display the updated input (unless it's C or =)
        if (value !== "C" && value !== "=") {
            display.textContent = currentInput;
        }
    });
});
