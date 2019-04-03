const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/apirest', { 
    useCreateIndex: true,
    useNewUrlParser: true 
});

mongoose.Promise = global.Promise;

module.exports = mongoose;