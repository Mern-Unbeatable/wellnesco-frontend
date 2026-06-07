import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { Outlet, useLocation } from 'react-router';
import { useEffect } from 'react';

function App() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (!location.hash) return;

    // Small delay to ensure DOM is fully painted when coming from another page
    setTimeout(() => {
      const sectionId = location.hash.slice(1);
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    // Re-run observer when pathname changes so new elements get revealed
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.rv');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <div className="font-sans text-mid bg-white overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
