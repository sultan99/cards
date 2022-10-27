import App from './app'
import React from 'react'
import {createRoot} from 'react-dom/client'

const rootElement = document.getElementById(`app`)

if (rootElement) {
  createRoot(rootElement).render(<App/>)
}
