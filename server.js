const http = require('http');

const PORT = 8080;
const INSTANCE_NUMBER = process.env.INSTANCE_NUMBER || 'unknown';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Hola, este es el examen de enero 2020, el código se ha descargado desde github\n`);
});

server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});