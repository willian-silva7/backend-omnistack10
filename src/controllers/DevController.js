const axios = require('axios')
const Dev = require('../models/Dev')
const  parseStringAsArray = require('../utils/parseStringAsArray')
module.exports = {

    async index(req, res) {
        const devs = await Dev.find();
        return await res.json(devs)
    },
    
    async store(req, res){
        const {github_username, techs, latitude, longitude} = req.body;
        const techArrays = parseStringAsArray(techs)
    
        let dev = await Dev.findOne({github_username})
        if(!dev){
            const apiResponse = await axios.get(`thhps://api.github.com/users/${github_username}`)
            const  {name = login, avatar_url, bio} =  apiResponse.data
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
        
             dev = await Dev.create({
                name,
                github_username,
                bio,
                avatar_url,
                techs: techArrays,
                location
            })
            return res.json(dev)
        }else{
            return res.json({message: "usuário já possui cadastro"})
        }
    },

    async update(req, res){

    },

    async destroy(req, res){
        const {id} = req.params;
        return await Dev.deleteOne({id});
    },

};