import express from "express"
import videoDetails from "../data/videos.json" assert {type:"json"}
import { v4 as uuidv4 } from 'uuid';
import * as fs from 'fs';


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

router.post("/",(req,res)=>{
    const { title, description } = req.body;

    if (!title || !description){
        res.status(400).send("Please send all required parameters");
        return;    
    }

    const newVideo = {
        id: uuidv4(),
        timestamp: Date.now(),
        channel: "You",
        views: "999,999",
        like: "3,000",
        image: "https://unit-3-project-api-0a5620414506.herokuapp.com/images/image0.jpg",
        ...req.body,
    }

    console.log(newVideo);
    res.status(201).send(newVideo);
    const UpdatedVideos = [...videoDetails,newVideo]
    fs.writeFile("./data/videos.json", JSON.stringify(UpdatedVideos),(err) => err && console.error(err));


})



export default router