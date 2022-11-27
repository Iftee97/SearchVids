import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { VideosContextProvider } from './context/VideosContext'

ReactDOM.render(
  <VideosContextProvider>
    <App />
  </VideosContextProvider>,
  document.getElementById('root')
)