import React from "react"
import "./VideoItem.css"
import { useVideosContext } from "../hooks/useVideosContext"

const VideoItem = ({ video }) => {
  const { dispatch } = useVideosContext()

  const handleClick = (video) => {
    dispatch({ type: "SET_SELECTED_VIDEO", payload: video })
  }

  return (
    <div className="item video-item" onClick={() => handleClick(video)}>
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  )
}

export default VideoItem