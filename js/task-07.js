const fontControl = document.querySelector("#font-size-control");
const notification = document.querySelector("#text");

fontControl.addEventListener("input", changeFontSize);

function changeFontSize(event) {
  notification.style.fontSize = event.currentTarget.value + "px";
}
