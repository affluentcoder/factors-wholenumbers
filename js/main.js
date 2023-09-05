const factors = document.querySelector("#factors");
const msg = document.querySelector("#msg");
const btn = document.querySelector("#btn");
const addForm = document.forms["add-num"];
const reset = (e) => {
  msg.innerHTML = "<p></p>";
  factors.textContent = "";
};
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let x = null;
  const value = Number(addForm.querySelector('input[type="text"]').value);
  if (value == 0) {
    reset();
    console.log("Why would you check for factors of nothing");
    msg.innerHTML = "<p>Why would you check for factors of nothing</p>";
  } else if (value > 0) {
    console.log(`Factors of ${value} are:`);
    reset();
    msg.innerHTML = `Factors of ${value} are:`;
    for (let i = 1; i <= value; i++) {
      x = value % i;
      if (x == 0) {
        console.log(`${i}`);
        factors.textContent += `${i}. `;
      }
    }
  } else if (value < 0) {
    reset();
    console.log("Cannot calculate factors of a negative number... ");
    msg.innerHTML = "<p>Cannot calculate factors of a negative number... </p>";
  } else {
    reset();
    console.log("Enter a valid number!!");
    msg.innerHTML = "<p>Enter a valid number!!</p>";
  }
});
