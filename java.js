document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("menu").classList.toggle("hidden");
});


const toggle = document.getElementById("menu-toggle");
const closeBtn = document.getElementById("menu-close");
const menu = document.getElementById("menu");


toggle.addEventListener("click", () => {
  menu.classList.remove("hidden");
  menu.classList.add("show");
  closeBtn.classList.remove("hidden");
  closeBtn.classList.add("show");
});

// Cerrar menú
closeBtn.addEventListener("click", () => {
  menu.classList.remove("show");
  menu.classList.add("hidden");
  closeBtn.classList.remove("show");
  closeBtn.classList.add("hidden");
});






const carrusel = document.querySelector(".imagenes");
const imgs = carrusel.querySelectorAll("img");
let index = 0;

function updateCarrusel() {
  carrusel.style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector(".next").addEventListener("click", () => {
  index = (index + 1) % imgs.length;
  updateCarrusel();
});

document.querySelector(".prev").addEventListener("click", () => {
  index = (index - 1 + imgs.length) % imgs.length;
  updateCarrusel();
});

