const express = require('express')
const router = express.Router()
const crypto = require('crypto');
const User = require("../models/Sequelize");
const app = express();

router.route('/')
    .all((req, res, next) => {
        res.locals.pageData = {
            title: 'Edit Page'
        }
        next()
    })
    .get((req, res, next) => {
        var id = req.query.id;
        User.findAll({where: {id:id}}).then(User => {
          User.forEach(function (data) {
      
                  var id = data.id;
                  var user = data.user;
                  var name = data.name;
                  
                  res.render('pages/edit', { id: id, user: user, name: name});
                });
        });
    })
    .post((req, res, next) => {

        var id = req.query.id,
        user = req.query.user,
        name = req.query.name;
       
      User.update({user: user, name: name }, {where: {id: id}}).then(() => {
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
      });
    })

module.exports = router;