const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const mongoose = require('mongoose');
const app = express();


router.route('/')
    .all((req, res, next) => {
        res.locals.pageData = {
            title: 'Login Page'
        }
        next();
    })
    .get((req, res, next) => {
        res.render('pages/login')
    })
    .post((req, res, next) => {

        const bodyParser = require('body-parser');

        // parse application/json
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({
            extended: true
        }));

        const conn = require('../connection/con');
        const user = req.body.user
        opass = req.body.pass;
        console.log("User is is =" + user);
        const sql = "SELECT * FROM user WHERE user = '" + user + "'";
        console.log("sql is =" + sql);
        conn.query(sql, function (err, result) {

            result.forEach(function(data) {

                if (data.pass.validPassword('123')) {
                    console.log("login suk");
                }
                else {
                    console.log("login don't suk");
                };
                
            });

        });
    });

module.exports = router;