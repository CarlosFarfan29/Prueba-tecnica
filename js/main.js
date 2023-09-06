// Filtro de busqueda de tareas pendientes

const filtroInput = document.getElementById("filtroInput");
const formCheckElements = document.querySelectorAll(".form-check");

filtroInput.addEventListener("input", filtrarElementos);

function filtrarElementos() {
  const textoBusqueda = filtroInput.value.toLowerCase();

  formCheckElements.forEach((elemento) => {
    const label = elemento.querySelector(".form-check-label");

    const textoLabel = label.textContent.toLowerCase();

    // Compara el texto del label con el texto de búsqueda
    if (textoLabel.includes(textoBusqueda)) {
      // Muestra el elemento si coincide
      elemento.style.display = "block";
    } else {
      // Oculta el elemento si no coincide
      elemento.style.display = "none";
    }
  });
}
