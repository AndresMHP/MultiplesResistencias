let voltaje;
let numResistencias;

function ingresarVoltaje() {
    voltaje = parseFloat(document.getElementById('voltaje').value);
    if (isNaN(voltaje) || voltaje <= 0) {
        alert("Por favor, ingresa un voltaje válido.");
        return;
    }
    document.getElementById('paso1').style.display = 'none';
    document.getElementById('paso2').style.display = 'block';
}

function ingresarNumResistencias() {
    numResistencias = parseInt(document.getElementById('numResistencias').value);
    if (isNaN(numResistencias) || numResistencias <= 0) {
        alert("Por favor, ingresa un número válido de resistencias.");
        return;
    }

    // Generar campos para resistencias
    const contenedorResistencias = document.getElementById('resistencias');
    contenedorResistencias.innerHTML = '';
    for (let i = 1; i <= numResistencias; i++) {
        contenedorResistencias.innerHTML += `
            <label for="resistencia${i}">Resistencia ${i} (Ω):</label>
            <input type="number" id="resistencia${i}" required>
        `;
    }

    document.getElementById('paso2').style.display = 'none';
    document.getElementById('paso3').style.display = 'block';
}

function calcular() {
    const resistencias = [];
    for (let i = 1; i <= numResistencias; i++) {
        const resistencia = parseFloat(document.getElementById(`resistencia${i}`).value);
        if (isNaN(resistencia) || resistencia <= 0) {
            alert(`Por favor, ingresa un valor válido para la resistencia ${i}.`);
            return;
        }
        resistencias.push(resistencia);
    }

    // Calcular resistencia equivalente
    const resistenciaEquivalente = resistencias.reduce((acc, r) => acc + r, 0);

    // Calcular corriente y potencia
    const corriente = voltaje / resistenciaEquivalente;
    const potencia = voltaje * corriente;

    // Mostrar resultados
    document.getElementById('corriente').innerText = corriente.toFixed(2);
    document.getElementById('potencia').innerText = potencia.toFixed(2);

    document.getElementById('paso3').style.display = 'none';
    document.getElementById('resultado').style.display = 'block';
}
