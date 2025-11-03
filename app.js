// Datos reales de ejemplo basados en tu Excel
const sampleData = {
    'EX-1116': {
        op: 'EX-1116',
        nombre: 'GREGORIO VILLAUVA',
        cantidad: 150,
        tela: 'NOMEX GRIS',
        talla: 'L',
        link: 'https://ccb.com/op/EX-1116'
    },
    'EX-1117': {
        op: 'EX-1117',
        nombre: 'JUAN QUARTILEMA',
        cantidad: 145,
        tela: 'NOMEX GRIS',
        talla: 'M',
        link: 'https://ccb.com/op/EX-1117'
    },
    'EX-1118': {
        op: 'EX-1118',
        nombre: 'CARLOS CARPIO',
        cantidad: 160,
        tela: 'NOMEX GRIS',
        talla: 'XL',
        link: 'https://ccb.com/op/EX-1118'
    },
    'EX-1119': {
        op: 'EX-1119',
        nombre: 'ESTEBAN CONSTANTE',
        cantidad: 155,
        tela: 'NOMEX GRIS',
        talla: 'L',
        link: 'https://ccb.com/op/EX-1119'
    },
    'EX-1120': {
        op: 'EX-1120',
        nombre: 'CRISTIAN GORDON',
        cantidad: 140,
        tela: 'NOMEX GRIS',
        talla: 'M',
        link: 'https://ccb.com/op/EX-1120'
    },
    'EX-1121': {
        op: 'EX-1121',
        nombre: 'JOSE MORA',
        cantidad: 165,
        tela: 'NOMEX GRIS',
        talla: 'XL',
        link: 'https://ccb.com/op/EX-1121'
    },
    'EX-1122': {
        op: 'EX-1122',
        nombre: 'SERGIO CRUZ',
        cantidad: 152,
        tela: 'NOMEX GRIS',
        talla: 'L',
        link: 'https://ccb.com/op/EX-1122'
    },
    'EX-1123': {
        op: 'EX-1123',
        nombre: 'JACKSON LABORDE',
        cantidad: 158,
        tela: 'NOMEX GRIS',
        talla: 'M',
        link: 'https://ccb.com/op/EX-1123'
    },
    'EX-1124': {
        op: 'EX-1124',
        nombre: 'OVEROL ENTERIZO NOMEX GRIS',
        cantidad: 168,
        tela: 'NOMEX GRIS',
        talla: 35,
        link: 'https://ccb.com/op/EX-1124'
    },
    'EX-1125': {
        op: 'EX-1125',
        nombre: 'OVEROL ENTERIZO NOMEX GRIS',
        cantidad: 165,
        tela: 'NOMEX GRIS',
        talla: 34,
        link: 'https://ccb.com/op/EX-1125'
    },
    'EX-1134': {
        op: 'EX-1134',
        nombre: 'OVEROL ENTERIZO NOMEX GRIS',
        cantidad: 168,
        tela: 'NOMEX CONFORT GRIS 4,5 OZ',
        talla: 35,
        link: 'https://ccb.com/op/EX-1134'
    }
};

function searchOP() {
    const opInput = document.getElementById('op-input').value.trim().toUpperCase();
    const resultsBody = document.getElementById('results-body');
    
    if (!opInput) {
        alert('Por favor ingrese un número de OP');
        return;
    }

    // Mostrar carga
    resultsBody.innerHTML = `
        <tr>
            <td colspan="6" style="text-align: center; padding: 3rem;">
                <div style="display: inline-block; padding: 1rem 2rem; background: var(--light-bg); border-radius: 8px;">
                    Buscando: <strong>${opInput}</strong>
                </div>
            </td>
        </tr>
    `;

    // Simular búsqueda
    setTimeout(() => {
        const data = sampleData[opInput];
        
        if (data) {
            resultsBody.innerHTML = `
                <tr>
                    <td><strong>${data.op}</strong></td>
                    <td>${data.nombre}</td>
                    <td>${data.cantidad}</td>
                    <td>${data.tela}</td>
                    <td>${data.talla}</td>
                    <td>
                        <div class="action-buttons">
                            <a href="${data.link}" target="_blank" class="btn btn-primary btn-sm">
                                Ver Link
                            </a>
                            <button class="btn btn-success btn-sm" onclick="copyLink('${data.link}')">
                                Copiar
                            </button>
                        </div>
                    </td>
                </tr>
            `;
        } else {
            // Si no encuentra datos específicos, generar datos automáticos para OPs en rango 0786-0790
            const opNumber = parseInt(opInput.split('-')[1]);
            if (opNumber >= 786 && opNumber <= 790) {
                resultsBody.innerHTML = `
                    <tr>
                        <td><strong>${opInput}</strong></td>
                        <td>USUARIO ${opInput}</td>
                        <td>${Math.floor(Math.random() * 100) + 100}</td>
                        <td>TELA STANDARD</td>
                        <td>${['S','M','L','XL'][Math.floor(Math.random() * 4)]}</td>
                        <td>
                            <div class="action-buttons">
                                <a href="https://ccb.com/op/${opInput}" target="_blank" class="btn btn-primary btn-sm">
                                    Ver Link
                                </a>
                                <button class="btn btn-success btn-sm" onclick="copyLink('https://ccb.com/op/${opInput}')">
                                    Copiar
                                </button>
                            </div>
                        </td>
                    </tr>
                `;
            } else {
                resultsBody.innerHTML = `
                    <tr>
                        <td colspan="6" style="text-align: center; padding: 3rem; color: var(--danger-color);">
                            No se encontraron resultados para: <strong>${opInput}</strong>
                        </td>
                    </tr>
                `;
            }
        }
    }, 1000);
}

// Datos reales de ejemplo basados en tu Excel
const sampleData = {
    'EX-1116': {
        op: 'EX-1116',
        nombre: 'GREGORIO VILLAUVA',
        cantidad: 150,
        tela: 'NOMEX GRIS',
        talla: 'L',
        link: 'https://ccb.com/op/EX-1116'
    },
    'EX-1117': {
        op: 'EX-1117',
        nombre: 'JUAN QUARTILEMA',
        cantidad: 145,
        tela: 'NOMEX GRIS',
        talla: 'M',
        link: 'https://ccb.com/op/EX-1117'
    },
    'EX-1118': {
        op: 'EX-1118',
        nombre: 'CARLOS CARPIO',
        cantidad: 160,
        tela: 'NOMEX GRIS',
        talla: 'XL',
        link: 'https://ccb.com/op/EX-1118'
    },
    'EX-1119': {
        op: 'EX-1119',
        nombre: 'ESTEBAN CONSTANTE',
        cantidad: 155,
        tela: 'NOMEX GRIS',
        talla: 'L',
        link: 'https://ccb.com/op/EX-1119'
    },
    'EX-1120': {
        op: 'EX-1120',
        nombre: 'CRISTIAN GORDON',
        cantidad: 140,
        tela: 'NOMEX GRIS',
        talla: 'M',
        link: 'https://ccb.com/op/EX-1120'
    },
    'EX-1121': {
        op: 'EX-1121',
        nombre: 'JOSE MORA',
        cantidad: 165,
        tela: 'NOMEX GRIS',
        talla: 'XL',
        link: 'https://ccb.com/op/EX-1121'
    },
    'EX-1122': {
        op: 'EX-1122',
        nombre: 'SERGIO CRUZ',
        cantidad: 152,
        tela: 'NOMEX GRIS',
        talla: 'L',
        link: 'https://ccb.com/op/EX-1122'
    },
    'EX-1123': {
        op: 'EX-1123',
        nombre: 'JACKSON LABORDE',
        cantidad: 158,
        tela: 'NOMEX GRIS',
        talla: 'M',
        link: 'https://ccb.com/op/EX-1123'
    },
    'EX-1124': {
        op: 'EX-1124',
        nombre: 'OVEROL ENTERIZO NOMEX GRIS',
        cantidad: 168,
        tela: 'NOMEX GRIS',
        talla: 35,
        link: 'https://ccb.com/op/EX-1124'
    },
    'EX-1125': {
        op: 'EX-1125',
        nombre: 'OVEROL ENTERIZO NOMEX GRIS',
        cantidad: 165,
        tela: 'NOMEX GRIS',
        talla: 34,
        link: 'https://ccb.com/op/EX-1125'
    },
    'EX-1134': {
        op: 'EX-1134',
        nombre: 'OVEROL ENTERIZO NOMEX GRIS',
        cantidad: 168,
        tela: 'NOMEX CONFORT GRIS 4,5 OZ',
        talla: 35,
        link: 'https://ccb.com/op/EX-1134'
    }
};

// Función de búsqueda MODIFICADA
function searchOP() {
    const opInput = document.getElementById('op-input').value.trim().toUpperCase();
    const resultsBody = document.getElementById('results-body');
    
    if (!opInput) {
        alert('Por favor ingrese un número de OP');
        return;
    }

    // Mostrar carga
    resultsBody.innerHTML = `
        <tr>
            <td colspan="6" style="text-align: center; padding: 3rem;">
                <div style="display: inline-block; padding: 1rem 2rem; background: var(--light-bg); border-radius: 8px;">
                    Buscando: <strong>${opInput}</strong>
                </div>
            </td>
        </tr>
    `;

    // Simular búsqueda
    setTimeout(() => {
        const data = sampleData[opInput];
        
        if (data) {
            resultsBody.innerHTML = `
                <tr>
                    <td><strong>${data.op}</strong></td>
                    <td>${data.nombre}</td>
                    <td>${data.cantidad}</td>
                    <td>${data.tela}</td>
                    <td>${data.talla}</td>
                    <td>
                        <div class="action-buttons">
                            <a href="${data.link}" target="_blank" class="btn btn-primary btn-sm">
                                Ver Link
                            </a>
                            <button class="btn btn-success btn-sm" onclick="copyLink('${data.link}')">
                                Copiar
                            </button>
                        </div>
                    </td>
                </tr>
            `;
        } else {
            resultsBody.innerHTML = `
                <tr>
                    <td colspan="6" style="text-align: center; padding: 3rem; color: var(--text-muted);">
                        No se encontraron resultados para: <strong>${opInput}</strong>
                    </td>
                </tr>
            `;
        }
    }, 1000);
}
// En tu app.js o dentro del script del HTML
async function loadUserData(op) {
    try {
        const response = await fetch(`/buscar-op?op=${op}`);
        const user = await response.json();
        
        if (user && user.error) {
            showError(op);
        } else if (user) {
            currentOp.textContent = user.op;
            userName.textContent = user.nombre_usuario;
            quantity.textContent = user.cantidad_fabricada;
            fabric.textContent = user.tela;
            size.textContent = user.talla;
            link.textContent = user.link;
            link.href = `http://${user.link}`;
            empresa.textContent = user.empresa || "SERTECPET S.A. (Ecuador)";
            hideError();
        } else {
            showError(op);
        }
    } catch (error) {
        console.error('Error:', error);
        showError(op);
    }
}

// Función para copiar link MODIFICADA
function copyLink(link) {
    navigator.clipboard.writeText(link).then(() => {
        alert('Enlace copiado al portapapeles: ' + link);
    });
}
// Agregar esta línea en la función loadUserData después de las otras asignaciones
document.getElementById('empresa').textContent = "SERTECPET S.A. (Ecuador)";

// Función para copiar link MODIFICADA
function copyLink(link) {
    navigator.clipboard.writeText(link).then(() => {
        alert('Enlace copiado al portapapeles: ' + link);
    });
}