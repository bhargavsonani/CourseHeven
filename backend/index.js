import express from 'express';
import dotenv from "dotenv";
import mongoose from 'mongoose';
import courseRoute from './routes/course.route.js';

import userRoute from './routes/user.route.js';
import adminRoute from './routes/admin.route.js';
import fileUpload from 'express-fileupload';
import orderRoute from "./routes/order.route.js";


import { v2 as cloudinary } from 'cloudinary';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app = express();
dotenv.config();

// middleware
app.use(express.json());;
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));
app.use(cors(
    
        {
            origin : 'course-heven-a9j9gjngx-bhargav-sonanis-projects.vercel.app' ,
            credentials:true,
            methods:['GET','POST','DELETE','PUT'],
            allowedHeaders:['Content-Type', 'Authorization'],
        }
    
));
app.use(cookieParser());

cloudinary.config({ 
    cloud_name: process.env.cloud_name, 
    api_key: process.env.api_key, 
    api_secret: process.env.api_secret 
});

const port = process.env.PORT;
const DB_URI = process.env.MONGO_URI

try {
    await mongoose.connect(DB_URI,{
        serverSelectionTimeoutMS: 5000
    });

    console.log("Connected to MongoDB"); 
} catch (error) {
    console.log(error);
}

// definng routes 
app.use("/api/v1/course", courseRoute);
app.use("/api/v1/user",userRoute);
app.use("/api/v1/admin",adminRoute);
app.use("/api/v1/order", orderRoute);

// cloudinary configuration code


app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});
