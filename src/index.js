const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const { PORT } = require('./config/ServerConfig')

const db = require('./models/index')

const apiRoutes = require('./routes/index')

const setUpAndStartServer=()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',apiRoutes)
    app.listen(PORT,()=>{
        console.log('server started on port')
    })

    if(process.env.DB_SYNC){
        db.sequelize.sync({alter:true})
    }
}

setUpAndStartServer();