const mongoose = require('mongoose');

const ekran_karti = require('./models/ekran_karti')

mongoose.connect('mongodb://127.0.0.1/Proje');

ekran_karti.create({
    ekran_karti_ad:'ASUS GeForce ROG STRIX RTX 2060 EVO GAMING OC 6GB GDDR6 192Bit DX12 Ekran Kartı',
    ekran_karti_fiyat: '11.999',
    ekran_karti_resim: '/images/Ekran_karti/asus_2060.jpg'
},(error,post) =>{
    console.log(error,post)
})

ekran_karti.create({
    ekran_karti_ad:'ASUS GeForce ROG STRIX RTX 3080 Ti GAMING 12GB GDDR6X 384Bit Nvidia Ekran Kartı',
    ekran_karti_fiyat: '39.999',
    ekran_karti_resim: '/images/Ekran_karti/asus_3080_ti.jpg'
},(error,post) =>{
    console.log(error,post)
})  

ekran_karti.create({
    ekran_karti_ad:'EVGA GeForce RTX 3090 FTW3 ULTRA GAMING 24GB GDDR6X 384Bit ARGB Ekran Kartı',
    ekran_karti_fiyat: '64.999',
    ekran_karti_resim: '/images/Ekran_karti/evga_3090.jpg'
},(error,post) =>{
    console.log(error,post)
})  

 
ekran_karti.create({
    ekran_karti_ad:'GIGABYTE GEFORCE RTX 2060 GAMING OC 12GB GDDR6 192Bit Nvidia Ekran Kartı',
    ekran_karti_fiyat: '11.499',
    ekran_karti_resim: '/images/Ekran_karti/gigabyte_2060.jpg'
},(error,post) =>{
    console.log(error,post)
})  


ekran_karti.create({
    ekran_karti_ad:'MSI GEFORCE RTX 2060 SUPER VENTUS GP 8GB GDDR6 256bit NVIDIA Ekran Kartı',
    ekran_karti_fiyat: '10.599',
    ekran_karti_resim: '/images/Ekran_karti/msi_2060_super.jpg'
},(error,post) =>{
    console.log(error,post)
})  

ekran_karti.create({
    ekran_karti_ad:'MSI GEFORCE RTX 3050 GAMING X 8GB GDDR6 128Bit NVIDIA Ekran Kartı',
    ekran_karti_fiyat: '8.899',
    ekran_karti_resim: '/images/Ekran_karti/msi_3050.jpg'
},(error,post) =>{
    console.log(error,post)
})  

ekran_karti.create({
    ekran_karti_ad:'MSI RADEON RX 6600 XT GAMING X 8GB GDDR6 128Bit AMD Ekran Kartı',
    ekran_karti_fiyat: '10.199',
    ekran_karti_resim: '/images/Ekran_karti/msi_6600.jpg'
},(error,post) =>{
    console.log(error,post)
})  

 

 

