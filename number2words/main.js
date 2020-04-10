const getAmount = localStorage.getItem("amountRecep");
const amountToWords = parseInt(getAmount, 10);
const n2words = require("n2words");
document.querySelector(".amount-to-words").innerHTML = n2words(amountToWords, {
  lang: "de",
});
