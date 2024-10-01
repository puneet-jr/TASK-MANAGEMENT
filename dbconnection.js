const mongoose = require("mongoose");
require('dotenv').config()




const connectdb = async () => {
    const mongo_url =  process.env.mongo_url;
    if (!mongo_url) {
        console.error("MongoDB connection string is not defined in environment variables");
        process.exit(1); 
    }

    try {
        await mongoose.connect(mongo_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Successfully connected to the database");
    } catch (error) {
        console.error("Error connecting to the database", error);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectdb;


// const  mongoose= require("mongoose");
// require('dotenv').config();

// const connectdb= async()=>{

//     return mongoose.connect(process.env.mongo_url);
// };


// module.exports= connectdb;

