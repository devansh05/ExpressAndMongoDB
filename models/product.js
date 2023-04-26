const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price : {
        type : Number,
        required : true,
        min : 0
    },
    category : {
        type : String,
        lowercase : true,
        enum : ['fruits', 'vegetables', 'dairy']
    }

})

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;