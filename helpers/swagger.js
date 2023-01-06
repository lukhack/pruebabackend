const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

//Metada info about our api
const options = {
    definition :{
        openapi:"3.0.0",
        info: {title: "Crossfit WOD API", version:'10.0.0'}
    },
    apis:["/app/task/Allregister.Route.js"]

}

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
    app.use("/app/task", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
};

module.exports =  {
    swaggerDocs
}
