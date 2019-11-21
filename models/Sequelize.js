var Sequelize = require('sequelize')
var db = require("../connection/con")

module.exports= db.sequelize.define(
    'user'/* MOU name*/,{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        user:{
            type:Sequelize.STRING,
            // notnull:true
        },
        pass:{
            type:Sequelize.STRING,
            // notnull:true
        },
    },
    {
        timestamps:false,
        freezeTableName:true
    }
)