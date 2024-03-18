import express from "express"
import videoDetails from "../data/videos.json" assert {type:"json"}

const router = express.Router();

router.get("/",(req,res)=>{
    const videoList = videoDetails.map(item=>(
      {
        id: item.id,
        title: item.title,
        channel: item.channel,
        image: item.image
      }
    ))
    res.json(videoList);
})
