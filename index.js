import express from "express"
import videosRoutes from "./routes/videos.js"


const app = express();
const PORT = 8080;


app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.use("/videos",videosRoutes)


app.listen(PORT,()=>{
    console.log("server is running 8080")
})