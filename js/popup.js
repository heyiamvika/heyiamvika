var linkForm = document.querySelector(".popup-button");
var popupForm = document.querySelector(".modal-form");
var closeForm = document.querySelector(".form-close");
var userName = popupForm.querySelector("[name=user-name]");
var userEmail = popupForm.querySelector("[name=user-email]");
// var storage = localStorage.getItem("userName", "userEmail");

var linkMap = document.querySelector(".popup-map");
var popupMap = document.querySelector(".modal-map");
var closeMap = document.querySelector(".map-close");

// Modal Form

linkForm.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupForm.classList.add("modal-show");
  userName.focus();
});

// Modal Form - close

closeForm.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupForm.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popupForm.classList.contains("modal-show")) {
      popupForm.classList.remove("modal-show");
    }
  }
});

// Modal Form - error animation

// popupForm.addEventListener("submit", function(evt) {
//   if (!userName.value || !userEmail.value) {
//     evt.preventDefault();
//     popupForm.classList.add("modal-error");
//   }
// });

// Modal Map

linkMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-show");
});

closeMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popupMap.classList.contains("modal-show")) {
      popupMap.classList.remove("modal-show");
    }
  }
});