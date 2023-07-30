const mongoose = require('mongoose');

const islemci = require('./models/islemci')

mongoose.connect('mongodb://127.0.0.1/Proje');

islemci.create({
    islemci_ad:'AMD Ryzen™5 5600X Soket AM4 + Wraith Stealth 3.7GHz 32MB 65W 7nm İşlemci',
    islemci_fiyat: '5.199',
    islemci_resim: '/images/Islemci/ryzen5_5000.jpg'
},(error,post) =>{
    console.log(error,post)
})

islemci.create({
    islemci_ad:'AMD Ryzen™5 5600G Soket AM4 + Wraith Stealth 3.9 GHz 19MB 65W 7nm İşlemci',
    islemci_fiyat: '4.199',
    islemci_resim: '/images/Islemci/ryzen5_5000_2.jpg'
},(error,post) =>{
    console.log(error,post)
})  

islemci.create({
    islemci_ad:'Intel Core i3 10100F Soket 1200 10.Nesil 3.60GHz 6MB Önbellek 14nm İşlemci',
    islemci_fiyat: '1.099',
    islemci_resim: '/images/Islemci/intel_i3.jpg'
},(error,post) =>{
    console.log(error,post)
})  

 
islemci.create({
    islemci_ad:'Intel Core i5 12500 Soket 1700 12. Nesil 3 GHz 18MB Önbellek 10nm İşlemci',
    islemci_fiyat: '4.099',
    islemci_resim: '/images/Islemci/intel_i5.jpg'
},(error,post) =>{
    console.log(error,post)
})  


islemci.create({
    islemci_ad:'AMD Ryzen™7 5800X Soket AM4 3.8GHz 32MB 105W 7nm İşlemci',
    islemci_fiyat: '6.699',
    islemci_resim: '/images/Islemci/ryzen7_2.jpg'
},(error,post) =>{
    console.log(error,post)
})  

islemci.create({
    islemci_ad:'AMD Ryzen™9 3900X Soket AM4+WraithPrism(RGB) 3.8 GHz 64MB 105W 7nm İşlemci',
    islemci_fiyat: '9.699',
    islemci_resim: '/images/Islemci/ryzen9.jpg'
},(error,post) =>{
    console.log(error,post)
})  

islemci.create({
    islemci_ad:'Intel Core i7 10700F Soket 1200 10. Nesil 2.90GHz 16MB Önbellek 14nm İşlemci',
    islemci_fiyat: '5.399',
    islemci_resim: '/images/Islemci/intel_i7.jpg'
},(error,post) =>{
    console.log(error,post)
})  

 

 

