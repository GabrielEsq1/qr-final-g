<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verificación de Promotores CCB</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background-color: #f5f7fa;
            color: #333;
            line-height: 1.6;
            padding: 20px;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
            padding: 30px;
        }
        
        h1 {
            color: #2c3e50;
            text-align: center;
            margin-bottom: 30px;
            font-weight: 600;
            border-bottom: 2px solid #eee;
            padding-bottom: 15px;
        }
        
        .search-section {
            background: #f8f9fa;
            padding: 25px;
            border-radius: 8px;
            margin-bottom: 30px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }
        
        .search-title {
            font-size: 1.2rem;
            margin-bottom: 15px;
            color: #2c3e50;
            font-weight: 500;
        }
        
        .input-group {
            display: flex;
            gap: 15px;
            margin-bottom: 15px;
            flex-wrap: wrap;
        }
        
        input[type="text"] {
            flex: 1;
            min-width: 250px;
            padding: 12px 15px;
            border: 1px solid #ddd;
            border-radius: 6px;
            font-size: 16px;
            transition: all 0.3s;
        }
        
        input[type="text"]:focus {
            border-color: #3498db;
            box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
            outline: none;
        }
        
        .button-group {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }
        
        button {
            padding: 12px 20px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 500;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }
        
        .btn-search {
            background-color: #3498db;
            color: white;
        }
        
        .btn-scan {
            background-color: #2ecc71;
            color: white;
        }
        
        .btn-clear {
            background-color: #e74c3c;
            color: white;
        }
        
        button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        
        .btn-search:hover {
            background-color: #2980b9;
        }
        
        .btn-scan:hover {
            background-color: #27ae60;
        }
        
        .btn-clear:hover {
            background-color: #c0392b;
        }
        
        .error-message {
            background-color: #ffeaa7;
            color: #d35400;
            padding: 12px 15px;
            border-radius: 6px;
            margin-top: 15px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .error-message::before {
            content: "⚠️";
        }
        
        .results-section {
            margin-top: 30px;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        th {
            background-color: #3498db;
            color: white;
            text-align: left;
            padding: 15px;
            font-weight: 500;
        }
        
        td {
            padding: 15px;
            border-bottom: 1px solid #eee;
        }
        
        tr:hover {
            background-color: #f8f9fa;
        }
        
        .placeholder {
            text-align: center;
            color: #7f8c8d;
            padding: 40px;
            font-style: italic;
        }
        
        @media (max-width: 768px) {
            .input-group {
                flex-direction: column;
            }
            
            input[type="text"] {
                min-width: 100%;
            }
            
            .button-group {
                width: 100%;
            }
            
            button {
                flex: 1;
            }
            
            table {
                display: block;
                overflow-x: auto;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Verificación de Promotores CCB</h1>
        
        <div class="search-section">
            <div class="search-title">Buscar por OP:</div>
            <div class="input-group">
                <input type="text" id="op-input" placeholder="Ej: EX-1121, EX-0777, e00777..." value="EX-1121">
            </div>
            <div class="button-group">
                <button class="btn-search" onclick="searchOP()">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="currentColor"/>
                    </svg>
                    Buscar
                </button>
                <button class="btn-scan" onclick="scanQR()">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4H8V8H4V4ZM16 4H20V8H16V4ZM4 16H8V20H4V16ZM16 16H20V20H16V16ZM6 6V18H18V6H6ZM16 6V10H20V6H16ZM4 10V6H8V10H4ZM4 14V18H8V14H4ZM18 14V18H14V14H18ZM10 14V18H6V14H10ZM10 6V10H14V6H10Z" fill="currentColor"/>
                    </svg>
                    Escanear QR
                </button>
                <button class="btn-clear" onclick="clearSearch()">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor"/>
                    </svg>
                    Limpiar
                </button>
            </div>
            <div class="error-message" id="error-message">
                Error al conectar con el servidor
            </div>
        </div>
        
        <div class="results-section">
            <table>
                <thead>
                    <tr>
                        <th>OP</th>
                        <th>CLIENTE</th>
                        <th>NOMBRE</th>
                        <th>DESCRIPCIÓN</th>
                        <th>CANTIDAD</th>
                    </tr>
                </thead>
                <tbody id="results-body">
                    <tr>
                        <td colspan="5" class="placeholder">Ingrese un OP para buscar</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <script>
        // Inicialmente ocultar el mensaje de error
        document.getElementById('error-message').style.display = 'none';
        
        function searchOP() {
            const opInput = document.getElementById('op-input').value.trim();
            const resultsBody = document.getElementById('results-body');
            const errorMessage = document.getElementById('error-message');
            
            if (!opInput) {
                resultsBody.innerHTML = '<tr><td colspan="5" class="placeholder">Ingrese un OP para buscar</td></tr>';
                return;
            }
            
            // Simulación de búsqueda
            resultsBody.innerHTML = `
                <tr>
                    <td colspan="5" style="text-align: center; padding: 30px;">
                        <div style="display: inline-block; padding: 10px 20px; background: #f8f9fa; border-radius: 6px;">
                            Buscando: <strong>${opInput}</strong>
                        </div>
                    </td>
                </tr>
            `;
            
            // Simulación de respuesta después de un tiempo
            setTimeout(() => {
                // Simular error de conexión aleatoriamente
                if (Math.random() > 0.7) {
                    errorMessage.style.display = 'flex';
                    resultsBody.innerHTML = '<tr><td colspan="5" class="placeholder">No se pudieron cargar los resultados</td></tr>';
                } else {
                    errorMessage.style.display = 'none';
                    // Simular datos de ejemplo CORREGIDOS
                    resultsBody.innerHTML = `
                        <tr>
                            <td>${opInput}</td>
                            <td>CLI-${Math.floor(Math.random() * 1000)}</td>
                            <td>Nombre del Cliente</td>
                            <td>Descripción del producto o servicio</td>
                            <td>${Math.floor(Math.random() * 100) + 1}</td>
                        </tr>
                        <tr>
                            <td>${opInput}-A</td>
                            <td>CLI-${Math.floor(Math.random() * 1000)}</td>
                            <td>Otro Cliente</td>
                            <td>Otra descripción relevante</td>
                            <td>${Math.floor(Math.random() * 50) + 1}</td>
                        </tr>
                    `;
                }
            }, 1500);
        }
        
        function scanQR() {
            alert('Función de escaneo QR activada. En una aplicación real, esto abriría la cámara.');
        }
        
        function clearSearch() {
            document.getElementById('op-input').value = '';
            document.getElementById('results-body').innerHTML = '<tr><td colspan="5" class="placeholder">Ingrese un OP para buscar</td></tr>';
            document.getElementById('error-message').style.display = 'none';
        }
        
        // Permitir búsqueda con Enter CORREGIDO
        document.getElementById('op-input').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchOP();
            }
        });
    </script>
</body>
</html>