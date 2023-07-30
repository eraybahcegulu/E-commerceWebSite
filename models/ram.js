const mongoose = require('mongoose');

const Ram = new mongoose.Schema({

    ram_ad: { type:String},
    ram_fiyat:{type:String},
    ram_resim:{type:String},
})

module.exports = mongoose.model('ramler?', Ram)