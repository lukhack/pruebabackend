const {Router} = require('express');
const router =Router();

const { findId,findAll, save, update, remove, taskExecute } = require("../controller/TaskController");




router.get('/taskExecute',  taskExecute);
router.get('/:id',  findId);
router.get('/',  findAll);
router.post('/',  save);
router.put('/:id',  update);
router.delete('/:id',  remove);

module.exports = router;
