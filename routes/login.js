const express = require('express');
const router = express.Router();
const crypto = require('crypto');
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
              opass = req.body.pass
        ;
        console.log("User is is =" + user);
        const sql = "SELECT * FROM user WHERE user = '" + user + "'";
        console.log("sql is =" + sql);
        conn.query(sql, function (err, result) {

            result.forEach(function (data) {

                var mykey = crypto.createDecipher('aes-128-cbc', 'abc');
                var mystr = mykey.update(data.pass, 'hex', 'utf8')
                mystr += mykey.final('utf8');
                
                if (mystr == opass) {
                    console.log("Login Successfully");
                    var username = data.user ;
                    res.redirect('/dashboard?user=' + username);
                }
                else {
                    console.log("Login don't Successfully");
                };

            });

        });
    });

module.exports = router;