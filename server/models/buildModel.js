const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const buildSchema = new Schema({
    name: {type: String, required: true},
    date: {type: Date, required: true},
    totalCost: {type: Number, required: true},
    lensBuild: {type: Object, required: true},
    cameraBuild: {type: Object, required: true},
    batteryBuild: {type: Object, required: true},
    mediaBuild: {type: Object, required: true},
    gripBuild: {type: Object, required: true},
    aksBuild: {type: Object, required: true}
})

module.exports = mongoose.model('Build', buildSchema);