const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser:true,useUnifiedTopology: true,useCreateIndex: true});
module.exports = mongoose;
