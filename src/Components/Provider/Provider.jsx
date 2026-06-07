export default function Provider() {
  const scrollToApp = () => {
    document.getElementById('appsec')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-white p-0" id="providers">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        
        <div className="relative overflow-hidden h-[300px] lg:h-auto rv">
          <img
            className="w-full h-full object-cover block"
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=900&q=85&auto=format&fit=crop"
            alt="WellnessGo provider"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[rgba(255,255,255,0.05)]"></div>
        </div>

        <div className="bg-cream p-[5rem_5%] lg:p-[5rem] flex flex-col justify-center rv d2">
          <div className="text-[0.67rem] font-bold tracking-[0.12em] uppercase text-gold mb-[0.6rem]">For Providers</div>
          <h2 className="font-serif text-[clamp(2rem,3vw,2.8rem)] font-normal text-deep leading-[1.15] tracking-[-0.015em]">
            Your skills.<br />
            Your schedule.<br />
            <i className="italic text-sage">Your income.</i>
          </h2>
          <p className="text-[0.97rem] text-soft leading-[1.7] max-w-[500px] mt-[0.7rem]">
            Whether you're an RN with evenings free, a Pilates instructor building your client base, or a massage therapist going independent — WellnessGo is your complete business infrastructure.
          </p>

          <div className="bg-white rounded-[var(--radius-rl)] p-[20px] shadow-sm mt-[2rem] mb-[2rem] max-w-[400px]">
            <div className="text-[0.57rem] text-muted uppercase tracking-[0.06em] mb-[2px]">Sample monthly earnings</div>
            <div className="font-serif text-[2.2rem] text-deep mb-[2px]">$4,820</div>
            <div className="text-[0.73rem] text-soft mb-[14px]">Registered Nurse · IV Specialist · Los Angeles</div>
            
            <div className="mb-[7px]">
              <div className="flex justify-between text-[0.69rem] mb-[3px]">
                <span className="text-muted">IV Sessions (14)</span>
                <span className="text-mid font-medium">$2,086</span>
              </div>
              <div className="h-[5px] bg-warm rounded-full overflow-hidden">
                <div className="h-full rounded-full w-[80%]" style={{ background: 'linear-gradient(90deg,var(--color-gold),var(--color-sage))' }}></div>
              </div>
            </div>
            
            <div className="mb-[7px]">
              <div className="flex justify-between text-[0.69rem] mb-[3px]">
                <span className="text-muted">Hotel bookings (8)</span>
                <span className="text-mid font-medium">$1,360</span>
              </div>
              <div className="h-[5px] bg-warm rounded-full overflow-hidden">
                <div className="h-full rounded-full w-[52%]" style={{ background: 'linear-gradient(90deg,var(--color-gold),var(--color-sage))' }}></div>
              </div>
            </div>

            <div className="mb-[7px]">
              <div className="flex justify-between text-[0.69rem] mb-[3px]">
                <span className="text-muted">Flash deals</span>
                <span className="text-mid font-medium">$870</span>
              </div>
              <div className="h-[5px] bg-warm rounded-full overflow-hidden">
                <div className="h-full rounded-full w-[33%]" style={{ background: 'linear-gradient(90deg,var(--color-gold),var(--color-sage))' }}></div>
              </div>
            </div>

            <div className="mb-0">
              <div className="flex justify-between text-[0.69rem] mb-[3px]">
                <span className="text-muted">Tips</span>
                <span className="text-mid font-medium">$504</span>
              </div>
              <div className="h-[5px] bg-warm rounded-full overflow-hidden">
                <div className="h-full rounded-full w-[19%]" style={{ background: 'linear-gradient(90deg,var(--color-gold),var(--color-sage))' }}></div>
              </div>
            </div>
          </div>

          <div className="flex gap-[0.75rem] flex-wrap">
            <button onClick={scrollToApp} className="bg-deep text-white border-none rounded-full p-[0.8rem_1.8rem] font-sans text-[0.9rem] font-bold cursor-pointer transition duration-200 hover:bg-gold">
              Apply as a provider →
            </button>
            <button className="bg-transparent border-[1.5px] border-parch text-mid rounded-full p-[0.8rem_1.8rem] font-sans text-[0.9rem] font-medium cursor-pointer transition duration-200 hover:border-gold hover:text-gold">
              Learn more
            </button>
          </div>
          <p className="text-[0.78rem] text-muted mt-[0.85rem]">85% revenue split · Direct bank deposit within 24h · Full schedule control</p>
        </div>

      </div>
    </section>
  );
}
