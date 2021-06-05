const mongoose = require('mongoose');

const InstitutSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    cnpj: {
        type: String,
        require: true
    },
});
const Institut = mongoose.model('Institut',InstitutSchema);

module.exports = Institut;
