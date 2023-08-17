const mongoose = require('mongoose');

const DBURL = 'mongodb+srv://ajeetyadav52321:5PlxU6zkbNIxgYCy@cluster0.8e7rkrb.mongodb.net/?retryWrites=true&w=majority';


const ConnectDB = async () => {
    try{
        const conn = await mongoose.connect(DBURL);
        console.log(`Database Connected to host ${conn.connection.host}`);
    }catch(error){
        console.log(`Error : ${error}`);
    }
}

module.exports = ConnectDB;