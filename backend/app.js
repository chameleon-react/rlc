var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var morgan = require('morgan')

var db = require('./database')

db.sync({alter:true})
var cors = require('cors')


var ads = require('./routes/ads')
var banner = require('./routes/banner')
var issue = require('./routes/issue')
var user = require('./routes/user');
var fileUpload = require('./routes/fileUpload')
var analatics = require('./routes/analatics')
var filter = require('./routes/filter')
const tier  =require('./routes/tier')
const review = require('./routes/review')
const report = require('./routes/report')
const qna = require('./routes/qna')


var app = express();
app.use(morgan('dev'))


app.use('/image',express.static(path.join(__dirname,'image')))
app.use('/gallery',express.static(path.join(__dirname,'gallery')))

app.use(cors({ origin: "*" }))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/ads',ads)
app.use('/banner',banner)
app.use('/issue',issue)
app.use('/user', user);
app.use('/file',fileUpload)
app.use('/analatics',analatics)
app.use('/filter',filter)
app.use('/tier',tier)
app.use('/review',review)
app.use('/report',report)
app.use('/qna',qna)

app.use(express.static(path.join(__dirname, 'build')))

app.use('*',(req,res)=>{
    res.sendFile(__dirname,'build')
})


module.exports = app;
