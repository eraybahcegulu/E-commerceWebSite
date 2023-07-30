const mongoose = require('mongoose');

const Depolama = new mongoose.Schema({

    depolama_ad: { type:String},
    depolama_fiyat:{type:String},
    depolama_resim:{type:String},
})

module.exports = mongoose.model('depolama_birimleri?',Depolama)