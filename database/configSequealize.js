const config = require('../database/enviroment');
const Sequelize = require('sequelize');
 
const path = require('path');
const fs = require('fs');

let db = null;

const dbConnection =()=>{
  if(!db){
    const sequelize =  new Sequelize(config.sequelize);
    db = {
      Sequelize,
      sequelize:sequelize,
      models:{}
    }; 
    //Lee el 
    const dir = path.join(__dirname,'..','models')
    
    fs.readdirSync(dir).forEach(filename=>{
       const modelDir =  path.join(dir, filename);
       const model = require(path.join(dir, filename))(sequelize, Sequelize.DataTypes);
       db.models[model.name] = model
    });

    Object.keys(db.models).forEach(key =>{
      
      db.models[key].associate(db.models)
    });
    
  }
  return db;
}
module.exports={dbConnection}