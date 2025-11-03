// Código JavaScript CORREGIDO - SIN ERRORES

function scanQR() {
    alert("Función de escaneo QR activada. En una aplicación real, esto abriría la cámara.");
}

function clearSearch() {
    document.getElementById('op-input').value = "";
    document.getElementById('results-body').innerHTML = '<tr><td colspan="5" class="placeholder">Ingrese un OP para buscar</td></tr>';
    document.getElementById('error-message').style.display = 'none';
}

// Permitir búsqueda con Enter CORREGIDO
document.getElementById('op-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchOP();
    }
});