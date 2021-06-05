const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://user_admin:20202020@cluster0.ocmtm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{ useNewUrlParser:true,useUnifiedTopology: true});
module.exports = mongoose;
