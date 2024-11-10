function showWineInfo(index) {
    // Ocultar todos los elementos de información de vino
    const wineInfoItems = document.querySelectorAll('.wine-info-item');
    wineInfoItems.forEach(item => item.classList.remove('active'));

    // Mostrar el elemento seleccionado
    const selectedWineInfo = document.getElementById(`wine-${index}`);
    if (selectedWineInfo) {
        selectedWineInfo.classList.add('active');
    }
}

// Mostrar el primer vino (índice 0) por defecto al cargar la página
window.onload = function() {
    showWineInfo(0);
};
