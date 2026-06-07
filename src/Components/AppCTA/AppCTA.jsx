import { Apple, Play, Syringe, Activity, ShoppingBag, Check, Hash, Siren } from 'lucide-react';

export default function AppCTA() {
  const submitApp = () => {
    const el = document.getElementById('app-inp');
    if (!el.value.includes('@')) return el.focus();
    el.placeholder = "✓ Download link sent!";
    el.value = '';
    const btn = document.querySelector('.app-btn');
    if (btn) btn.textContent = 'Sent ✓';
  };

  return (
    <section className="bg-deep py-[6rem] px-[5%] relative overflow-hidden" id="appsec">
      <div className="app-glow absolute top-[-30%] right-[-10%] w-[55%] h-full pointer-events-none"></div>
      <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[5rem] items-center relative z-[1]">
        
        <div className="rv">
          <div className="text-[0.67rem] font-bold tracking-[0.12em] uppercase text-sagelt mb-[0.6rem]">Get the app</div>
          <h2 className="font-serif text-[clamp(2rem,3vw,2.8rem)] font-normal text-white leading-[1.15] tracking-[-0.015em]">
            Wellness that<br />
            comes to <i className="italic text-goldlt">you.</i>
          </h2>
          <p className="text-[1rem] text-[rgba(255,255,255,0.42)] leading-[1.75] max-w-[420px] mt-[0.7rem]">
            Download WellnessGo and book your first session in under 60 seconds. Or enter your email — we'll send you a link.
          </p>

          <div className="flex gap-[0.55rem] mt-[1.5rem] flex-wrap">
            <input
              id="app-inp"
              type="email"
              placeholder="Your email address"
              className="flex-1 min-w-[190px] h-[48px] rounded-full border-[1.5px] border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.07)] px-[1.2rem] font-sans text-[0.86rem] text-white outline-none transition duration-200 placeholder:text-[rgba(255,255,255,0.28)] focus:border-[rgba(154,114,72,0.4)]"
            />
            <button
              onClick={submitApp}
              className="app-btn h-[48px] bg-sage text-white border-none rounded-full px-[1.5rem] font-sans text-[0.86rem] font-bold cursor-pointer transition duration-200 hover:bg-sagelt hover:text-deep"
            >
              Send link
            </button>
          </div>

          <div className="flex gap-[0.75rem] flex-wrap mt-[1.8rem]">
            <button className="bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.1)] rounded-[12px] p-[0.55rem_1.2rem] flex items-center gap-[0.6rem] cursor-pointer transition duration-200 font-sans hover:bg-[rgba(255,255,255,0.12)]">
              <span className="flex items-center justify-center"><Apple size={24} className="text-white" /></span>
              <span className="text-left">
                <span className="text-[0.57rem] text-[rgba(255,255,255,0.42)] block">Download on the</span>
                <span className="text-[0.86rem] font-bold text-white block">App Store</span>
              </span>
            </button>
            <button className="bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.1)] rounded-[12px] p-[0.55rem_1.2rem] flex items-center gap-[0.6rem] cursor-pointer transition duration-200 font-sans hover:bg-[rgba(255,255,255,0.12)]">
              <span className="flex items-center justify-center"><Play size={24} className="text-white" fill="currentColor" /></span>
              <span className="text-left">
                <span className="text-[0.57rem] text-[rgba(255,255,255,0.42)] block">Get it on</span>
                <span className="text-[0.86rem] font-bold text-white block">Google Play</span>
              </span>
            </button>
          </div>
        </div>

        <div className="flex gap-[1rem] items-start justify-center rv d2">
          <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-[30px] p-[14px] shadow-[0_30px_60px_rgba(0,0,0,0.3)]">
            <div className="bg-[rgba(255,255,255,0.04)] rounded-[20px] p-[12px] h-[280px] flex flex-col gap-[7px]">
              <div className="text-[0.52rem] text-[rgba(255,255,255,0.22)] uppercase tracking-[0.06em]">Good evening, Sarah ✦</div>
              <div className="bg-[rgba(154,114,72,0.12)] border border-[rgba(154,114,72,0.18)] rounded-[12px] p-[10px] flex-1">
                <div className="text-[0.54rem] text-[rgba(255,255,255,0.28)] uppercase tracking-[0.06em] mb-[3px]">Body Score</div>
                <div className="font-serif text-[2.2rem] text-white leading-none">72</div>
              </div>
              <div className="bg-[rgba(255,255,255,0.06)] rounded-[9px] p-[8px_10px] flex items-center gap-[7px]">
                <div className="w-[20px] h-[20px] rounded-[6px] flex items-center justify-center shrink-0 bg-[rgba(154,114,72,0.15)]"><Syringe size={12} className="text-gold" /></div>
                <div className="text-[0.63rem] text-[rgba(255,255,255,0.45)] flex-1">Jessica M. — IV Hydration</div>
                <div className="text-[0.63rem] font-semibold text-goldlt">8:00 PM</div>
              </div>
              <div className="bg-[rgba(255,255,255,0.06)] rounded-[9px] p-[8px_10px] flex items-center gap-[7px]">
                <div className="w-[20px] h-[20px] rounded-[6px] flex items-center justify-center shrink-0 bg-[rgba(122,143,88,0.15)]"><Activity size={12} className="text-sage" /></div>
                <div className="text-[0.63rem] text-[rgba(255,255,255,0.45)] flex-1">Sofia R. — Pilates</div>
                <div className="text-[0.63rem] font-semibold text-goldlt">Thu 7am</div>
              </div>
              <div className="bg-[rgba(255,255,255,0.06)] rounded-[9px] p-[8px_10px] flex items-center gap-[7px]">
                <div className="w-[20px] h-[20px] rounded-[6px] flex items-center justify-center shrink-0 bg-[rgba(138,92,56,0.15)]"><Activity size={12} className="text-gold" /></div>
                <div className="text-[0.63rem] text-[rgba(255,255,255,0.45)] flex-1">James O. — Stretch</div>
                <div className="text-[0.63rem] font-semibold text-goldlt">Fri 9am</div>
              </div>
              <div className="bg-[rgba(154,114,72,0.08)] rounded-[9px] p-[8px_10px] flex items-center gap-[7px]">
                <div className="w-[20px] h-[20px] rounded-[6px] flex items-center justify-center shrink-0 bg-[rgba(154,114,72,0.2)]"><ShoppingBag size={12} className="text-gold" /></div>
                <div className="text-[0.63rem] text-[rgba(255,255,255,0.45)] flex-1">2 products matched today</div>
                <div className="text-[0.63rem] font-semibold text-goldlt">View</div>
              </div>
            </div>
          </div>
          
          <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-[30px] p-[14px] shadow-[0_30px_60px_rgba(0,0,0,0.3)] mt-[2.5rem] opacity-80 hidden sm:block">
            <div className="bg-[rgba(255,255,255,0.04)] rounded-[20px] p-[12px] h-[220px] flex flex-col gap-[7px]">
              <div className="text-[0.52rem] text-[rgba(255,255,255,0.22)] uppercase tracking-[0.06em] mb-[6px]">Safety Center · Active</div>
              <div className="bg-[rgba(255,255,255,0.06)] rounded-[9px] p-[8px_10px] flex items-center gap-[7px]">
                <div className="w-[20px] h-[20px] rounded-[6px] flex items-center justify-center shrink-0 bg-[rgba(160,184,120,0.12)]"><Check size={12} className="text-sage" /></div>
                <div className="text-[0.63rem] text-[rgba(255,255,255,0.45)] flex-1">Face-matched</div>
                <div className="text-[0.63rem] font-semibold text-sagelt">Active</div>
              </div>
              <div className="bg-[rgba(255,255,255,0.06)] rounded-[9px] p-[8px_10px] flex items-center gap-[7px]">
                <div className="w-[20px] h-[20px] rounded-[6px] flex items-center justify-center shrink-0 bg-[rgba(160,184,120,0.12)]"><Hash size={12} className="text-sage" /></div>
                <div className="text-[0.63rem] text-[rgba(255,255,255,0.45)] flex-1">PIN: 7349</div>
                <div className="text-[0.63rem] font-semibold text-sagelt">Ready</div>
              </div>
              <div className="bg-[rgba(255,255,255,0.06)] rounded-[9px] p-[8px_10px] flex items-center gap-[7px]">
                <div className="w-[20px] h-[20px] rounded-[6px] flex items-center justify-center shrink-0 bg-[rgba(196,80,60,0.1)]"><Siren size={12} className="text-[#c4503c]" /></div>
                <div className="text-[0.63rem] text-[rgba(255,255,255,0.45)] flex-1">SOS — one tap</div>
                <div className="text-[0.63rem] font-semibold text-[rgba(196,137,122,0.8)]">Always ready</div>
              </div>
              <div className="bg-[rgba(122,143,88,0.1)] border border-[rgba(122,143,88,0.15)] rounded-[9px] p-[8px_10px] text-[0.58rem] text-sagelt leading-[1.6] mt-[4px]">
                7 layers active ✓<br />Mom + Jake notified
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
