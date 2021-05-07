const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
//Handlebars
const hbs = require('express-handlebars');


//Routes

const projectRouter = require('./routes/project');

const app = express();
 
// view engine setup
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', '.hbs');
//Handle hbs

app.engine('.hbs', hbs({extname: '.hbs', defaultLayout: 'layout'}));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//Use the app to access to the routes
app.use('/', projectRouter);




module.exports = app;
