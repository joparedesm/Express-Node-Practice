const User = require('../models/user');

module.exports = {
    index: async (req, res, next) => {

        const users = await User.find({});
        //throw new Error('This is a test error');
        res.status(200).json(users);

    },

    newUser: async (req, res, next) => {
        //console.log(req.body);
        const newUser = new User(req.body);
        const user = await newUser.save();
        res.status(201).json(user);
    }
}