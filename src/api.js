import axios from "axios"

export const searchVideos = async (term) => {
  const apiKey = "AIzaSyAEfpGInlEYnnbZB3bDtIslo74tGo6J6QQ";
  const response = await axios.get(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&key=${apiKey}&q=${term}`
  );

  console.log("response: [api]", response)
  return response.data.items
}