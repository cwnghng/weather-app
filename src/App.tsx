import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Debug from './views/Debug'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Debug />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
