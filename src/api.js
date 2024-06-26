import io from 'socket.io-client';

const socket = io('http://localhost:3001');

const Api = {
  obtenerRegistros: () => {
    return new Promise((resolve, reject) => {
      // Manejar evento de conexión exitosa
      socket.on('connect', () => {
        console.log('Socket connected successfully!');
      });

      // Manejar evento de error de conexión
      socket.on('connect_error', (error) => {
        console.error('Socket connection error:', error);
        reject(error); // Rechazar la promesa en caso de error de conexión
      });

      // Manejar evento de desconexión
      socket.on('disconnect', () => {
        console.log('Socket disconnected');
        // Puedes intentar volver a conectar aquí si es necesario
      });

      // Manejar evento de recepción de comandos
      socket.on('comandos', (data) => {
        console.log('Comandos recibidos:', data.comando);
        resolve(data.comando); // Resolver la promesa con los comandos recibidos
      });
    });
  },
};

export default Api;
