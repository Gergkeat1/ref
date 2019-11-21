const express = require('express')
const router = express.Router()
var User = require("../models/Sequelize");
 
router.get('/', function(req, res, next) {
    res.locals.pageData = {
        title:'show'
    }
    User.findAll().then(result => {
        // var data = JSON.stringify(x, null, 4)
    
        res.render("pages/show", {
    
          result: result
    
        });
    });
})
 
module.exports = router