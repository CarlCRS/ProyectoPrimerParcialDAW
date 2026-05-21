console.log("App iniciada");

// --- MENÚ ---
function toggleMenu() {
  document.getElementById("menu-links").classList.toggle("activo");
}

// --- CAROUSEL ---
let currentSlide = 0;

function cambiarSlide(dir) {
  const slides = document.querySelectorAll(".slide");
  if (slides.length === 0) return;
  currentSlide = (currentSlide + dir + slides.length) % slides.length;
  const track = document.getElementById("carousel-track");
  if (track) track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// --- VALIDACIÓN DEL FORMULARIO como en el video del profesor ---
const datos = {
  nombre: "",
  email: "",
  mensaje: "",
};

document.addEventListener("DOMContentLoaded", () => {
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const mensaje = document.getElementById("mensaje");

  if (!nombre || !email || !mensaje) return;

  nombre.addEventListener("input", leerTexto);
  email.addEventListener("input", leerTexto);
  mensaje.addEventListener("input", leerTexto);

  const formulario = document.querySelector(".formulario");
  if (formulario) {
    formulario.addEventListener("submit", function (e) {
      e.preventDefault();
      const { nombre: n, email: em, mensaje: m } = datos;
      if (n === "" || em === "" || m === "") {
        mostrarError("Todos los campos son obligatorios");
        return;
      }
      mostrarOK("Formulario enviado correctamente");
      formulario.reset();
      datos.nombre = "";
      datos.email = "";
      datos.mensaje = "";
    });
  }
});

function leerTexto(e) {
  datos[e.target.id] = e.target.value;
}

function mostrarError(mensaje) {
  const formulario = document.querySelector(".formulario");
  if (!formulario) return;
  const error = document.createElement("P");
  error.textContent = mensaje;
  error.classList.add("error");
  formulario.appendChild(error);
  setTimeout(() => error.remove(), 5000);
}

function mostrarOK(mensaje) {
  const formulario = document.querySelector(".formulario");
  if (!formulario) return;
  const correcto = document.createElement("P");
  correcto.textContent = mensaje;
  correcto.classList.add("correcto");
  formulario.appendChild(correcto);
  setTimeout(() => correcto.remove(), 5000);
}
