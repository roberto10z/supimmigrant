from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Habilita CORS para permitir conexões externas

@app.route('/flask-data')
def send_data():
    return jsonify({"message": "Dados do Flask enviados com sucesso!"})

if __name__ == '__main__':
    app.run(debug=True, port=5001)
