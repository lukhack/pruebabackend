const express = require('express');
require('dotenv').config();
//instancia la configuración de sequalize framework ORM
const { dbConnection } = require("./database/configSequealize");
const  routerAll  = require("./routes/Allregister.Route");
const { swaggerDocs: v2data } = require("./swagger");


const cors = require('cors');

//modo string conection
//mongodb+srv://lukhack:ofGVVGu9qjjnyjOL@cluster0.uzjac.mongodb.net/test

//crear el servidor de express
const app = express();
app.use(cors());
//lectura y parseo del body
app.use(express.json());
//conexión con la base de datos
dbConnection();
//Directorio publico
app.use(express.static('public'));
app.use('/app/',routerAll, );


const PORT = process.env.PORT || 9090
//Rutas
app.listen(PORT, ()=>{
    console.log(`servidor corriendo en el puerto ${PORT}`);
    v2data(app, PORT);

});
