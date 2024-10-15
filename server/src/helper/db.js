const { default: mongoose } = require('mongoose');
require('dotenv').config();
const mongo_url = process.env.MONGO_URL;
exports.MongoDbConnection = async () => {
  try {
    mongoose.connect(mongo_url,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    mongoose.connection.on('connected',()=>{
        console.log('connected to mongodb');
    })
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    throw err; // rethrow the error after logging it
  }
};
