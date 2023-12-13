const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

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

contentSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Content',contentSchema,'content');