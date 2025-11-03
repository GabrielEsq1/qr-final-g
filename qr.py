import pandas as pd
from flask import Flask, request, jsonify, render_template
import os

app = Flask(__name__)

# Ruta para buscar OP en el Excel
@app.route('/buscar-op')
def buscar_op():
    try:
        op_buscado = request.args.get('op', '').upper()
        
        # Cargar el archivo Excel
        excel_path = 'USUARIOS_SERTECPET.xlsx'
        df = pd.read_excel(excel_path, sheet_name='Hoja1')
        
        # Buscar la OP en la columna correspondiente
        # Ajusta los nombres de columnas según tu Excel
        resultado = df[df['OP'] == op_buscado]
        
        if not resultado.empty:
            usuario = {
                'op': resultado['OP'].iloc[0],
                'nombre_usuario': resultado['NOMBRE USUARIO'].iloc[0],
                'cantidad_fabricada': int(resultado['CANTIDAD FABRICADA'].iloc[0]),
                'tela': resultado['TELA'].iloc[0],
                'talla': resultado['TALLA'].iloc[0],
                'link': resultado['LINK'].iloc[0],
                'empresa': resultado['EMPRESA'].iloc[0] if 'EMPRESA' in resultado.columns else "SERTECPET S.A. (Ecuador)"
            }
            return jsonify(usuario)
        else:
            return jsonify({'error': 'OP no encontrada'}), 404
            
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'error': 'Error interno del servidor'}), 500

# Ruta principal para servir el HTML
@app.route('/')
def index():
    return render_template('tu_archivo_html.html')

if __name__ == '__main__':
    app.run(debug=True)