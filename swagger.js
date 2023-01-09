const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const path = require("path")


const options = {
    definition :{
        openapi:"3.0.0",
        info: {title: "Federación Nacionial de cafeteros de colombia Task API", version:'10.0.0'}
    },

    apis:[`${path.join(__dirname, "/routes/*.js")}`,
        `${path.join(__dirname, "/docs/*.yaml")}`,
        `${path.join(__dirname, "/docs/components/*.yaml")}`
    ]

}

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
    app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
};

module.exports =  {
    swaggerDocs
}
