const path = require('path')
const express = require('express')
const router = express.Router()
const iletisim = require('../models/iletisim')

router.get('/',(req,res) =>{
    res.sendFile(path.resolve(__dirname, '../views/iletisim.html'))
})

router.post('/iletisim_test',(req,res) =>{
    iletisim.create(req.body)
    res.redirect('/hesabim')
})

module.exports=router