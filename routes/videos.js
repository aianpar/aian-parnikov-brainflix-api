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

router.get("/:id",(req,res)=>{
    const videoId = req.params.id;
    const foundVideo = videoDetails.find((video) => {
        return video.id === videoId;
      });

    if (!foundVideo) {
        res.status(404).send("Video is not found");
        return;
      }
    
    res.send(foundVideo);


})



export default router