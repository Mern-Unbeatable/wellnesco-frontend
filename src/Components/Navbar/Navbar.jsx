import { Link, useLocation, useNavigate } from 'react-router';
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('');
  const activeSectionRef = useRef('');

  useEffect(() => {
    if (pathname !== '/') return;

    const handleScroll = () => {
      const sections = ['bodyscore', 'safety', 'membership', 'providers'];
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Use the top third of the screen as the intersection trigger line
          const triggerLine = window.innerHeight / 3;
          if (rect.top <= triggerLine && rect.bottom >= triggerLine) {
            current = section;
            break;
          }
        }
      }
      
      if (current !== activeSectionRef.current) {
        activeSectionRef.current = current;
        setActiveSection(current);
        
        // Update URL hash seamlessly as we scroll past sections
        const newUrl = current ? `/#${current}` : '/';
        if (window.location.hash !== `#${current}` && window.location.pathname === '/') {
          window.history.replaceState(null, '', newUrl);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Trigger once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const scrollToApp = () => {
    document.getElementById('appsec')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavClick = (e, targetHash) => {
    e.preventDefault();
    const sectionId = targetHash.slice(1);
    
    if (pathname !== '/') {
      navigate('/' + targetHash);
    } else {
      const target = document.getElementById(sectionId);
      if (target) {
        // Adjust for navbar height (approx 66px) if desired, but scrollIntoView usually works well enough
        // Or you can use a smooth scroll library, but native smooth scroll is fine.
        target.scrollIntoView({ behavior: 'smooth' });
        // Update URL to match standard anchor behavior
        window.history.pushState(null, '', '/' + targetHash);
        activeSectionRef.current = sectionId;
        setActiveSection(sectionId);
      }
    }
  };

  const getLinkClass = (path, targetHash = '') => {
    let isActive = false;
    if (targetHash) {
      isActive = pathname === '/' && activeSection === targetHash.slice(1);
    } else {
      isActive = pathname === path && !activeSection;
    }
    return `text-[0.84rem] font-medium transition duration-200 hover:text-deep pb-[2px] ${
      isActive 
        ? 'text-deep border-b-[2px] border-gold' 
        : 'text-mid border-b-[2px] border-transparent'
    }`;
  };

  return (
    <nav
      id="nav"
      className="fixed top-0 left-0 right-0 z-300 h-16.5 px-[5%] flex items-center justify-between bg-white/92 backdrop-blur-[18px] border-b border-golddim transition-all duration-300"
    >
      <Link to="/" onClick={() => setActiveSection('')} className="flex items-center gap-2.25 cursor-pointer no-underline">
        <svg width="32" height="32" viewBox="0 0 120 120" fill="none">
          <circle cx="60" cy="60" r="54" stroke="#9a7248" strokeWidth="4.5" fill="none" />
          <path d="M26 82C26 50 54 36 54 36S32 62 54 80C32 74 26 82 26 82Z" fill="#7a8f58" />
          <path
            d="M51 84C51 73 62 60 68 46"
            stroke="#8a5c38"
            strokeWidth="5.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M68 46C77 38 84 44 86 53"
            stroke="#8a5c38"
            strokeWidth="4.5"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="65" cy="40" r="9" fill="#8a5c38" />
        </svg>
        <span className="font-serif text-[1.35rem] font-medium text-deep">
          wellness<b className="text-sage font-medium">go</b>
        </span>
      </Link>
      
      <div className="hidden md:flex gap-[1.8rem] items-center pt-1">
        <Link to="/services" onClick={() => setActiveSection('')} className={getLinkClass('/services')}>Services</Link>
        <a href="/#bodyscore" onClick={(e) => handleNavClick(e, '#bodyscore')} className={getLinkClass('/', '#bodyscore')}>Body Score</a>
        <a href="/#safety" onClick={(e) => handleNavClick(e, '#safety')} className={getLinkClass('/', '#safety')}>Safety</a>
        <a href="/#membership" onClick={(e) => handleNavClick(e, '#membership')} className={getLinkClass('/', '#membership')}>Membership</a>
        <a href="/#providers" onClick={(e) => handleNavClick(e, '#providers')} className={getLinkClass('/', '#providers')}>For Providers</a>
      </div>
      
      <div className="flex gap-[0.6rem] items-center">
        <button
          onClick={scrollToApp}
          className="bg-sage text-white border-none rounded-full px-5 py-2 font-sans text-[0.82rem] font-bold cursor-pointer transition duration-200 hover:bg-sagelt hover:text-deep"
        >
          Get the app
        </button>
      </div>
    </nav>
  );
}
