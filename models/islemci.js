const mongoose = require('mongoose');

const Islemci = new mongoose.Schema({

    islemci_ad: { type:String},
    islemci_fiyat:{type:String},
    islemci_resim:{type:String}

})

module.exports = mongoose.model('islemciler?', Islemci)