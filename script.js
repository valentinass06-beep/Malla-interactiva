const ramos = document.querySelectorAll(".ramo");
const estadoRamos = JSON.parse(localStorage.getItem("estadoRamos")) || {};

ramos.forEach(ramo => {
  const id = ramo.dataset.id;
  if (estadoRamos[id]) ramo.classList.add("aprobado");
});

function actualizarBloqueos() {
  ramos.forEach(ramo => {
    const prereq = ramo.dataset.prereq;
    if (!prereq) {
      ramo.classList.remove("bloqueado");
      return;
    }

    const requisitos = prereq.split(",");
    const cumplidos = requisitos.every(r => estadoRamos[r]);

    if (!cumplidos && !ramo.classList.contains("aprobado")) {
      ramo.classList.add("bloqueado");
      ramo.title = "Prerrequisitos: " + prereq.replaceAll(",", ", ");
    } else {
      ramo.classList.remove("bloqueado");
      ramo.title = "";
    }
  });
}

ramos.forEach(ramo => {
  ramo.addEventListener("click", () => {
    if (ramo.classList.contains("bloqueado")) return;

    const id = ramo.dataset.id;
    ramo.classList.toggle("aprobado");
    estadoRamos[id] = ramo.classList.contains("aprobado");
    localStorage.setItem("estadoRamos", JSON.stringify(estadoRamos));
    actualizarBloqueos();
  });
});

actualizarBloqueos();
