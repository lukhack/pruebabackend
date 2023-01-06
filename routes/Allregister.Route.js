const {Router} = require('express');
const router =Router();

const routerTask = require("./Task.Route");
const routerStatus = require("./Status.Route");
const routerPriority = require("./Priority.Route");


/*
*   @openapi
*/

router.use('/task',routerTask);
router.use('/priority',routerStatus);
router.use('/status',routerPriority);

module.exports = router;
