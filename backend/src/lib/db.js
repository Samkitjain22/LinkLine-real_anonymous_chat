import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const x="mongodb+srv://samkitjain2205:YkuHlO66qxKHTB5a@cluster0.heqwh6w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    const conn = await mongoose.connect(process.env.MONGODB_URI || x);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};