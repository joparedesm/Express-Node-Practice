const router = require('express-promise-router')();

const { index, newUser, getUser, updateUser, deleteUser } = require('../controllers/user');

router.get('/', index);
router.post('/', newUser);
router.get('/:userId', getUser);
router.put('/:userId', updateUser);
router.delete('/:userId', deleteUser);


module.exports = router;