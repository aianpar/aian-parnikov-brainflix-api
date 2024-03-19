import express from "express"
import cors from "cors"
import videosRoutes from "./routes/videos.js"
import dotenv from 'dotenv'

dotenv.config()

const { PORT  } = process.env;

console.log(PORT)

const app = express();

app.use(express.json());
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Brainflix API")
})

app.use("/videos",videosRoutes)


app.listen(PORT,()=>{
    console.log("server is running 8080")
})