document.addEventListener("DOMContentLoaded", function () {
  actualizarDiasRestantes();
  setInterval(actualizarDiasRestantes, 24 * 60 * 60 * 1000); // actualizar diario

  // --- Datos ---
  const dataLine1 = {
    labels: ['Día 1', 'Día 2', 'Día 3', 'Día 4', 'Día 5'],
    datasets: [{
      label: 'Km recorridos en Semana 39',
      data: [10, 10, 18, 17, 28],
      borderColor: 'rgba(75, 192, 192, 1)',
      fill: true,
      tension: 0.1
    }]
  };

  const dataLine2 = {
    labels: ['Día 1', 'Día 2', 'Día 3', 'Día 4'],
    datasets: [{
      label: 'Km recorridos en Semana 37',
      data: [9, 15, 7, 11],
      borderColor: 'rgba(153, 102, 255, 1)',
      fill: true,
      tension: 0.1
    }]
  };

  const dataLine3 = {
    labels: ['Día 1', 'Día 2', 'Día 3', 'Día 4'],
    datasets: [{
      label: 'Km recorridos en Semana 38',
      data: [6, 5, 5, 80],
      borderColor: 'rgba(255, 99, 132, 1)',
      fill: true,
      tension: 0.1
    }]
  };

  // --- Configuración base ---
  const baseConfig = {
    type: 'line',
    options: { scales: { y: { beginAtZero: true } } }
  };

  // --- Crear gráficos ---
  new Chart(document.getElementById('myChart-line-1'), { ...baseConfig, data: dataLine1 });
  new Chart(document.getElementById('myChart-line-2'), { ...baseConfig, data: dataLine2 });
  new Chart(document.getElementById('myChart-line-3'), { ...baseConfig, data: dataLine3 });

  // --- Función de cuenta regresiva ---
  function actualizarDiasRestantes() {
    const pageTitle = document.getElementById('pageTitle').innerText;
    // Separa después de ":" → asegura que tenés la fecha
    const objetivoDate = new Date(pageTitle.split(": ")[1]);
    const currentDate = new Date();
    const timeDiff = objetivoDate - currentDate;
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    document.getElementById('result').textContent =
      `Faltan ${daysDiff} días para llegar a la carrera.`;
  }
});
