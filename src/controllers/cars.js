const Car = require('../models/cars.js');

module.exports = {
    index: async (req, res, next) => {

        const cars = await Car.find({});
        //throw new Error('This is a test error');
        res.status(200).json(cars);

    },

    newCars: async (req, res, next) => {
        //console.log(req.body);
        const newCar = new Car(req.body);
        const car = await newCar.save();
        res.status(201).json(car);
    },

    getCars: async (req, res, next) => {
        const { CarId } = req.params;
        const car = await Car.findById(CarId);
        res.status(200).json(car);
    },

    deleteCars: async (req, res, next) => {
        const { carId } = req.params;
        const newCar = req.body;
        const oldCar = await Car.findByIdAndRemove(carId, newCar);
        res.status(200).json({success: true});
    },

    updateCars: async (req, res, next) => {
        const { carId } = req.params;
        const newCar = req.body;
        const oldCar = await Car.findByIdAndUpdate(carId, newCar);
        res.status(200).json({success: true});

    }
}