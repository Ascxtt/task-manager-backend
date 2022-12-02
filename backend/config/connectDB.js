const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MONGODB CONNECTED`);
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = connectDB


//mongoDB connection method
// const startServer = async () => {
//   try {
//     await connectDB();
//     app.listen(PORT, () => {
//       console.log(`Server started on port ${PORT}`);
//     });
//   } catch (error) {
//     console.log(error);
//     process.exit(1);
//   }
// };

// startServer();