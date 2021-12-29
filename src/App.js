import { Routes, BrowserRouter, Route, useLocation } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import HomePage from './pages/HomePage';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutPage from './pages/AboutPage';
import { useEffect, useState } from 'react';
AOS.init();

function App() {

  const [isDark, setIsDark] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname == "/about") setIsDark(true)
    else { setIsDark(false) }
  }, [isDark, location])

  return (

    <Layout isDark={isDark}>
      <Routes location={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
