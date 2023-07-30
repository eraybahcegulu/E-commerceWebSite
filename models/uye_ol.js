const mongoose = require('mongoose');

const Uye_Ol = new mongoose.Schema({
    ad: {type: String, required:true},
    soyad: { type:String,required:true},
    email: { type:String,required:true, unique: true},
    password: { type:String,required:true},
    tarih:{type:Date,default:Date.now}
})

module.exports = mongoose.model('uyeler?', Uye_Ol)