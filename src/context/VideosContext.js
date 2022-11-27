import { createContext, useReducer } from 'react'

export const VideosContext = createContext()

const vidoesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_VIDEOS':
      return {
        ...state,
        videos: action.payload,
      }

    case 'SET_SELECTED_VIDEO':
      return {
        ...state,
        selectedVideo: action.payload,
      }

    default:
      return state
  }
}

export const VideosContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(vidoesReducer, {
    vidoes: [],
    selectedVideo: {}
  })

  return (
    <VideosContext.Provider value={{ ...state, dispatch }}>
      {children}
    </VideosContext.Provider>
  )
}