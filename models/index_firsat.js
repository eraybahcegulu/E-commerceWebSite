const mongoose = require('mongoose');

const Index_Firsat = new mongoose.Schema({

    firsat_ad: { type:String},
    firsat_fiyat:{type:String},
    firsat_resim:{type:String},
    eski_fiyat:{type:String}

})

module.exports = mongoose.model('firsat_urunleri?',Index_Firsat)