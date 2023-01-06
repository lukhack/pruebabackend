const {Router} = require('express');
const router =Router();

const { findId, findAll, save, update, remove } = require("../controller/PriorityController");


router.get('/:id',  findId);
router.get('/',  findAll);
router.put('/',  save);
router.get('/:id',  update);
router.delete('/:id',  remove);

module.exports = router;
