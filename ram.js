const mongoose = require('mongoose');

const ram = require('./models/ram')

mongoose.connect('mongodb://127.0.0.1/Proje');

ram.create({
    ram_ad:'CORSAIR 16GB (2x8GB) Vengeance Siyah DDR4 3200MHz CL22 Dual Kit Notebook Ram',
    ram_fiyat: '1.699',
    ram_resim: '/images/RAM/corsair_2x8.jpg'
},(error,post) =>{
    console.log(error,post)
})

ram.create({
    ram_ad:'Kingston 8GB (1x8GB) HyperX Predator RGB DDR4 4000MHz CL19 1.35V XMP PC Ram',
    ram_fiyat: '1.699',
    ram_resim: '/images/RAM/kingston_1x8_2.jpg'
},(error,post) =>{
    console.log(error,post)
})  

ram.create({
    ram_ad:'Crucial 64GB (2x32GB) Ballistix Siyah DDR4 3200MHz CL16 1.35V RGB PC Ram',
    ram_fiyat: '5.699',
    ram_resim: '/images/RAM/crucial_2x32.jpg'
},(error,post) =>{
    console.log(error,post)
})  

 
ram.create({
    ram_ad:'Crucial 16GB (2x8GB) Ballistix Siyah DDR4 3200MHz CL16 Notebook Ram',
    ram_fiyat: '1.199',
    ram_resim: '/images/RAM/crucial_2x8.jpg'
},(error,post) =>{
    console.log(error,post)
})  


ram.create({
    ram_ad:'GSKILL 128GB (4X32GB) Trident Z Neo DDR4 3200MHz CL16 AMD Ryzen RGB LED Ram',
    ram_fiyat: '13.999',
    ram_resim: '/images/RAM/gskill_4x32.jpg'
},(error,post) =>{
    console.log(error,post)
})  

ram.create({
    ram_ad:'Kingston 16GB (1x16GB) HyperX Fury RGB DDR4 3600MHz CL18 PC RAM',
    ram_fiyat: '1.999',
    ram_resim: '/images/RAM/kingston_1x16.jpg'
},(error,post) =>{
    console.log(error,post)
})  

ram.create({
    ram_ad:'Kingston 8GB (1x8GB) Fury Beast Siyah DDR4 3600MHz CL17 PC Ram',
    ram_fiyat: '799',
    ram_resim: '/images/RAM/kingston_1x8.jpg'
},(error,post) =>{
    console.log(error,post)
})  

 

 

