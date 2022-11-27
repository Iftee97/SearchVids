import React from "react"
import { useVideosContext } from "../hooks/useVideosContext"

const VideoDetail = () => {
  const { selectedVideo } = useVideosContext()

  if (!selectedVideo) {
    return <div>Loading...</div>
  }
  const videoSrc = selectedVideo && selectedVideo.id && selectedVideo.id.videoId ? `https://www.youtube.com/embed/${selectedVideo.id.videoId}` : ""
  const videoTitle = selectedVideo && selectedVideo.snippet && selectedVideo.snippet.title ? selectedVideo.snippet.title : ""
  const videoDescription = selectedVideo && selectedVideo.snippet && selectedVideo.snippet.description ? selectedVideo.snippet.description : ""

  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} title="video player" />
      </div>

      <div className="ui segment">
        <h4 className="ui header">{videoTitle}</h4>
        <p>{videoDescription}</p>
      </div>
    </div>
  )
}

export default VideoDetail