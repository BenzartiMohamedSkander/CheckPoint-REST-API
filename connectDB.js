let mongoose = require('mongoose');



const dotenv = require("dotenv");
dotenv.config({path:'./config/.env'})




// class Database {
//   constructor() {
//     this._connect()
//   }
// _connect() {
//      mongoose.connect(process.env.MONGO_URI, {
//                useNewUrlParser: true,
//                useUnifiedTopology: true,
//           })
//        .then(() => {
//          console.log('Database connection successful')
//        })
//        .catch(err => {
//          console.error(err)
//        })
//   }
// }

//  module.exports = new Database()



 const connectDB = async () => {
  try {
    mongoose.connect(
      process.env.MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => console.log("Database connection successful")
    );
  } catch (error) {
    console.log(error);
  }
};



module.exports = connectDB;