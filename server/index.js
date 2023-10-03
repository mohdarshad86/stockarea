const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config()
const route = require('./routes/route.js')

const PORT = process.env.PORT || 3001;
const MONGO_URI = process.env.MONGO_URI

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('DB Connected');
}).catch((err) => {
    console.log(err);
})

app.use('/api', route)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});