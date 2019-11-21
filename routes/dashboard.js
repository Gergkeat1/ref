const express = require('express')
const router = express.Router()
 
router.route('/')
    .get((req, res, next) => { 
        // res.locals.pageData = {
        //     title:'Dashboard Page'
        // }
        var user = req.query.user;
        res.render('pages/dashboard',{

            username: user
        })    
    })
    .post((req, res, next) => {
        res.locals.pageData = {
            title:'Dashboard Page'
        }


    });
 
module.exports = router