import { useEffect } from 'react';

export default function BodyScore() {
  useEffect(() => {
    // Basic animation for the ring
    const timer = setTimeout(() => {
      const ring = document.getElementById('bsring');
      if (ring) {
        ring.style.strokeDashoffset = '88';
      }
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-warm py-[6rem] px-[5%]" id="bodyscore">
      <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[5rem] items-center">
        
        <div className="rv">
          <div className="text-[0.67rem] font-bold tracking-[0.12em] uppercase text-gold mb-[0.6rem]">Body Score</div>
          <h2 className="font-serif text-[clamp(2rem,3vw,2.8rem)] font-normal text-deep leading-[1.15] tracking-[-0.015em]">
            Your wellness,<br />
            <i className="italic text-sage">quantified every day.</i>
          </h2>
          <p className="text-[0.97rem] text-soft leading-[1.7] max-w-[500px] mt-[0.7rem]">
            One number — 0 to 100 — that tells you exactly what your body needs today. It drives which services appear first, which products surface in the shop, and when to alert you. No device required.
          </p>
          
          <div className="mt-[1.5rem] flex flex-col gap-[0.6rem]">
            <div className="flex items-center gap-[0.85rem] bg-white rounded-[var(--radius-r)] p-[0.8rem_1rem] shadow-sh">
              <span className="text-[1rem]">😴</span>
              <span className="text-[0.83rem] font-medium text-deep flex-1">Sleep quality & duration</span>
              <span className="text-[0.72rem] text-muted">35%</span>
            </div>
            <div className="flex items-center gap-[0.85rem] bg-white rounded-[var(--radius-r)] p-[0.8rem_1rem] shadow-sh">
              <span className="text-[1rem]">⚡</span>
              <span className="text-[0.83rem] font-medium text-deep flex-1">Energy level</span>
              <span className="text-[0.72rem] text-muted">30%</span>
            </div>
            <div className="flex items-center gap-[0.85rem] bg-white rounded-[var(--radius-r)] p-[0.8rem_1rem] shadow-sh">
              <span className="text-[1rem]">🧠</span>
              <span className="text-[0.83rem] font-medium text-deep flex-1">Stress level</span>
              <span className="text-[0.72rem] text-muted">20%</span>
            </div>
            <div className="flex items-center gap-[0.85rem] bg-white rounded-[var(--radius-r)] p-[0.8rem_1rem] shadow-sh">
              <span className="text-[1rem]">🌿</span>
              <span className="text-[0.83rem] font-medium text-deep flex-1">Mood</span>
              <span className="text-[0.72rem] text-muted">15%</span>
            </div>
            <div className="flex items-center gap-[0.85rem] bg-sagedim border border-[rgba(122,143,88,0.18)] rounded-[var(--radius-r)] p-[0.8rem_1rem]">
              <span className="text-[1rem]">⌚</span>
              <span className="text-[0.83rem] font-medium text-deep flex-1">Oura · Apple Watch · WHOOP · Garmin</span>
              <span className="text-[0.68rem] font-semibold text-sage">Optional</span>
            </div>
          </div>
          
          <p className="text-[0.77rem] text-muted mt-[0.85rem]">
            No wearable? A 30-second check-in works just as well — from day one. Zero competitors connect wearable data to bookable services in one platform.
          </p>
        </div>

        <div className="rv d2">
          <div className="bg-deep rounded-[var(--radius-rxl)] p-[22px] shadow-sl relative max-w-[320px] mx-auto lg:mx-0 lg:ml-auto">
            <div className="bg-[rgba(255,255,255,0.05)] rounded-[20px] p-[16px]">
              
              <div className="relative w-[120px] h-[120px] mx-auto mb-[14px]">
                <svg width="120" height="120" viewBox="0 0 120 120" className="-rotate-90">
                  <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="9"/>
                  <circle
                    id="bsring"
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="#9a7248"
                    strokeWidth="9"
                    strokeDasharray="314"
                    strokeDashoffset="314"
                    strokeLinecap="round"
                    className="origin-center transition-all duration-1200 ease-in-out"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="font-serif text-[2.6rem] font-semibold text-white leading-none">72</div>
                  <div className="text-[0.38rem] text-[rgba(255,255,255,0.3)] uppercase tracking-[0.07em]">Score</div>
                </div>
              </div>

              <div className="flex flex-col gap-[7px] mb-[14px]">
                <div className="flex items-center gap-[8px]">
                  <span className="text-[0.68rem] text-[rgba(255,255,255,0.38)] w-[44px] shrink-0">Sleep</span>
                  <div className="flex-1 h-[4px] bg-[rgba(255,255,255,0.07)] rounded-full overflow-hidden">
                    <div className="h-full rounded-full w-[45%]" style={{ background: 'linear-gradient(90deg,#7ab8f0,#7a8f58)' }}></div>
                  </div>
                  <span className="text-[0.66rem] font-semibold text-[#7ab8f0] w-[24px] text-right">6h</span>
                </div>
                <div className="flex items-center gap-[8px]">
                  <span className="text-[0.68rem] text-[rgba(255,255,255,0.38)] w-[44px] shrink-0">Energy</span>
                  <div className="flex-1 h-[4px] bg-[rgba(255,255,255,0.07)] rounded-full overflow-hidden">
                    <div className="h-full rounded-full w-[35%]" style={{ background: 'linear-gradient(90deg,#b07858,#9a7248)' }}></div>
                  </div>
                  <span className="text-[0.66rem] font-semibold text-[#b07858] w-[24px] text-right">Low</span>
                </div>
                <div className="flex items-center gap-[8px]">
                  <span className="text-[0.68rem] text-[rgba(255,255,255,0.38)] w-[44px] shrink-0">Stress</span>
                  <div className="flex-1 h-[4px] bg-[rgba(255,255,255,0.07)] rounded-full overflow-hidden">
                    <div className="h-full rounded-full w-[60%]" style={{ background: 'linear-gradient(90deg,#c44040,#b07858)' }}></div>
                  </div>
                  <span className="text-[0.66rem] font-semibold text-[#b07858] w-[24px] text-right">Med</span>
                </div>
                <div className="flex items-center gap-[8px]">
                  <span className="text-[0.68rem] text-[rgba(255,255,255,0.38)] w-[44px] shrink-0">Mood</span>
                  <div className="flex-1 h-[4px] bg-[rgba(255,255,255,0.07)] rounded-full overflow-hidden">
                    <div className="h-full rounded-full w-[55%]" style={{ background: 'linear-gradient(90deg,#9a7248,#a0b878)' }}></div>
                  </div>
                  <span className="text-[0.66rem] font-semibold text-[rgba(255,255,255,0.6)] w-[24px] text-right">Okay</span>
                </div>
              </div>

              <div className="text-[0.53rem] text-[rgba(255,255,255,0.25)] uppercase tracking-[0.07em] mb-[7px]">Matched for you tonight</div>
              
              <div className="flex items-center gap-[8px] bg-[rgba(255,255,255,0.05)] rounded-[9px] p-[7px_9px] mb-[5px] cursor-pointer transition duration-150 hover:bg-[rgba(255,255,255,0.08)]">
                <span className="text-[0.85rem] shrink-0">🤸</span>
                <div className="flex-1">
                  <div className="text-[0.68rem] font-semibold text-white">Assisted Stretch</div>
                  <div className="text-[0.58rem] text-[rgba(255,255,255,0.3)]">Neck soreness · $85</div>
                </div>
                <button className="bg-sage text-white border-none rounded-[6px] p-[0.18rem_0.55rem] font-sans text-[0.6rem] font-semibold cursor-pointer">Book</button>
              </div>
              
              <div className="flex items-center gap-[8px] bg-[rgba(255,255,255,0.05)] rounded-[9px] p-[7px_9px] mb-[5px] cursor-pointer transition duration-150 hover:bg-[rgba(255,255,255,0.08)]">
                <span className="text-[0.85rem] shrink-0">💉</span>
                <div className="flex-1">
                  <div className="text-[0.68rem] font-semibold text-white">IV Hydration</div>
                  <div className="text-[0.58rem] text-[rgba(255,255,255,0.3)]">Low energy · $149</div>
                </div>
                <button className="bg-sage text-white border-none rounded-[6px] p-[0.18rem_0.55rem] font-sans text-[0.6rem] font-semibold cursor-pointer">Book</button>
              </div>

              <div className="flex items-center gap-[8px] bg-[rgba(255,255,255,0.05)] rounded-[9px] p-[7px_9px] mb-[5px] cursor-pointer transition duration-150 hover:bg-[rgba(255,255,255,0.08)]">
                <span className="text-[0.85rem] shrink-0">🌬️</span>
                <div className="flex-1">
                  <div className="text-[0.68rem] font-semibold text-white">Breathwork</div>
                  <div className="text-[0.58rem] text-[rgba(255,255,255,0.3)]">Stress high · $75</div>
                </div>
                <button className="bg-sage text-white border-none rounded-[6px] p-[0.18rem_0.55rem] font-sans text-[0.6rem] font-semibold cursor-pointer">Book</button>
              </div>

              <div className="flex gap-[0.4rem] flex-wrap mt-[12px]">
                <span className="bg-sagedim border border-[rgba(122,143,88,0.2)] text-sagelt rounded-full p-[0.2rem_0.65rem] text-[0.62rem]">⭕ Oura</span>
                <span className="bg-[rgba(255,255,255,0.06)] rounded-full p-[0.2rem_0.65rem] text-[0.62rem] text-[rgba(255,255,255,0.35)]">⌚ Apple</span>
                <span className="bg-[rgba(255,255,255,0.06)] rounded-full p-[0.2rem_0.65rem] text-[0.62rem] text-[rgba(255,255,255,0.35)]">⚡ WHOOP</span>
                <span className="bg-[rgba(255,255,255,0.06)] rounded-full p-[0.2rem_0.65rem] text-[0.62rem] text-[rgba(255,255,255,0.35)]">🌀 Garmin</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
