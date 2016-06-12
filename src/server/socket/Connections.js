import Products from './../models/Products';

class ObjectsConnections {

  constructor(connectionId, io) {
    this.connectionId = connectionId;
    this.io = io;
    this.server = null;
  }

  setServer(socket) {
    this.server = socket;

    // buttons
    this.server.on('button', data => {
      console.log(`[ BUTTON ] :: ${data}`);
    });

    // potentiometer
    this.server.on('button', data => {
      console.log(`[ POTENTIOMETER ] :: ${data}`);
    });

    // RFID
    this.server.on('rfid', data => {
      console.log(`[ RFID ] :: ${data}`);

      if (data === '0D00334BDDA8') {
        // création du produit banane
        const product = new Products();
        product.icon = 'banane';
        product.name = 'Bananes';
        product.description = '';
        product.type = 'raw';
        product.dlc = 1;
        product.quantity = 2;
        product.author = '575c371b489e38aeb9cd4d24';
        product.foodkeepers = '575c41279675c3f0bb344f70';

        // on sauvegarde les données
        product.save()
          .then(() => console.log('Ajout produit: banane'))
          .catch(error => console.log(error));
      }
    });

    this.server.on('accelerometer', () => {
      console.log('[ ACCELEROMETER ]');
    });
  }
}

export default ObjectsConnections;
