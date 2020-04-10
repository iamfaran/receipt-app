document.querySelector(".details").addEventListener("submit", (e) => {
  e.preventDefault();
  var arr = [];
  while (arr.length < 1) {
    var r = Math.floor(Math.random() * 100000) + 1;
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  const nrNumber = arr.join("");
  console.log(typeof nrNumber);
  //storing nr Number
  localStorage.setItem("nrNumber", nrNumber);
  localStorage.setItem("dateRecep", e.target.elements.date.value); //DATE
  localStorage.setItem("firstNameRecep", e.target.elements.firstName.value); //firstName of receipt
  localStorage.setItem("lastNameRecep", e.target.elements.lastName.value); //last name of receipt

  localStorage.setItem("amountRecep", e.target.elements.amount.value); //amount on receipt
  window.open("receipt.html");
});

document.getElementById("datePicker").valueAsDate = new Date();

// console.log(test);

// if (localStorage.getItem("Nr") === null) {
//   let nr = 1;
//   localStorage.setItem("Nr", nr);
// } else {
//   let nrExists = localStorage.getItem("Nr");
//   let integer = parseInt(nrExists, 10);
//   integer = integer + 1;
//   localStorage.setItem("Nr", integer);
// }
// localStorage.setItem("Nr", nr);
