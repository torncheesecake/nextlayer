// App.jsx
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import CyberSecurity from './pages/CyberSecurity';
import SuiteApps from './pages/SuiteApps';

function Layout() {
  const { pathname } = useLocation();
  const isCyber = pathname.startsWith('/cybersecurity');

  useEffect(() => {
  const root = document.documentElement;
  const isCyber = location.pathname.startsWith('/cybersecurity');
  root.classList.toggle('dark', isCyber);
}, [location.pathname]);



  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="cybersecurity" element={<CyberSecurity />} />
          <Route path="suiteapps" element={<SuiteApps />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}
