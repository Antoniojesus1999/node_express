const Bici = require("./bici");

class Bicis{
    constructor(){
        this.bicis = [];
    }

    addBand(bici = new Bici()) {
        this.bicis.push(bici)
    }

    getBicis(){
        return this.bicis;
    }
    deleteBici(id=''){
        this.bicis = this.bicis.filter(bici => bici.id !==id);
        return this.bicis;
    }

    votarBici(id = ''){
        this.bicis = this.bicis.map(bici =>{
            if(bici.id === id){
                bici.votos++;
                return bici;
            }else{
                return bici;
            }
        })
    }
}

module.exports = Bicis;