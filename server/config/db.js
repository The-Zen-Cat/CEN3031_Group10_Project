const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log(process.env.MONGO_URI);
    const conn = await mongoose.connect(
      'mongodb+srv://cen3031group10:dangerzone@cluster0.4cpaeoh.mongodb.net/?retryWrites=true&w=majority'
    );

    console.log(`MongoDB Connected ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
