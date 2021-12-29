import { Routes, BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import HomePage from './pages/HomePage';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
