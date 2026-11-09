import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import About from './pages/About.jsx'
import NewsEvents from './pages/NewsEvents.jsx'
import CompareSchools from './pages/CompareSchools.jsx'
import Contact from './pages/Contact.jsx'

// Sepna: add your routes here (see README "Integrating Sepna's pages").
export default function App() {
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo(0, 0), [pathname])
  return (<div className="min-h-screen flex flex-col">
    <Navbar/>
    <main className="flex-1">
      <Routes>
        <Route path="/" element={<Navigate to="/about" replace/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/news" element={<NewsEvents/>}/>
        <Route path="/compare" element={<CompareSchools/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Navigate to="/about" replace/>}/>
      </Routes>
    </main>
    <Footer/>
  </div>)
}
