const mongoose = require('mongoose');

const guc_kaynagi = require('./models/guc_kaynagi')

mongoose.connect('mongodb://127.0.0.1/Proje');

guc_kaynagi.create({
    psu_ad:'ASUS TUF GAMING 450W 80PLUS BRONZE GÜÇ KAYNAĞI',
    psu_fiyat: '1.699',
    psu_resim: '/images/PSU/asus_450w.jpg'
},(error,post) =>{
    console.log(error,post)
})

guc_kaynagi.create({
    psu_ad:'COOLER MASTER MWE 80PLUS BRONZE 750W GÜÇ KAYNAĞI',
    psu_fiyat: '1.479',
    psu_resim: '/images/PSU/Cooler_Master_750w.jpg'
},(error,post) =>{
    console.log(error,post)
})  

guc_kaynagi.create({
    psu_ad:'CORSAIR CX650F RGB 650W 80PLUS BRONZE GÜÇ KAYNAĞI',
    psu_fiyat: '1.899',
    psu_resim: '/images/PSU/corsair_650w.jpg'
},(error,post) =>{
    console.log(error,post)
})  

 
guc_kaynagi.create({
    psu_ad:'EVGA 500 W2 500W 80 PLUS GÜÇ KAYNAĞI',
    psu_fiyat: '999',
    psu_resim: '/images/PSU/evga_500w.jpg'
},(error,post) =>{
    console.log(error,post)
})  


guc_kaynagi.create({
    psu_ad:'ASUS ROG STRIX 850W 80 PLUS GOLD GÜÇ KAYNAĞI',
    psu_fiyat: '4.199',
    psu_resim: '/images/PSU/asus_850w.jpg'
},(error,post) =>{
    console.log(error,post)
})

