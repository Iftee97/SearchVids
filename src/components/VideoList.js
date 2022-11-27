import React from "react"
import VideoItem from "./VideoItem"
import { useVideosContext } from "../hooks/useVideosContext"

const VideoList = () => {
  const { videos } = useVideosContext()

  return <div className="ui relaxed divided list">
    {videos && videos.map((video) => (
      <VideoItem video={video} key={video.id.videoId} />
    ))}
  </div>
}

export default VideoList