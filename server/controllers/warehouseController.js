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

const getWarehouseByName = async (req, res) => {
    try {
        const { name, code } = req.query;

        if (!name && !code) {
            return res.status(400).send({ message: 'Please provide a warehouse name or code for searching.' });
        }

        let warehouses;

        if (name) {
            warehouses = await Warehouse.find({ name: { $regex: name, $options: 'i' } });

            if (warehouses.length === 0) {
                return res.status(404).send({ message: 'No warehouses found with the provided name.' });
            }
        }

        if (code) {
            warehouses = await Warehouse.find({ code: { $regex: code, $options: 'i' } });

            if (warehouses.length === 0) {
                return res.status(404).send({ message: 'No warehouses found with the provided code.' });
            }
        }

        return res.status(200).send(warehouses);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

const filterWarehouse = async (req, res) => {
    try {

        const { city, cluster, space_available } = req.query;

        const filterQuery = {};

        if (city) {
            filterQuery.city = { $regex: city, $options: 'i' };
        }

        if (cluster) {
            filterQuery.cluster = { $regex: cluster, $options: 'i' };
        }

        if (space_available) {
            //minimum available space
            filterQuery.space_available = { $gte: parseInt(space_available) };
        }

        const filteredWarehouses = await Warehouse.find(filterQuery);

        if (filteredWarehouses.length === 0) {
            return res.status(404).send({ message: 'No warehouses found with the provided filter criteria.' });
        }

        return res.status(200).send(filteredWarehouses);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};



module.exports = { addWarehouse, getAllWarehouse, getWarehouseByName, filterWarehouse }