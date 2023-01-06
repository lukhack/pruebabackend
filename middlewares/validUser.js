const jwt = require('jsonwebtoken');
const { dbConnection } = require('../database/configSequealize');

const db = dbConnection();
const models = db.models.gsa_usuario;
const validUser =async (req,res, next) =>{
   
    try{
        next();
    }catch(error){
        return res.status(400).json({
                ok:false,
                msg: 'Ocurrio un error inesperado comuniquese con el administrador'
        });
    }

};


module.exports = {
    validUser
};