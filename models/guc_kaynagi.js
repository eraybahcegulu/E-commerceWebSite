const mongoose = require('mongoose');

const Guc_Kaynagi = new mongoose.Schema({

    psu_ad: { type:String},
    psu_fiyat:{type:String},
    psu_resim:{type:String},

})

module.exports = mongoose.model('guc_kaynaklari?',Guc_Kaynagi)