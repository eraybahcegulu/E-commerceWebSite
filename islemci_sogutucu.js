const mongoose = require('mongoose');

const islemci_sogutucu = require('./models/islemci_sogutucu')

mongoose.connect('mongodb://127.0.0.1/Proje');

islemci_sogutucu.create({
    sogutucu_ad:'COOLER MASTER HYPER 212 DUAL SICKLEFLOW 2x120mm ARGB Led Fanlı CPU Soğutucusu',
    sogutucu_fiyat: '899',
    sogutucu_resim: '/images/Sogutucu/cooler_master_hyper212.jpg'
},(error,post) =>{
    console.log(error,post)
})

islemci_sogutucu.create({
    sogutucu_ad:'MSI MAG CoreLiquid C240 ARGB 240 mm Intel(1700p)-AMD Uyumlu Sıvı Soğutucu',
    sogutucu_fiyat: '2.899',
    sogutucu_resim: '/images/Sogutucu/msi_c240.jpg'
},(error,post) =>{
    console.log(error,post)
})  

islemci_sogutucu.create({
    sogutucu_ad:'COOLER MASTER MASTERLIQUID ML120L V2 SICKLEFLOW RGB LED',
    sogutucu_fiyat: '1.099',
    sogutucu_resim: '/images/Sogutucu/cooler_master_ml120l.jpg'
},(error,post) =>{
    console.log(error,post)
})  

 
islemci_sogutucu.create({
    sogutucu_ad:'MSI MAG CoreLiquid C240 ARGB 240 mm Intel(1700p)-AMD Uyumlu Sıvı Soğutucu',
    sogutucu_fiyat: '2.799',
    sogutucu_resim: '/images/Sogutucu/msi_c240.jpg'
},(error,post) =>{
    console.log(error,post)
})  


islemci_sogutucu.create({
    sogutucu_ad:'CORSAIR iCUE H150i ELITE CAPELLIX 3x120mm RGB FANLI SIVI SOĞUTMA SİSTEMİ',
    sogutucu_fiyat: '4.199',
    sogutucu_resim: '/images/Sogutucu/corsair_h150i.jpg'
},(error,post) =>{
    console.log(error,post)
})  

islemci_sogutucu.create({
    sogutucu_ad:'EVGA CLC 240mm (2x120mm FANLI) RGB LED SIVI SOĞUTMA SİSTEMİ',
    sogutucu_fiyat: '2.699',
    sogutucu_resim: '/images/Sogutucu/evga_clc.jpg'
},(error,post) =>{
    console.log(error,post)
})  

islemci_sogutucu.create({
    sogutucu_ad:'CORSAIR iCUE H100i RGB PRO XT 240mm SIVI SOĞUTMA SİSTEMİ',
    sogutucu_fiyat: '2.999',
    sogutucu_resim: '/images/Sogutucu/corsair_h100i.jpg'
},(error,post) =>{
    console.log(error,post)
})  

 

 

