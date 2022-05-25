const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name:{type:String, required:true},
    text:{type:String, required: true},
    image:{type:String, required: true},
    category:{type:String},
    size:{type:Array},
    color:{type:Array},
    price:{type:Number, required: true},
    inStock:{type:Boolean, default:true}
},{timestamps:true}
);

module.exports = mongoose.model('Product', ProductSchema)