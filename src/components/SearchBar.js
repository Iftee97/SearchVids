import React, { useState } from "react"
import { searchVideos } from "../api"
import { useVideosContext } from "../hooks/useVideosContext"

const SearchBar = () => {
  const [term, setTerm] = useState("")
  const { dispatch } = useVideosContext()

  const onFormSubmit = async (event) => {
    event.preventDefault()
    const videos = await searchVideos(term)
    dispatch({ type: "SET_VIDEOS", payload: videos })
    dispatch({ type: "SET_SELECTED_VIDEO", payload: videos[0] })
  }

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            placeholder="search videos"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  )
}

export default SearchBar