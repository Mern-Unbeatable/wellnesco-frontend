import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router"
import './index.css'
import App from './App.jsx'
import Home from './Pages/Home.jsx'
import Services from './Pages/Services.jsx'
import Privacy from './Pages/Privacy.jsx'
import Terms from './Pages/Terms.jsx'
import About from './Pages/About.jsx'
import Providers from './Pages/Providers.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="about" element={<About />} />
          <Route path="providers" element={<Providers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
