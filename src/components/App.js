import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import axios from "axios";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onTermSubmit = async (term) => {
    const apiKey = "AIzaSyAEfpGInlEYnnbZB3bDtIslo74tGo6J6QQ";
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&key=${apiKey}&q=${term}`
    );

    // console.log(response.data.items);
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  const onVideoSelect = (video) => {
    // console.log("From the app:", video);
    setSelectedVideo(video);
  };

  useEffect(() => {
    onTermSubmit("happy dogs");
  }, []);

  return (
    <div className="ui container">
      <SearchBar onTermSubmit={onTermSubmit} />

      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>

          <div className="five wide column">
            <VideoList onVideoSelect={onVideoSelect} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

// YT API key: AIzaSyAEfpGInlEYnnbZB3bDtIslo74tGo6J6QQ
// API Call: https://www.googleapis.com/youtube/v3/search
