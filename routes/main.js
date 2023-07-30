const path = require('path')
const express = require('express')
const req = require('express/lib/request')
const router = express.Router()
const index_firsat = require('../models/index_firsat')
const islemci = require('../models/islemci')
const ekran_karti = require('../models/ekran_karti')
const anakart = require('../models/anakart')
const ram = require('../models/ram')
const depolama = require('../models/depolama')
const bilgisayar_kasa = require('../models/bilgisayar_kasa')
const islemci_sogutucu = require('../models/islemci_sogutucu')
const guc_kaynagi = require('../models/guc_kaynagi')


router.get('/', (req, res) => {
    index_firsat.find({}).then(posts => {
        res.render('site/index', { firsaturunu: posts })
    })

})

router.get('/index.html', (req, res) => {
    index_firsat.find({}).then(posts => {
        res.render('site/index', { firsaturunu: posts })
    })
})

router.get('/index', (req, res) => {
    index_firsat.find({}).then(posts => {
        res.render('site/index', { firsaturunu: posts })
    })
})

router.get('/hesabim.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/hesabim.html'))
})

router.get('/hesabim', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/hesabim.html'))
})

router.get('/sifre_degistir', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/sifre_degistir.html'))
})

router.get('/sifremi_unuttum.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/sifremi_unuttum.html'))
})

router.get('/anakart', (req, res) => {
    anakart.find({}).then(posts => {
        res.render('site/anakart', { anakartlar: posts })
    })
})

router.get('/bilgisayar_kasa', (req, res) => {
    bilgisayar_kasa.find({}).then(posts => {
        res.render('site/bilgisayar_kasa', { bilgisayar_kasalari: posts })
    })
})

router.get('/depolama', (req, res) => {
    depolama.find({}).then(posts => {
        res.render('site/depolama', { depolama_birimleri: posts })
    })
})

router.get('/ekran_karti', (req, res) => {
    ekran_karti.find({}).then(posts => {
        res.render('site/ekran_karti', { ekran_kartlari: posts })
    })
})

router.get('/islemci', (req, res) => {
    islemci.find({}).then(posts => {
        res.render('site/islemci', { islemciler: posts })
    })
})

router.get('/ornek', (req, res) => {
    res.render('site/ornek')
})

router.get('/psu', (req, res) => {
    guc_kaynagi.find({}).then(posts => {
        res.render('site/psu', { guc_kaynaklari: posts })
    })
})

router.get('/ram', (req, res) => {
    ram.find({}).then(posts => {
        res.render('site/ram', { ramler: posts })
    })
})

router.get('/sogutucu', (req, res) => {
    islemci_sogutucu.find({}).then(posts => {
        res.render('site/sogutucu', { sogutucular: posts })
    })
})

router.get('/adreslerim', (req, res) => {
    res.render('site/adreslerim')
})

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

router.get("/search_index", (req, res) => {
    if (req.query.look) {
        const regex = new RegExp(escapeRegex(req.query.look), 'gi');
        index_firsat.find({ "firsat_ad": regex }).sort({ $natural: -1 }).then(posts => {
            res.render('site/index', { firsaturunu: posts })
        })
    }
})

router.get("/search_anakart", (req, res) => {
    if (req.query.look) {
        const regex = new RegExp(escapeRegex(req.query.look), 'gi');
        anakart.find({ "anakart_ad": regex }).sort({ $natural: -1 }).then(posts => {
            res.render('site/anakart', { anakartlar: posts })
        })
    }
})

router.get("/search_bilgisayar_kasa", (req, res) => {
    if (req.query.look) {
        const regex = new RegExp(escapeRegex(req.query.look), 'gi');
        bilgisayar_kasa.find({ "kasa_ad": regex }).sort({ $natural: -1 }).then(posts => {
            res.render('site/bilgisayar_kasa', { bilgisayar_kasalari: posts })
        })
    }
})

router.get("/search_depolama", (req, res) => {
    if (req.query.look) {
        const regex = new RegExp(escapeRegex(req.query.look), 'gi');
        depolama.find({ "depolama_ad": regex }).sort({ $natural: -1 }).then(posts => {
            res.render('site/depolama', { depolama_birimleri: posts })
        })
    }
})

router.get("/search_ekran_karti", (req, res) => {
    if (req.query.look) {
        const regex = new RegExp(escapeRegex(req.query.look), 'gi');
        ekran_karti.find({ "ekran_karti_ad": regex }).sort({ $natural: -1 }).then(posts => {
            res.render('site/ekran_karti', { ekran_kartlari: posts })
        })
    }
})

router.get("/search_islemci", (req, res) => {
    if (req.query.look) {
        const regex = new RegExp(escapeRegex(req.query.look), 'gi');
        islemci.find({ "islemci_ad": regex }).sort({ $natural: -1 }).then(posts => {
            res.render('site/islemci', { islemciler: posts })
        })
    }
})

router.get("/search_psu", (req, res) => {
    if (req.query.look) {
        const regex = new RegExp(escapeRegex(req.query.look), 'gi');
        guc_kaynagi.find({ "psu_ad": regex }).sort({ $natural: -1 }).then(posts => {
            res.render('site/psu', { guc_kaynaklari: posts })
        })
    }
})

router.get("/search_ram", (req, res) => {
    if (req.query.look) {
        const regex = new RegExp(escapeRegex(req.query.look), 'gi');
        ram.find({ "ram_ad": regex }).sort({ $natural: -1 }).then(posts => {
            res.render('site/ram', { ramler: posts })
        })
    }
})

router.get("/search_sogutucu", (req, res) => {
    if (req.query.look) {
        const regex = new RegExp(escapeRegex(req.query.look), 'gi');
        islemci_sogutucu.find({ "sogutucu_ad": regex }).sort({ $natural: -1 }).then(posts => {
            res.render('site/sogutucu', { sogutucular: posts })
        })
    }
})







module.exports = router