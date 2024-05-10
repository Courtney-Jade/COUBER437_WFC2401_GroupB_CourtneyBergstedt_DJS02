const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

// Resolved Story: Initial State
result.innerText = "No calculation performed";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const dividendInput = event.target.querySelector('input[name="dividend"]');
  const dividerInput = event.target.querySelector('input[name="divider"]');
  
  const dividend = parseInt(dividendInput.value);
  const divider = parseInt(dividerInput.value);
  
  // Unresolved Story: Validation when values are missing
  if (isNaN(dividend) || isNaN(divider)) {
    handleError("Both values are required in inputs. Try again");
    return;
  }
  
  // Unresolved Story: An invalid division should log an error in the console
  if (divider === 0) {
    handleError("Invalid number provided. Try again");
    console.error("Error: Division by zero");
    return;
  }
  
  // Unresolved Story: Providing anything that is not a number should crash the program
  if (!Number.isInteger(dividend) || !Number.isInteger(divider)) {
    handleError("Invalid number provided. Try again");
    console.error("Error: Non-numeric input");
    return;
  }

  // Whole Number Division
  if (dividend % divider === 0) {
    result.innerText = dividend / divider;
  } else {
    // Unresolved Story: Dividing numbers result in a decimal number
    result.innerText = "Division not resulting in a whole number.";
  }
});

function handleError(errorMessage) {
  result.innerText = `Error: ${errorMessage}`;
  console.error(errorMessage);
}






