class ObjectsConnections {

  constructor(connectionId, io) {
    this.connectionId = connectionId;
    this.io = io;
    this.server = null;
  }

  setServer(socket) {
    this.server = socket;

    this.server.on('button', (data) => {
      console.log('button');
      console.log(data);
      if (data == 4) {
        console.log('LED');
        this.server.emit('led');
      }
    });

    this.server.on('potentiometer', (data) => {
      console.log('potentiometer');
      console.log(data);
    });

    this.server.on('rfid', (data) => {
      console.log('rfid');
      console.log(data);
    });

    this.server.on('accelerometer', () => {
      console.log('accelerometer');
    });
  }
}

export default ObjectsConnections;
