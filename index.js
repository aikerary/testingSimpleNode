// index.js

// Importa el módulo http de Node.js
const http = require('http');

// Crea un servidor HTTP que escuche en el puerto 3000
const server = http.createServer((req, res) => {
  // Establece el encabezado de respuesta con el código de estado y el tipo de contenido
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Escribe el mensaje "Hello, World" en la respuesta
  res.end('Hello, World\n');
});

// Escucha en el puerto 3000 y la dirección local (127.0.0.1)
server.listen(3000, '127.0.0.1', () => {
  console.log('Servidor en ejecución en http://127.0.0.1:3000/');
});
