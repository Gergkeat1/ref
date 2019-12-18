const express = require('express')
const router = express.Router()
const User = require("../models/Sequelize");
 
router.route('/')
    .all((req, res, next) => {
        res.locals.pageData = {
            title: 'Layout Page'
        }
        next();
    })
    .get((req, res, next) => {
        req.session.destroy()
        res.render('pages/login')
    })
    .post((req, res, next) => {

    });

module.exports = router;