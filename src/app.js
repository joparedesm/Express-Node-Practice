const bodyParser = require('body-parser');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const usersRoutes = require('./routes/users');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/crud-mongo')
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));
// settings
app.set('port', process.env.PORT || 3000)

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

// routes
app.use('/users', usersRoutes);

// static files


// error handlers


// start server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});