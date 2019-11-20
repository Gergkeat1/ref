const express = require('express')
const router = express.Router()
 
router.route('/')
    .get((req, res, next) => { 
        res.locals.pageData = {
            title:'Dashboard Page'
        }        
        res.render('pages/dashboard')    
    })
 
module.exports = router