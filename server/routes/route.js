const router = require('express').Router()
const { addWarehouse, getAllWarehouse, updateWarehouse } = require('../controllers/warehouseController');

router.post('/warehouse', addWarehouse);
router.get('/warehouse', getAllWarehouse);
router.post('/warehouse/:id', updateWarehouse);

module.exports = router;