const mongoose = require('mongoose');

const Islemcı_Sogutucu = new mongoose.Schema({

    sogutucu_ad: { type:String},
    sogutucu_fiyat:{type:String},
    sogutucu_resim:{type:String},
})

module.exports = mongoose.model('islemci_sogutucular?',Islemcı_Sogutucu)