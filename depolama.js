const mongoose = require('mongoose');

const depolama = require('./models/depolama')

mongoose.connect('mongodb://127.0.0.1/Proje');

depolama.create({
    depolama_ad:'Crucial 500GB MX500 Serisi 3D NAND Sata 3.0 SSD (Okuma 560MB / Yazma 510MB)',
    depolama_fiyat: '1.199',
    depolama_resim: '/images/Depolama/crucial_mx500_500_ssd.jpg'
},(error,post) =>{
    console.log(error,post)
})

depolama.create({
    depolama_ad:'Samsung 1TB 870 QVO SATA 3.0 (Okuma 560MB / Yazma 530MB) SSD',
    depolama_fiyat: '2.199',
    depolama_resim: '/images/Depolama/samsung_870_1tb_ssd.jpg'
},(error,post) =>{
    console.log(error,post)
})  

depolama.create({
    depolama_ad:'Samsung 250GB 870 EVO SATA 3.0 SSD (Okuma 560MB / Yazma 530MB)',
    depolama_fiyat: '799',
    depolama_resim: '/images/Depolama/samsung_870_240_sata_ssd.jpg'
},(error,post) =>{
    console.log(error,post)
})  

 
depolama.create({
    depolama_ad:'Kingston 240GB A400 Serisi Sata 3.0 Cache M.2 SSD (Okuma 500MB / Yazma 350MB)',
    depolama_fiyat: '699',
    depolama_resim: '/images/Depolama/kingston_a400_240_m2_ssd.jpg'
},(error,post) =>{
    console.log(error,post)
})  


depolama.create({
    depolama_ad:'WD 480GB Green SATA 3.0 (545MB Okuma / 430MB Yazma) 3D NAND SSD Disk',
    depolama_fiyat: '999',
    depolama_resim: '/images/Depolama/wd_green_480_ssd.jpg'
},(error,post) =>{
    console.log(error,post)
})  

depolama.create({
    depolama_ad:'Sandisk 500GB Ultra NVMe M.2 3D SSD (Okuma 2400MB / Yazma 1750MB)',
    depolama_fiyat: '1.299',
    depolama_resim: '/images/Depolama/sandisk_ultra_500_m2_ssd.jpg'
},(error,post) =>{
    console.log(error,post)
})  

depolama.create({
    depolama_ad:'Samsung 500GB 980 NVMe M.2 SSD (Okuma Hızı 3100MB / Yazma Hızı 2600MB)',
    depolama_fiyat: '1.199',
    depolama_resim: '/images/Depolama/samsung_980_500_m2_ssd.jpg'
},(error,post) =>{
    console.log(error,post)
})  

 

 

