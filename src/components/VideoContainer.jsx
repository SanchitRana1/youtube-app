import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "../components/VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState(null);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  // console.log(videos);

  return (
    <div className="flex flex-wrap">
      {videos &&
        videos.map((video) => (
          <Link to={"/watch?v="+video?.id} key={video?.id}>
            <VideoCard key={video?.id} info={video} />
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
