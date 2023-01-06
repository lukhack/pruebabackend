module.exports = {
    sequelize:{
        username: process.env.SEQUELIZE_USERNAME,
        password: process.env.SEQUELIZE_PASSWORD,
        database: process.env.SEQUELIZE_DATABASE,
        host: process.env.SEQUELIZE_HOST,
        port: process.env.SEQUELIZE_PORT,
        dialect:'postgres',
        operatorAliases: false,
        logging: true,   //muestra la traza sql 
        define: {
            timestamps: false  // I don't want timestamp fields by default
        },
        dialectOptions: {
            useUTC: true, //for reading from database
        },
    }
}