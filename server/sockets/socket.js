const { io } = require('../server');


io.on('connection', (client) => {

    console.log('Usuario Conectado');

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //escuchar cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        /* if (mensaje.usuario) {
            callback({
                respuesta: 'TODO SALIO BIEN'
            });
        } else {

            callback({
                respuesta: 'TODO SALIO MAL!!'
            });
        } */

    });

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido'
    });
});