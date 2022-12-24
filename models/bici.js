const {v4: uuidV4} = require('uuid');
class Bici{
    constructor(nombre = 'no-name'){
        this.id = uuidV4();
        this.nombre = nombre;
        this.votos=0;
    }
}

module.exports = Bici;