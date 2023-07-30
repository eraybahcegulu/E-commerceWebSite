const mongoose = require('mongoose');

const index_firsat = require('./models/index_firsat')

mongoose.connect('mongodb://127.0.0.1/Proje');

index_firsat.create({
    firsat_ad:'ASUS GeForce ROG STRIX RTX 2060 EVO GAMING OC 6GB GDDR6 192Bit DX12 Ekran Kartı',
    eski_fiyat: '14.000',
    firsat_fiyat: '11.999',
    firsat_resim: '/images/Ekran_karti/asus_2060.jpg'
    
},(error,post) =>{
    console.log(error,post)
})

index_firsat.create({
    firsat_ad:'NZXT S340W-B4 ELITE Mid TOWER 4x FANLI ATX MAT SİYAH/KIRMIZI KASA',
    eski_fiyat: '1.800',
    firsat_fiyat: '1.399',
    firsat_resim: '/images/Bilgisayar_kasa/nzxt_s340w.jpg'
},(error,post) =>{
    console.log(error,post)
})  

index_firsat.create({
    firsat_ad:'CORSAIR iCUE H150i ELITE CAPELLIX 3x120mm RGB FANLI SIVI SOĞUTMA SİSTEMİ',
    eski_fiyat: '4.600',
    firsat_fiyat: '4.199',
    firsat_resim: '/images/Sogutucu/corsair_h150i.jpg'
},(error,post) =>{
    console.log(error,post)
})  

 
index_firsat.create({
    firsat_ad:'MSI B560M-A PRO Intel B560 Soket 1200 DDR4 5200MHz (OC) M.2 Anakart',
    eski_fiyat: '2.200',
    firsat_fiyat: '1.899',
    firsat_resim: '/images/Anakart/msi_b560m-a.jpg'
},(error,post) =>{
    console.log(error,post)
})  

 

 

