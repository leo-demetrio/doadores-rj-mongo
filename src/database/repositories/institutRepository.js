const Institut = require('../../models/Institut');

module.exports.getAll = async () => {
    result = await Institut.find();
    return result;
}
module.exports.getOne = async (id) => {
    result = await Institut.findById(id);
    return result;
}
module.exports.create = async (data) => {
    result = await Institut.create(data);
    return result;
}
module.exports.update = async (id, data) => {
    result = await Institut.findByIdAndUpdate(id,data);
    return result;
}
module.exports.search = async (consult) => {
    result = await Institut.find({name: { $regex: consult }});
    return result;
}
module.exports.delete = async (id) => { 
    result = await Institut.deleteOne({ _id: id});
    return result;
}