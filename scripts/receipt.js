const amountToWords = localStorage.getItem("amountRecep");
const nrNumber = localStorage.getItem("nrNumber");
const stringToInteger = parseInt(amountToWords, 10);
const amountRecep = localStorage.getItem("amountRecep");
const firstNameRecep = localStorage.getItem("firstNameRecep");
const lastNameRecep = localStorage.getItem("lastNameRecep");
const dateRecep = localStorage.getItem("dateRecep");

// document.querySelector(".amount-to-words").innerHTML = convertNumberToWords(
//   stringToInteger
// );

document.querySelector(".nr-number").innerHTML = nrNumber;
document.querySelectorAll(".amount").forEach((item) => {
  item.innerHTML = amountRecep;
});

document.querySelectorAll(".first-name").forEach((item) => {
  item.innerHTML = `${firstNameRecep} `;
});

document.querySelectorAll(".last-name").forEach((item) => {
  item.innerHTML = lastNameRecep;
});

document.querySelectorAll(".date").forEach((item) => {
  item.innerHTML = dateRecep;
});
