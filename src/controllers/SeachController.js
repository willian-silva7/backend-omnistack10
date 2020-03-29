const Dev = require('../models/Dev')
const  parseStringAsArray = require('../utils/parseStringAsArray')


module.exports = {
    async index(req, res){
        const {latitude, longitude, techs} = req.query;
        const techsArray = parseStringAsArray(techs)
        
        const devs = await Dev.find({
            techs: {
                $in: techsArray, // operador do mongo, procura em
            },
            location: {
                $near : {
                    $geometry: {
                        type: 'Point',
                        coordinates : [longitude, latitude],
                    },
                    $maxDistance: 10000,
                }, // encontrar objetos perto da localização
            },
        });

        return res.json(devs)

    }

}