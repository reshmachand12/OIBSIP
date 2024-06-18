document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const buttons = Array.from(document.getElementsByClassName("btn"));
    let currentInput = '';
    let equation = '';
    let lastResult = null;

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.getAttribute("data-num");
            const operator = button.getAttribute("data-operator");

            if (value) {
                if (value === '.' && currentInput.includes('.')) {
                    return;
                }
                currentInput += value;
                equation += value;
                display.textContent = equation;
            } else if (operator) {
                if (currentInput || lastResult !== null || operator === '(' || operator === ')') {
                    if (!currentInput && lastResult !== null && operator !== '(' && operator !== ')') {
                        equation = lastResult.toString();
                        lastResult = null;
                    }
                    equation += ` ${operator} `;
                    currentInput = '';
                    display.textContent = equation;
                }
            } else if (button.id === "equals") {
                if (currentInput || equation.includes(')')) {
                    try {
                        const result = eval(equation.replace(/\s+/g, '')).toString();
                        display.textContent = result;
                        lastResult = result;
                        currentInput = '';
                        equation = '';
                    } catch {
                        display.textContent = 'Error';
                        currentInput = '';
                        equation = '';
                    }
                }
            } else if (button.id === "clear") {
                currentInput = '';
                equation = '';
                lastResult = null;
                display.textContent = '';
            } else if (button.id === "backspace") {
                if (equation.endsWith(' ')) {
                    equation = equation.slice(0, -3);
                } else {
                    equation = equation.slice(0, -1);
                }
                currentInput = equation;
                display.textContent = equation;
            } else if (button.id === "toggle-sign") {
                if (currentInput) {
                    if (currentInput.startsWith('-')) {
                        currentInput = currentInput.slice(1);
                    } else {
                        currentInput = '-' + currentInput;
                    }
                    equation = equation.slice(0, equation.length - currentInput.length) + currentInput;
                    display.textContent = equation;
                }
            }
        });
    });
});
