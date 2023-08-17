const mongoose = require('mongoose');

const {Schema} = mongoose;

const contentSchema = new Schema({
    title: {
        type:String,
        required:true,
    },
    lang: {
        type:String,
        required:true,
    },
    content: {
        type:String,
        required:true,
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Content',contentSchema,'content');