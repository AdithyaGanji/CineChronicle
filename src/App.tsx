import { Routes, Route } from 'react-router'
import HomePage from './pages/home-page/HomePage'
import SearchPage from './pages/search-page/SearchPage'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/search" element={<SearchPage />}></Route>
    </Routes>
  )
}

export default App
