const express = require('express')
const router = express.Router()
 
router.route('/')
    .all((req, res, next) => { 
        res.locals.pageData = {
            title:'Login Page'
        }
        next()
    })
    .get((req, res, next) => { 
        res.render('pages/login')    
    })
    .post((req, res, next) => { 
        res.redirect('/me')
    })
 
module.exports = router