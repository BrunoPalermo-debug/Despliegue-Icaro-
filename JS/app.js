// Calculadora - Botón
const btnCalcular = document.getElementById("btnCalcular");
// Componentes
const procesador = document.getElementById("procesador");
const motherboard = document.getElementById("motherboard");
const gpu = document.getElementById("gpu");
const ram = document.getElementById("ram");
const almacenamiento = document.getElementById("almacenamiento");
const fuente = document.getElementById("fuente");
// Resultado
const resumen = document.getElementById("resumenPC");
// Función 1 → calcular total
function calcularTotal(valores) {
  return (
    valores.procesador +
    valores.motherboard +
    valores.gpu +
    valores.ram +
    valores.almacenamiento +
    valores.fuente
  );
}
// Función 2 → Mostrar resumen
function mostrarResumen(valores, total) {
  resumen.innerHTML = `
    <h5>🧾 Resumen:</h5>
    <p>Procesador: $${valores.procesador.toLocaleString()}</p>
    <p>Motherboard: $${valores.motherboard.toLocaleString()}</p>
    <p>GPU: $${valores.gpu.toLocaleString()}</p>
    <p>RAM: $${valores.ram.toLocaleString()}</p>
    <p>Almacenamiento: $${valores.almacenamiento.toLocaleString()}</p>
    <p>Fuente: $${valores.fuente.toLocaleString()}</p>
    <hr>
    <h4>Total: $${total.toLocaleString()}</h4>
  `;
}
// Evento
if (btnCalcular) {
  btnCalcular.addEventListener("click", () => {
    const valores = {
      procesador: Number(procesador.value) || 0,
      motherboard: Number(motherboard.value) || 0,
      gpu: Number(gpu.value) || 0,
      ram: Number(ram.value) || 0,
      almacenamiento: Number(almacenamiento.value) || 0,
      fuente: Number(fuente.value) || 0,
    };
    const total = calcularTotal(valores);
    // Validación
    if (total === 0) {
      resumen.innerHTML = `
        <div class="alert alert-warning">
          Seleccioná al menos un componente
        </div>
      `;
      return;
    }
    mostrarResumen(valores, total);
  });
}
// Compatibilidad entre componentes
const btnCompatibilidad = document.getElementById("btnCompatibilidad");
// SELECCION
const compA = document.getElementById("componenteA");
const compB = document.getElementById("componenteB");
// RESULTADO
const resultado = document.getElementById("resultadoCompatibilidad");
btnCompatibilidad.addEventListener("click", () => {
  const cpu = compA.value;
  const mother = compB.value;
  if (!cpu || !mother) {
    resultado.innerHTML = `
      <div class="alert alert-warning">
        ⚠️ Seleccioná ambos componentes
      </div>
    `;
    return;
  }
  // Lógica de compatibilidad
  const compatible =
    (cpu === "Intel_LGA1700" && mother === "Motherboard_LGA1700") ||
    (cpu === "AMD_AM5" && mother === "Motherboard_AM5");

  // Resultado
  if (compatible) {
    resultado.innerHTML = `
      <div class="alert alert-success">
        ✅ Componentes compatibles
      </div>
    `;
  } else {
    resultado.innerHTML = `
      <div class="alert alert-danger">
        ❌ Componentes NO compatibles
      </div>
    `;
  }
});
// Galeria de PCs
// CONTENEDOR
const contenedorGaleria = document.getElementById("contenedorGaleria");
// ARMADOS
const builds = [
  {
    nombre: "PC Gamer RGB Intel Gama Media-Alta",
    descripcion: "Intel i5 + RTX 4080",
    imagen: "./Contenidos/BY2AS2506020HVODE3F.webp",
    precio: 1350000,
  },
  {
    nombre: "PC Gamer RGB Gama Alta",
    descripcion: "Ryzen 9 + RX 7700 XT",
    imagen: "./Contenidos/supreme-7950x-e-4070-ti.webp",
    precio: 1650000,
  },
  {
    nombre: "PC Gamer RGB Gama Ultra!",
    descripcion: "Ryzen 7 + RTX 4090",
    imagen:
      "./Contenidos/Hyper-Cyber-Ultra-X-AMD-Ryzen-7-9800X3D-NVIDIA-GeForce-RTX-4090-Gaming-PC_638282b0-e5eb-4c2f-8b08-68f154ad6cd9.902c437fb34e59125fa1a29180e91d48.webp",
    precio: 1950000,
  },
];
// GENERAR GALERÍA
builds.forEach((build) => {
  contenedorGaleria.innerHTML += `
    <div class="col-md-4 mb-4">
      <div class="card galeria-card">
        <img src="${build.imagen}" class="card-img-top" />
        <div class="card-body">
          <h5>${build.nombre}</h5>
          <p>${build.descripcion}</p>
          <h6 class="text-success fw-bold fs-5">
            💲${build.precio.toLocaleString()}
          </h6>
        </div>
      </div>
    </div>
  `;
});
