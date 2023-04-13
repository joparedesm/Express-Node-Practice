const router = require('express-promise-router')();

const { index, newCars, getCars, updateCars, deleteCars } = require('../controllers/cars');

router.get('/', index);
router.post('/', newCars);
router.get('/:carsId', getCars);
router.put('/:carsId', updateCars);
router.delete('/:carsId', deleteCars);


module.exports = router;