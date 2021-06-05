const Institut = require('../../models/Institut');

module.exports.getAll = async () => {
    result = await Institut.find();
    return result;
}
module.exports.getOneI = async (id) => {
    result = await Institut.findById(id);
    return result;
}
module.exports.create = async (data) => {
    result = await Institut.create(data);
    return result;
}
module.exports.search = async (consult) => {
    result = await Institut.find({name: { $regex: consult }});
    return result;
}