const {Router} = require('express');
const router =Router();
const yaml = require('js-yaml');
const fs   = require('fs');
const path = require("path")
//Metada info about our api

const { findId,findAll, save, update, remove, taskExecute } = require("../controller/TaskController");


router.get('/taskExecute',  taskExecute);
router.get('/:id',  findId);
router.get('/',  findAll);
router.post('/',  save);
router.put('/:id',  update);
router.delete('/:id',  remove);

module.exports = router;
