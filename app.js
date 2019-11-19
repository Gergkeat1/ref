var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressLayouts = require('express-ejs-layouts');
var engine = require('ejs-locals');
var createError = require('http-errors') // เรียกใช้งาน http-errors module
var port = 3000  // port 

var app = express();

// ส่วนของการใช้งาน router module ต่างๆ 
var indexRouter = require('./routes/index')
var loginRouter = require('./routes/login')
var registerRouter = require('./routes/register')
var dashboardRouter = require('./routes/dashboard')


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('view options', {delimiter: '?'});

app.use(expressLayouts);
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));

// เรียกใช้งาน indexRouter
app.use('/', indexRouter)
app.use('/login', loginRouter)
app.use('/register', registerRouter)
app.use('/me', dashboardRouter)

app.use(function(req, res, next) {
    var err = createError(404)
    next(err)
})

app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`)
})