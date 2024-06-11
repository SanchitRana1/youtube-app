import React from 'react'

const VideoCard = ({info}) => {
  if(!info) return;
  const {snippet, statistics} = info;
  const {channelTitle, title, thumbnails} = snippet;
  return (
    <div className='w-72 p-1 m-2 hover:shadow-lg'>
      <img className="w-full rounded-lg" src={thumbnails?.maxres ? thumbnails?.maxres?.url : thumbnails?.high?.url} alt="img_logo" />
      <div className="">
        <h1 className='font-bold'>{title}</h1>
        <p>{channelTitle}</p>
        <p>{statistics?.viewCount} views</p>
      </div>
    </div>
  )
}

export default VideoCard