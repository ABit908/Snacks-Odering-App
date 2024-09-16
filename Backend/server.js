import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"





//app config
const app=express()
const port =4000


//middleware
app.use(express.json())     //this is first middleware ,whenever we will get the request from the frontend to backend that will passed using this json
app.use(cors())   //we can access the backend from frontend


//DB connection
connectDB();


//API endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))    // for accessing image which is uploaded from uploads file for ex. http://localhost:400/images/1725368060013food_5.png

app.get("/",(req,res)=>{
    res.send("API Working")
})


//run the express server
app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`);// template literals thats why we use backtik
})

//