import Logdown from 'logdown';
import Connections from './Connections';

class SocketIOServer {

  constructor(socketio) {
    this.io = socketio;
    this.connections = [];

    this.logger = new Logdown({ prefix: 'socket.io' });

    this.io.sockets.on('connection', (socket) => {
      this.logger.info('New client connection detected');

      socket.on('newObjectId', (objectId) => {
        this.newObjectId(socket, objectId);
      });
      socket.on('disconnect', () => {
        //this.logger.info('Client ')
      })
    });
  }

  newObjectId(socket, objectId) {
    const room = this.io.sockets.adapter.rooms[objectId];

    if (room === undefined) {
      socket.emit('runObjectId', objectId);

      socket.join(objectId);
      this.logger.info(`New hosting created: ${objectId}`);

      // we create new ObjectsConnections
      this.connections[objectId] = new Connections(objectId, this.io);
      this.connections[objectId].setServer(socket);
    } else {
      this.logger.error(`The room ${objectId} already set, trying another one`);
    }
  }
}

export default SocketIOServer;
