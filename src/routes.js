const {Router} = require('express')
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SeachController')
const routes = Router()
// tipos de parametros:

// Query Params: req.query (Filtors, ordenação, paginação, ...)
// Route Params(Put,Delete) : req.params (Identificar algum recurso na alteração ou remoção)  
// Body: req.body (Dados para criação de um conteúdo)

routes.get('/search', SearchController.index)

routes.get('/devs', DevController.index)

routes.post('/devs', DevController.store)

// routes.put('/users/:id', (req, res)=> {
    
// })

routes.delete('/users/:id', DevController.destroy)

module.exports = routes;