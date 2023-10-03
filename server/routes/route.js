const router = require('express').Router()
const { addWarehouse, getAllWarehouse, getWarehouseByName, filterWarehouse } = require('../controllers/warehouseController');

router.post('/warehouse', addWarehouse);
router.get('/warehouse', getAllWarehouse);
router.get('/warehouse/search', getWarehouseByName);
router.get('/warehouse/filter', filterWarehouse);

module.exports = router;