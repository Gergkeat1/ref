const express = require('express')
const router = express.Router()
 
router.route('/')
    .all((req, res, next) => { 
        res.locals.pageData = {
            title:'Register Page'
        }
        next()
    })
    .get((req, res, next) => { 
        res.render('pages/register')    
    })
    .post((req, res, next) => { 
        res.render('pages/register')    
    })
 
module.exports = router