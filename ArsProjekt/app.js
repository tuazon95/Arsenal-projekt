const container = document.querySelector(".container");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const color3 = document.querySelector(".color3");
let activeColor = document.querySelector(".col-active");
let kitName = document.querySelector("#kit-name");

color1.addEventListener("click", function () {
  container.classList.remove("black");
  container.classList.remove("pink");
  kitName.textContent = "Red Arsenal Kit ";
});

color2.addEventListener("click", function () {
  container.classList.add("black");
  container.classList.remove("pink");
  kitName.textContent = "Black Arsenal Kit ";
});

color3.addEventListener("click", function () {
  container.classList.add("pink");
  container.classList.remove("black");
  kitName.textContent = "Pink Arsenal Kit ";
});
