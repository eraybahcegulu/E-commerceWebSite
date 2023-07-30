const mongoose = require('mongoose');

const Anakart = new mongoose.Schema({

    anakart_ad: { type:String},
    anakart_fiyat:{type:String},
    anakart_resim: {type:String }

})

module.exports = mongoose.model('anakartlar?',Anakart)