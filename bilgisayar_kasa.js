const mongoose = require('mongoose');

const bilgisayar_kasa = require('./models/bilgisayar_kasa')

mongoose.connect('mongodb://127.0.0.1/Proje');

bilgisayar_kasa.create({
    kasa_ad:'ASUS ROG STRIX GX601 HELIOS 4x140mm FANLI USB3.1 MidT ATX RGB BEYAZ KASA',
    kasa_fiyat: '6.999',
    kasa_resim: '/images/Bilgisayar_kasa/asus_gx601.jpg'
},(error,post) =>{
    console.log(error,post)
})

bilgisayar_kasa.create({
    kasa_ad:'COOLER MASTER MASTERCASE H500 2x200mm ARGB FANLI MidT ATX KASA',
    kasa_fiyat: '2.699',
    kasa_resim: '/images/Bilgisayar_kasa/cooler_master_h500.jpg'
},(error,post) =>{
    console.log(error,post)
})  

bilgisayar_kasa.create({
    kasa_ad:'COOLER MASTER MASTERBOX MB511 4x120mm ARGB FANLI MidT ATX KASA',
    kasa_fiyat: '1.699',
    kasa_resim: '/images/Bilgisayar_kasa/cooler_master_mb511.jpg'
},(error,post) =>{
    console.log(error,post)
})  

 
bilgisayar_kasa.create({
    kasa_ad:'CORSAIR iCUE 220T 3x120mm RGB FANLI MidT ATX BEYAZ KASA',
    kasa_fiyat: '1.999',
    kasa_resim: '/images/Bilgisayar_kasa/corsair_220t.jpg'
},(error,post) =>{
    console.log(error,post)
})  


bilgisayar_kasa.create({
    kasa_ad:'CORSAIR İCUE 4000X RGB 3x120mm FANLI MidT SİYAH KASA',
    kasa_fiyat: '2.299',
    kasa_resim: '/images/Bilgisayar_kasa/corsair_4000x.jpg'
},(error,post) =>{
    console.log(error,post)
})  

bilgisayar_kasa.create({
    kasa_ad:'MSI MPG GUNGNIR 100D TEMPERED GLASS 2x120mm FANLI MidT ATX KASA',
    kasa_fiyat: '1.799',
    kasa_resim: '/images/Bilgisayar_kasa/msi_mpg_100d.jpg'
},(error,post) =>{
    console.log(error,post)
})  

bilgisayar_kasa.create({
    kasa_ad:'NZXT S340W-B4 ELITE Mid TOWER ATX MAT SİYAH/KIRMIZI KASA',
    kasa_fiyat: '1.399',
    kasa_resim: '/images/Bilgisayar_kasa/nzxt_s340w.jpg'
},(error,post) =>{
    console.log(error,post)
})  

 

 

