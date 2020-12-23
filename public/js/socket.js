var socket = io();
socket.on('connect', function() {
    console.log('conectado al Servidor');
});

//escuchar  informacion
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el Servidor');
});

//emits para enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Pierre',
    mensaje: 'Hola'
}, function(resp) {
    console.log('Respuesta Server:', resp);
});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Informacion del Servidor: ', mensaje);
})