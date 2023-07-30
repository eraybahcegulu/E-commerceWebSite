const mongoose = require('mongoose');

const Iletisim = new mongoose.Schema({
    ad: {type: String, require:true},
    soyad: { type:String,require:true},
    email: { type:String,require:true},
    tel: { type:String,require:true},
    mesaj: { type:String,require:true},
    tarih:{type:Date,default:Date.now}
})

module.exports = mongoose.model('iletisim?',Iletisim)