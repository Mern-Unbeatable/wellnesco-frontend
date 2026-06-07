import { Link } from 'react-router';

export default function Navbar() {
  const scrollToApp = () => {
    document.getElementById('appsec')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      id="nav"
      className="fixed top-0 left-0 right-0 z-[300] h-[66px] px-[5%] flex items-center justify-between bg-white/92 backdrop-blur-[18px] border-b border-golddim transition-all duration-300"
    >
      <Link to="/" className="flex items-center gap-[9px] cursor-pointer no-underline">
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
      
      <div className="hidden md:flex gap-[1.8rem]">
        <Link to="/services" className="text-[0.84rem] font-medium text-mid transition duration-200 hover:text-deep">Services</Link>
        <a href="/#bodyscore" className="text-[0.84rem] font-medium text-mid transition duration-200 hover:text-deep">Body Score</a>
        <a href="/#safety" className="text-[0.84rem] font-medium text-mid transition duration-200 hover:text-deep">Safety</a>
        <a href="/#membership" className="text-[0.84rem] font-medium text-mid transition duration-200 hover:text-deep">Membership</a>
        <Link to="/providers" className="text-[0.84rem] font-medium text-mid transition duration-200 hover:text-deep">For Providers</Link>
      </div>
      
      <div className="flex gap-[0.6rem] items-center">

        <button
          onClick={scrollToApp}
          className="bg-sage text-white border-none rounded-full px-[1.25rem] py-[0.5rem] font-sans text-[0.82rem] font-bold cursor-pointer transition duration-200 hover:bg-sagelt hover:text-deep"
        >
          Get the app
        </button>
      </div>
    </nav>
  );
}
