const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: [3, 'Name should have at least 3 characters.']
    },
    imageUrl: {
        type: String,
        required: true,
        validate: [/^https:\/\/\S+/, 'The url you provided is not in the expected format.']
    },
    descriiption: {
        type: String,
        required: true,
        minLength: [8, 'Description should have at least 8 characters.']
    },
})

const Accessory = mongoose.model('Accesory', accessorySchema)

module.exports = Accessory;