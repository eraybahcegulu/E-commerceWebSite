const path = require('path')
const express = require('express')
const router = express.Router()
const uye_ol = require('../models/uye_ol')
const { getMaxListeners } = require('process')
const Mail = require('nodemailer/lib/mailer')

router.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/uye_ol.html'))
})

router.post('/uye_ol_test', (req, res) => {
    uye_ol.create(req.body)

    const outputHTML = `
    
                        <h2>Kayıt Bilgileriniz:</h2>
                        <ul>
                            <li>Ad : ${req.body.ad} </li>
                            <li>Soyad : ${req.body.soyad} </li>
                            <li>Email : ${req.body.email} </li>
                            <li>Şifre : ${req.body.password} </li>
                        <ul>`

    "use strict";
    const nodemailer = require("nodemailer");


    async function main() {

        let testAccount = await nodemailer.createTestAccount();


        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: 'eraybahcegulu@gmail.com',
                pass: 'qylgnunrhkcgqwhx',
            },
        });

        
        let info = await transporter.sendMail({
            from: '<eraybahcegulu@gmail.com>', 
            to: `${req.body.email}`,
            subject: "İnternet Programlama",
            text: "İnternet Programlama",
            html: outputHTML,
        });


    }

    req.session.sessionFlash = {
        type: 'alert alert-success',
        message: 'Kayıt oldunuz. Bilgileriniz E-Posta adresine gönderildi.'
    }

    res.redirect('/index')

    main().catch(console.error);


    
})


module.exports = router