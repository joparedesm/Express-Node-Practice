const router = require('express-promise-router')();

const { index, newUser, getUser, updateUser, deleteUser, getUserCars, newUserCar } = require('../controllers/user');

router.get('/', index);
router.post('/', newUser);
router.get('/:userId', getUser);
router.put('/:userId', updateUser);
router.delete('/:userId', deleteUser);
router.get('/:userId/cars', getUserCars);
router.post('/:userId/cars', newUserCar);


module.exports = router;