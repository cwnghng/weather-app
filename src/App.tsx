import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WeatherApp from './views/WeatherApp'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WeatherApp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
