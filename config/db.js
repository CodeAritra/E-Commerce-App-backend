import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.mongo_uri);
    console.log(`connected to mongodb ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error in mongodb ${error}`);
  }
};

export default connectDB;