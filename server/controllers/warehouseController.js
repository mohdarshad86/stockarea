const Warehouse = require('../models/Warehouse')

const addWarehouse = async (req, res) => {
    try {
        const { name, code, city, space_available, type, cluster } = req.body;

        if (!name || !code || !city || !space_available || !type || !cluster) {
            return res.status(400).send({ message: 'Please send required field' });
        }

        const existingWH = await Warehouse.findOne({ code: code });

        if (existingWH) {
            return res.status(400).send({ message: 'Warehouse already exists' });
        }

        const whCreated = await Warehouse.create(req.body);

        return res.status(201).send({ status: 'true', message: 'Warehouse added successfully', data: whCreated });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ status: false, error: 'Internal server error' });
    }
}

const getAllWarehouse = async (req, res) => {
    try {
        const warehouses = await Warehouse.find();
        return res.status(200).send(warehouses);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
};

const updateWarehouse = async (req, res) => {
    try {
        const warehouseId = req.params.id; 

        const { name, code, city, space_available, type, cluster,is_live,is_registered } = req.body;

        const updateFields = {};

        if (name) {
            updateFields.name = name;
        }
        if (code) {
            updateFields.code = code;
        }
        if (city) {
            updateFields.city = city;
        }
        if (space_available) {
            updateFields.space_available = space_available;
        }
        if (type) {
            updateFields.type = type;
        }
        if (cluster) {
            updateFields.cluster = cluster;
        }
        updateFields.is_live = is_live;
        updateFields.is_registered = is_registered;


        const updatedWarehouse = await Warehouse.findOneAndUpdate(
            { _id: warehouseId },
            { $set: updateFields },
            { new: true } 
        );

        if (!updatedWarehouse) {
            return res.status(404).send({ message: 'Warehouse not found' });
        }

        return res.status(200).send({ status: true, message: 'Warehouse updated successfully', data: updatedWarehouse });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ status: false, error: 'Internal server error' });
    }
};


module.exports = { addWarehouse, getAllWarehouse, updateWarehouse }