const express = require('express')
const router = express.Router()
const User = require("../models/Sequelize");

router.route('/')
    .all((req, res, next) => {
        res.locals.pageData = {
            title: 'Delete Page'
        }
        next();
    })
    .get((req, res, next) => {
        var id = req.query.id ;
        User.destroy({ where: { id: id } }).then(function(){

            //ส่งค่ากลับไปshowที่หน้า show
            User.findAll().then(result => {
                // var data = JSON.stringify(x, null, 4)
                result.forEach(function(data) {
        
                    var decyp = data.pass;
                    res.render("pages/show", {
            
                        result: result,
                        decyp: decyp
                  
                    });
        
                });
            
            });
        
        
        })
        
    })
    .post((req, res, next) => {


    });
 
module.exports = router