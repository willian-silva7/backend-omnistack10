const expess = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect(
    'mongodb+srv://omnistack:omnistack@omnistack-0stko.mongodb.net/test?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }); // conectar mongoose

const app = expess();

app.use(expess.json()) // entender requisições com o corpo no formato JSON
app.use(cors())
app.use(routes)
app.listen(3333)