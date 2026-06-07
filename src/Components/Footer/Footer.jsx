export default function Footer() {
  return (
    <footer className="bg-deep p-[3.5rem_5%_2rem]">
      <div className="max-w-[1360px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-[3rem] pb-[2.5rem] border-b border-[rgba(255,255,255,0.06)]">
        
        <div>
          <div className="flex items-center gap-[9px] mb-[0.7rem] cursor-pointer">
            <svg width="28" height="28" viewBox="0 0 120 120" fill="none">
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
            <span className="font-serif text-[1.25rem] font-medium text-[rgba(245,237,227,0.8)]">
              wellness<span className="text-sagelt">go</span>
            </span>
          </div>
          <p className="text-[0.8rem] text-[rgba(255,255,255,0.27)] leading-[1.65] max-w-[220px] mb-[1rem]">
            Your luxury at-home wellness concierge. Licensed professionals delivered to you — after hours, on demand, anywhere.
          </p>
          <p className="text-[0.7rem] text-[rgba(255,255,255,0.14)] italic mb-[1rem]">
            "Wellness Care — Anytime, Anywhere"
          </p>
          <div className="flex gap-[0.5rem]">
            <button className="w-[34px] h-[34px] rounded-[9px] bg-[rgba(255,255,255,0.06)] border-none flex items-center justify-center text-[0.85rem] cursor-pointer transition duration-150 text-white hover:bg-[rgba(255,255,255,0.1)]">
              📸
            </button>
            <button className="w-[34px] h-[34px] rounded-[9px] bg-[rgba(255,255,255,0.06)] border-none flex items-center justify-center text-[0.85rem] cursor-pointer transition duration-150 text-white hover:bg-[rgba(255,255,255,0.1)]">
              𝕏
            </button>
            <button className="w-[34px] h-[34px] rounded-[9px] bg-[rgba(255,255,255,0.06)] border-none flex items-center justify-center text-[0.85rem] cursor-pointer transition duration-150 text-white hover:bg-[rgba(255,255,255,0.1)]">
              in
            </button>
            <button className="w-[34px] h-[34px] rounded-[9px] bg-[rgba(255,255,255,0.06)] border-none flex items-center justify-center text-[0.85rem] cursor-pointer transition duration-150 text-white hover:bg-[rgba(255,255,255,0.1)]">
              ▶
            </button>
          </div>
        </div>

        <div>
          <div className="text-[0.63rem] font-bold tracking-[0.1em] uppercase text-[rgba(255,255,255,0.28)] mb-[0.9rem]">Services</div>
          <div className="flex flex-col gap-[0.42rem]">
            <a href="#" className="text-[0.8rem] text-[rgba(255,255,255,0.3)] transition duration-150 hover:text-sagelt">IV & Nursing</a>
            <a href="#" className="text-[0.8rem] text-[rgba(255,255,255,0.3)] transition duration-150 hover:text-sagelt">Pilates & Yoga</a>
            <a href="#" className="text-[0.8rem] text-[rgba(255,255,255,0.3)] transition duration-150 hover:text-sagelt">Massage</a>
            <a href="#" className="text-[0.8rem] text-[rgba(255,255,255,0.3)] transition duration-150 hover:text-sagelt">Aesthetics</a>
            <a href="#" className="text-[0.8rem] text-[rgba(255,255,255,0.3)] transition duration-150 hover:text-sagelt">Concierge Medicine</a>
            <a href="#" className="text-[0.8rem] text-[rgba(255,255,255,0.3)] transition duration-150 hover:text-sagelt">Women's Health</a>
            <a href="#" className="text-[0.8rem] text-[rgba(255,255,255,0.3)] transition duration-150 hover:text-sagelt">Peptide Programme</a>
            <a href="#" className="text-[0.8rem] text-[rgba(255,255,255,0.3)] transition duration-150 hover:text-sagelt">Meal Prep</a>
          </div>
        </div>

        <div>
          <div className="text-[0.63rem] font-bold tracking-[0.1em] uppercase text-[rgba(255,255,255,0.28)] mb-[0.9rem]">Platform</div>
          <div className="flex flex-col gap-[0.42rem]">
            <a href="#" className="text-[0.8rem] text-[rgba(255,255,255,0.3)] transition duration-150 hover:text-sagelt">Body Score</a>
            <a href="#" className="text-[0.8rem] text-[rgba(255,255,255,0.3)] transition duration-150 hover:text-sagelt">Safety System</a>
            <a href="#" className="text-[0.8rem] text-[rgba(255,255,255,0.3)] transition duration-150 hover:text-sagelt">Membership</a>
            <a href="#" className="text-[0.8rem] text-[rgba(255,255,255,0.3)] transition duration-150 hover:text-sagelt">WellnessGo Shop</a>
            <a href="#" className="text-[0.8rem] text-[rgba(255,255,255,0.3)] transition duration-150 hover:text-sagelt">Rewards</a>
            <a href="#" className="text-[0.8rem] text-[rgba(255,255,255,0.3)] transition duration-150 hover:text-sagelt">Annual Retreat</a>
            <a href="#" className="text-[0.8rem] text-[rgba(255,255,255,0.3)] transition duration-150 hover:text-sagelt">Hotel Partners</a>
            <a href="#" className="text-[0.8rem] text-[rgba(255,255,255,0.3)] transition duration-150 hover:text-sagelt">Inner Circle</a>
          </div>
        </div>

        <div>
          <div className="text-[0.63rem] font-bold tracking-[0.1em] uppercase text-[rgba(255,255,255,0.28)] mb-[0.9rem]">Company</div>
          <div className="flex flex-col gap-[0.42rem]">
            <a href="#" className="text-[0.8rem] text-[rgba(255,255,255,0.3)] transition duration-150 hover:text-sagelt">About</a>
            <a href="#" className="text-[0.8rem] text-[rgba(255,255,255,0.3)] transition duration-150 hover:text-sagelt">For Providers</a>
            <a href="#" className="text-[0.8rem] text-[rgba(255,255,255,0.3)] transition duration-150 hover:text-sagelt">For Hotels</a>
            <a href="#" className="text-[0.8rem] text-[rgba(255,255,255,0.3)] transition duration-150 hover:text-sagelt">Careers</a>
            <a href="#" className="text-[0.8rem] text-[rgba(255,255,255,0.3)] transition duration-150 hover:text-sagelt">Press</a>
            <a href="#" className="text-[0.8rem] text-[rgba(255,255,255,0.3)] transition duration-150 hover:text-sagelt">Privacy Policy</a>
            <a href="#" className="text-[0.8rem] text-[rgba(255,255,255,0.3)] transition duration-150 hover:text-sagelt">Terms</a>
            <a href="#" className="text-[0.8rem] text-[rgba(255,255,255,0.3)] transition duration-150 hover:text-sagelt">HIPAA Notice</a>
          </div>
        </div>
        
      </div>

      <div className="max-w-[1360px] mx-auto mt-[1.5rem] flex justify-between items-center flex-wrap gap-[1rem]">
        <p className="text-[0.73rem] text-[rgba(255,255,255,0.18)]">© 2026 WellnessGo · Not Just a Booking App. A Lifestyle.</p>
        <div className="flex gap-[1.25rem]">
          <a href="#" className="text-[0.73rem] text-[rgba(255,255,255,0.18)] transition duration-150 hover:text-[rgba(255,255,255,0.4)]">Privacy</a>
          <a href="#" className="text-[0.73rem] text-[rgba(255,255,255,0.18)] transition duration-150 hover:text-[rgba(255,255,255,0.4)]">Terms</a>
          <a href="#" className="text-[0.73rem] text-[rgba(255,255,255,0.18)] transition duration-150 hover:text-[rgba(255,255,255,0.4)]">HIPAA</a>
          <a href="#" className="text-[0.73rem] text-[rgba(255,255,255,0.18)] transition duration-150 hover:text-[rgba(255,255,255,0.4)]">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
