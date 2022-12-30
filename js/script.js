let getInputValue = document.querySelector("#color");
let changeBodyColor = document.querySelector(".body");
let applyChange = document.querySelector(".change");

applyChange.addEventListener("click", () => {
  if (getInputValue.value != "") {
    changeBodyColor.style.background = `${getInputValue.value}`;
    getInputValue.value = "";
  }
});
