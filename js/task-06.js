const areaInput = document.querySelector("#validation-input");

areaInput.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  areaInput.classList.remove("valid");
  areaInput.classList.remove("invalid");

  event.currentTarget.value.length === Number(areaInput.dataset.length)
    ? areaInput.classList.add("valid")
    : areaInput.classList.add("invalid");
}
