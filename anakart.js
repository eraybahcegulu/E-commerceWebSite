const mongoose = require('mongoose');

const anakart = require('./models/anakart')

mongoose.connect('mongodb://127.0.0.1/Proje');

anakart.create({
    anakart_ad:'ASUS TUF GAMING X570-PRO WIFI II AM4 X570 AM4 DDR4 5100MHz (O.C.) M.2 Anakart',
    anakart_fiyat: '5.499',
    anakart_resim: '/images/Anakart/asus_x570-pro.jpg'
},(error,post) =>{
    console.log(error,post)
})

anakart.create({
    anakart_ad:'ASUS ROG STRIX GAMING WIFI Z690-E Intel Soket 1700 DDR5 6400MHz(OC) M.2 Anakart',
    anakart_fiyat: '10.399',
    anakart_resim: '/images/Anakart/asus_z690-e.jpg'
},(error,post) =>{
    console.log(error,post)
})  

anakart.create({
    anakart_ad:'ASUS PRIME Z690-P WIFI D4 Intel PRIME Z690-P Soket 1700 DDR4 5333MHz(OC) Anakart',
    anakart_fiyat: '3.999',
    anakart_resim: '/images/Anakart/asus_z690-p.jpg'
},(error,post) =>{
    console.log(error,post)
})  

 
anakart.create({
    anakart_ad:'GIGABYTE A520M H UD AMD A520 Soket AM4 DDR4 4266MHz (O.C) M.2 Anakart',
    anakart_fiyat: '1.199',
    anakart_resim: '/images/Anakart/gigabyte_a520m.jpg'
},(error,post) =>{
    console.log(error,post)
})  


anakart.create({
    anakart_ad:'GIGABYTE B550 AORUS MASTER B550 AMD4 DDR4 5200MHz (O.C) M.2 Anakart',
    anakart_fiyat: '6.499',
    anakart_resim: '/images/Anakart/gigabyte_b550.jpg'
},(error,post) =>{
    console.log(error,post)
})  

anakart.create({
    anakart_ad:'MSI B450M-A PRO MAX Amd B450 Soket AM4 DDR4 3466(OC) M.2 Anakart',
    anakart_fiyat: '799',
    anakart_resim: '/images/Anakart/msi_b450m-a.jpg'
},(error,post) =>{
    console.log(error,post)
})  

anakart.create({
    anakart_ad:'MSI B560M-A PRO Intel B560 Soket 1200 DDR4 5200MHz (OC) M.2 Anakart',
    anakart_fiyat: '1.899',
    anakart_resim: '/images/Anakart/msi_b560m-a.jpg'
},(error,post) =>{
    console.log(error,post)
})  

 

 

