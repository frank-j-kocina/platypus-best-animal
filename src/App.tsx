import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import ImageDetail from './pages/ImageDetail'
import SubmitPhoto from './pages/SubmitPhoto'
import Diet from './pages/Diet'
import Mating from './pages/Mating'
import Habitat from './pages/Habitat'
import Classification from './pages/Classification'
import Anatomy from './pages/Anatomy'
import Behavior from './pages/Behavior'
import CoolFacts from './pages/CoolFacts'
import './App.css'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:id" element={<ImageDetail />} />
          <Route path="/gallery/submitted/:id" element={<ImageDetail />} />
          <Route path="/submit-photo" element={<SubmitPhoto />} />
          <Route path="/diet" element={<Diet />} />
          <Route path="/mating" element={<Mating />} />
          <Route path="/habitat" element={<Habitat />} />
          <Route path="/classification" element={<Classification />} />
          <Route path="/anatomy" element={<Anatomy />} />
          <Route path="/behavior" element={<Behavior />} />
          <Route path="/cool-facts" element={<CoolFacts />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
