const path = require('path')
const express = require('express')
const exphbs  = require('express-handlebars')
const app = express()
const port = 3000
const hostname = '127.0.0.1'
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const uye_ol = require('./models/uye_ol')
const expressSession = require('express-session')

mongoose.connect('mongodb://127.0.0.1/Proje');

app.use(expressSession({
  secret:'key',
  resave: false,
  saveUninitialized:true
}))

app.use((req,res,next)=>{
  res.locals.sessionFlash = req.session.sessionFlash
  delete req.session.sessionFlash
  next()
})

app.use(fileUpload())

app.set('view engine', 'html');

app.engine('html', require('ejs').renderFile);

app.use(express.static('public'))

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



const main = require('./routes/main')
const routes_uye_ol = require('./routes/uye_ol')
const routes_iletisim = require('./routes/iletisim')


app.use('/',main)
app.use('/uye_ol',routes_uye_ol)
app.use('/iletisim',routes_iletisim)

app.get("/giris_yap",(req, res) =>{
  res.render("giris_yap.ejs");
})



app.post("/giris_yap",async(req,res)=>{
  try{ 
    const email =req.body.email;
    const password =req.body.password;

    const uyemail = await uye_ol.findOne({email:email});

 

    if(uyemail.password === password){
      res.redirect("hesabim.html");
    }else{
      res.send("email veya şifre yanlış")
    }

  } catch(error){
    res.status(400).send("email veya şifre yanlış")
  }
})







app.listen(port, hostname, () => {
  console.log(` Server Çalışıyor, http://${hostname}:${port}/`)
})