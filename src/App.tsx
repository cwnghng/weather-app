import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RouterExample from './views/RouterExample'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RouterExample />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
