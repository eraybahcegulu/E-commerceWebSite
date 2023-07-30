const mongoose = require('mongoose');

const Ekran_Karti = new mongoose.Schema({

    ekran_karti_ad: { type:String},
    ekran_karti_fiyat:{type:String},
    ekran_karti_resim:{type:String},

})

module.exports = mongoose.model('ekran_kartlari?',Ekran_Karti)