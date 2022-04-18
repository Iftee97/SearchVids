import { useState, useEffect } from "react";
import axios from "axios";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const apiKey = "AIzaSyAEfpGInlEYnnbZB3bDtIslo74tGo6J6QQ";
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&key=${apiKey}&q=${term}`
    );

    // console.log(response.data.items);
    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
