import React, { useEffect } from "react"
import SearchBar from "./components/SearchBar"
import VideoList from "./components/VideoList"
import VideoDetail from "./components/VideoDetail"
import { searchVideos } from './api'
import { useVideosContext } from "./hooks/useVideosContext"

const App = () => {
  const { dispatch } = useVideosContext()

  useEffect(() => {
    const fetchInitialVideo = async () => {
      const videos = await searchVideos("ferrari 458") // default search term
      dispatch({ type: "SET_VIDEOS", payload: videos })
      dispatch({ type: "SET_SELECTED_VIDEO", payload: videos[0] })
    }
    fetchInitialVideo()
  }, [dispatch])

  return (
    <div className="ui container">
      <SearchBar />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail />
          </div>
          <div className="five wide column">
            <VideoList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

// YT API key: AIzaSyAEfpGInlEYnnbZB3bDtIslo74tGo6J6QQ
// API Call: https://www.googleapis.com/youtube/v3/search