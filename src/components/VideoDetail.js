import React from "react"
import { useVideosContext } from "../hooks/useVideosContext"

const VideoDetail = () => {
  const { selectedVideo } = useVideosContext()

  if (!selectedVideo) {
    return <div>Loading...</div>
  }

  const videoSrc = `https://www.youtube.com/embed/${selectedVideo?.id?.videoId}`
  const videoTitle = selectedVideo?.snippet?.title
  const videoDescription = selectedVideo?.snippet?.description

  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} title={videoTitle} />
      </div>

      <div className="ui segment">
        <h4 className="ui header">{videoTitle}</h4>
        <p>{videoDescription}</p>
      </div>
    </div>
  )
}

export default VideoDetail