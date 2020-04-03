const mongoose = require('mongoose')
const PointSchema = require('./utils/PointSchema')
const mongoosePaginate= require('mongoose-paginate')
// Schema, tabela e seus atributos
const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: {
        type: PointSchema,
        index: '2dsphere',
    }
})

DevSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Dev', DevSchema)