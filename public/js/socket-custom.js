

var socket = io();

//Escuchar
socket.on('connect', function () {
    console.log("Conectado al servidor");
})

socket.on('disconnect', function () {
    console.log("desconectado del servidor");
});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Alejandro',
    mensaje: 'Hola mundo'
}, function (resp) {
    console.log('Respuesta server', resp);
});

//Escuchar del servidor
socket.on('enviarMensaje', function (mensaje) {
    console.log('Servidor:', mensaje);
})