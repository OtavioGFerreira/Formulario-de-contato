const inputs = document.querySelectorAll(".data");
const button = document.getElementById("submit");
const warning = document.querySelectorAll(".warning");

inputs.forEach((input, i) => {
  button.addEventListener("click", () => {
    if (input.value !== "") {
       input.classList.add("green");
       warning[i].classList.remove("show");

    } else if (input.value === "") {
       input.classList.remove("green");
       input.classList.add("red");
       warning[i].classList.add("show");
    }
  });
});
