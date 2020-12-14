const toggleButton = document.getElementById("btn-toggle");
const priceMonth = document.querySelectorAll(".month");
const priceYear = document.querySelectorAll(".year");

toggleButton.addEventListener("click", toggle);

function toggle() {
  if (toggleButton.style.justifyContent === "flex-start") {
    console.log("mois");
    priceMonth.forEach((price) => price.classList.add("show"));
    priceYear.forEach((price) => price.classList.remove("show"));

    toggleButton.style.justifyContent = "flex-end";
  } else {
    console.log("year");
    priceYear.forEach((price) => price.classList.add("show"));
    priceMonth.forEach((price) => price.classList.remove("show"));
    toggleButton.style.justifyContent = "flex-start";
  }
}
