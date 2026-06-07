export default function Hero() {
  const heroGo = () => {
    // Basic interaction for demo
    alert("Early access form submitted!");
  };

  return (
    <section className="pt-[66px] bg-cream min-h-[96vh] flex flex-col relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 flex-1 max-w-[1360px] mx-auto w-full px-[5%]">
        
        <div className="flex flex-col justify-center py-[4rem] lg:pr-[3rem]">
          <div className="inline-flex items-center gap-[0.45rem] bg-sagedim border border-[rgba(122,143,88,0.2)] rounded-full px-[0.8rem] py-[0.25rem] text-[0.68rem] font-bold tracking-[0.09em] uppercase text-sage mb-[1.5rem] self-start">
            <span className="w-[6px] h-[6px] rounded-full bg-sage animate-pulse-custom"></span>
            Launching 2026 · Early access open
          </div>
          
          <h1 className="font-serif text-[clamp(3rem,4.8vw,5rem)] font-normal leading-[1.06] tracking-[-0.025em] text-deep mb-[1.3rem]">
            Your luxury<br />
            wellness <i className="italic text-gold">concierge.</i><br />
            At home.
          </h1>
          
          <p className="text-[1.05rem] text-soft leading-[1.75] max-w-[430px] mb-[2rem]">
            Licensed nurses, Pilates instructors, concierge doctors, aestheticians and more — delivered to your door. After hours. On demand. Always safe.
          </p>
          
          <div className="flex gap-[0.5rem] mb-[1.6rem] flex-wrap">
            <input
              className="flex-1 min-w-[200px] h-[50px] rounded-full border-[1.5px] border-parch bg-white px-[1.3rem] font-sans text-[0.88rem] text-deep outline-none transition duration-200 focus:border-sage"
              id="hero-inp"
              type="email"
              placeholder="Enter your email address"
            />
            <button
              onClick={heroGo}
              className="h-[50px] bg-deep text-white border-none rounded-full px-[1.8rem] font-sans text-[0.88rem] font-bold cursor-pointer transition duration-200 whitespace-nowrap hover:bg-gold"
            >
              Get early access →
            </button>
          </div>
          
          <div className="flex gap-[1.5rem] flex-wrap">
            <span className="text-[0.76rem] text-muted flex items-center gap-[0.35rem] before:content-['✓'] before:text-sage before:font-bold">
              Free to join
            </span>
            <span className="text-[0.76rem] text-muted flex items-center gap-[0.35rem] before:content-['✓'] before:text-sage before:font-bold">
              Cancel anytime
            </span>
            <span className="text-[0.76rem] text-muted flex items-center gap-[0.35rem] before:content-['✓'] before:text-sage before:font-bold">
              Every provider verified
            </span>
          </div>
        </div>

        <div className="relative overflow-hidden hidden lg:block">
          <img
            className="w-full h-full object-cover block"
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=900&q=85&auto=format&fit=crop"
            alt="Luxury at-home massage"
            loading="eager"
          />
          <div className="hero-img-overlay absolute inset-0"></div>
          
          <div className="absolute bottom-[2.5rem] left-[2.5rem] bg-white/95 rounded-[var(--radius-r)] px-[16px] py-[13px] shadow-sm backdrop-blur-[10px]">
            <div className="flex items-center gap-[9px]">
              <div className="flex">
                <div
                  className="w-[28px] h-[28px] rounded-full border-2 border-white object-cover -mr-[8px] bg-cream"
                  style={{ background: 'linear-gradient(135deg,#9a7248,#c4897a)' }}
                ></div>
                <div
                  className="w-[28px] h-[28px] rounded-full border-2 border-white object-cover -mr-[8px] bg-cream"
                  style={{ background: 'linear-gradient(135deg,#7a8f58,#a0b878)' }}
                ></div>
                <div
                  className="w-[28px] h-[28px] rounded-full border-2 border-white object-cover -mr-[8px] bg-cream"
                  style={{ background: 'linear-gradient(135deg,#5a3e28,#9a7248)' }}
                ></div>
              </div>
              <div>
                <strong className="text-[0.78rem] text-deep block">2,400+ providers</strong>
                <span className="text-[0.65rem] text-soft">available near you</span>
              </div>
            </div>
            <div className="text-[0.65rem] text-gold mt-[4px]">★★★★★ &nbsp;4.9 average rating</div>
          </div>
          
          <div className="absolute bottom-[2.5rem] right-[2.5rem] bg-white/95 rounded-full px-[0.9rem] py-[0.38rem] shadow-sh flex items-center gap-[0.45rem] text-[0.72rem] font-semibold text-sage before:content-[''] before:w-[7px] before:h-[7px] before:rounded-full before:bg-sage before:animate-pulse-fast">
            Available tonight
          </div>
        </div>

      </div>
    </section>
  );
}
