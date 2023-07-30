const mongoose = require('mongoose');

const Bilgisayar_Kasa = new mongoose.Schema({

    kasa_ad: { type:String},
    kasa_fiyat:{type:String},
    kasa_resim:{type:String}

})

module.exports = mongoose.model('bilgisayar_kasaları?',Bilgisayar_Kasa)