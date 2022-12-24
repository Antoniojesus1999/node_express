const {io} = require('../index');
const Bici = require('../models/bici');
const Bicis = require('../models/bicis');

const bicis = new Bicis();

bicis.addBici(new Bici('TREEK'));
bicis.addBici(new Bici('CANNONYON'));
bicis.addBici(new Bici('TRYFOX'));
bicis.addBici(new Bici('ORBEA'));

io.on('connection', client => {
   console.log('Cliente conectado');
   client.emit('active-bicis',bicis.getBicis());
   client.on('disconnect', () => { console.log('Cliente desconectado')});

    

    client.on('mensaje',(payload)=>{
       console.log('Mensaje ',payload);

       io.emit('mensaje',{admin:'Nuevo mensaje'});
    });

    client.on('emitir-mensaje',(payload)=>{
      //io.emit('nuevo-mensaje',payload);
      client.broadcast.emit('nuevo-mensaje',payload);
      console.log(payload);
   });

  });