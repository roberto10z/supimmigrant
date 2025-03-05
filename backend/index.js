const express = require('express');
const axios = require('axios'); // Para fazer requisições HTTP ao Flask
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const FLASK_API_URL = 'http://127.0.0.1:5001'; // URL do backend Flask

// Rota para testar a conexão com o backend Flask
app.get('/api/flask', async (req, res) => {
    try {
        const response = await axios.get(`${FLASK_API_URL}/flask-data`);
        res.json(response.data);
    } catch (error) {
        console.error("Erro ao conectar com o Flask:", error);
        res.status(500).json({ error: "Erro ao conectar com o backend Flask" });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor Node.js rodando na porta ${PORT}`);
});
