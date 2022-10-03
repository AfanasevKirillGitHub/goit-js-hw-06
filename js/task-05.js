const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", changeName);

function changeName(event) {
  event.currentTarget.value !== ""
    ? (textOutput.textContent = event.currentTarget.value)
    : (textOutput.textContent = "Anonymous");
}

// =============================================================================
// changeName через логический оператор "ИЛИ"
// =============================================================================

// function changeName(event) {
//   textOutput.textContent =
//     event.currentTarget.value || (textOutput.textContent = "Anonymous");
// }

// =============================================================================
// changeName через if...else
// =============================================================================

// function changeNameIf(event) {
//   if (event.currentTarget.value !== "") {
//     textOutput.textContent = event.currentTarget.value;
//   } else {
//     textOutput.textContent = "Anonymous";
//   }
// }
