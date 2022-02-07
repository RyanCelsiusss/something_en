const modalWindow = document.querySelector(".modal-window");
const closeRiskDisclaimer = document.querySelector(".button__close");
const riskConfirmationBtn = document.querySelector(
  ".modal-window__confirmation"
);
const body = document.querySelector("body");

const data = localStorage.getItem("cryptocadabra-state");

if (data) {
  JSON.parse(data).showModalWindow === true
    ? console.log("modalWindow: true")
    : modalWindow.remove();
}

const state = {
  showModalWindow: true,
};

closeRiskDisclaimer.addEventListener("click", function deleteRiskDisclaimer() {
  modalWindow.remove();
});

riskConfirmationBtn.addEventListener(
  "click",
  function saveStateToLocalStorage() {
    modalWindow.remove();
    state.showModalWindow = false;
    localStorage.setItem("cryptocadabra-state", JSON.stringify(state));
  }
);
