import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import TrustBar from './Components/TrustBar/TrustBar';
import Stats from './Components/Stats/Stats';
import HowItWorks from './Components/HowItWorks/HowItWorks';
import Services from './Components/Services/Services';
import Lifestyle from './Components/Lifestyle/Lifestyle';
import BodyScore from './Components/BodyScore/BodyScore';
import Safety from './Components/Safety/Safety';
import Membership from './Components/Membership/Membership';
import Provider from './Components/Provider/Provider';
import AppCTA from './Components/AppCTA/AppCTA';
import Footer from './Components/Footer/Footer';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Simple intersection observer for reveal animations like the original HTML
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.rv').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-sans text-mid bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustBar />
      <Stats />
      <HowItWorks />
      <Services />
      <Lifestyle />
      <BodyScore />
      <Safety />
      <Membership />
      <Provider />
      <AppCTA />
      <Footer />
    </div>
  );
}

export default App;
