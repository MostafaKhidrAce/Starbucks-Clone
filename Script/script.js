let dropdownMenu = document.querySelector(".dropdown");
let dropdownList = document.querySelector(".dropdown-list");
let dropIcon = document.querySelector(".dropdown i");
let dropdownStatus = false;

let dropdownBtns = document.querySelectorAll(".dropdown-list ul li a");
dropdownMenu.addEventListener("click", (event) => {
  event.preventDefault();
  if (dropdownStatus == false) {
    dropdownList.style.display = "none";
    dropdownStatus = true;
    dropIcon.classList = "fa-solid fa-bars";
  } else {
    dropdownList.style.display = "block";
    dropdownStatus = false;
    dropIcon.classList = "fa-solid fa-xmark";
  }
});

dropdownBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    dropdownList.style.display = "none";
    dropdownStatus = false;
  });
});
