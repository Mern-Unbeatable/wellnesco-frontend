export default function Safety() {
  return (
    <section className="bg-white py-[6rem] px-[5%]" id="safety">
      <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-[5rem] items-start">
        
        <div className="rv hidden lg:block">
          <div className="rounded-[var(--radius-rxl)] overflow-hidden shadow-sl">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=700&q=85&auto=format&fit=crop"
              alt="WellnessGo verified provider"
              className="w-full h-[440px] object-cover block"
            />
          </div>
        </div>
        
        <div className="rv d1">
          <div className="text-[0.67rem] font-bold tracking-[0.12em] uppercase text-gold mb-[0.6rem]">7-Layer Safety System</div>
          <h2 className="font-serif text-[clamp(2rem,3vw,2.8rem)] font-normal text-deep leading-[1.15] tracking-[-0.015em]">
            The safest way to book a<br />
            <i className="italic text-sage">professional at home.</i>
          </h2>
          <p className="text-[0.97rem] text-soft leading-[1.7] max-w-[500px] mt-[0.6rem]">
            Uber has two safety layers. Rover has one. WellnessGo activates all seven automatically — the moment you confirm a booking.
          </p>
          
          <div className="flex flex-col gap-[0.6rem] mt-[2rem]">
            <div className="flex items-center gap-[0.9rem] p-[0.85rem_1rem] rounded-[var(--radius-r)] bg-cream border border-warm transition duration-200 cursor-default hover:border-[rgba(122,143,88,0.25)] hover:bg-[rgba(122,143,88,0.04)]">
              <div className="text-[1.1rem] shrink-0 w-[36px] h-[36px] rounded-[9px] bg-white shadow-sh flex items-center justify-center">📸</div>
              <div>
                <div className="text-[0.86rem] font-semibold text-deep">Live Face-Match Verification</div>
                <div className="text-[0.73rem] text-soft mt-[1px]">Real-time selfie matched to verified profile before arrival</div>
              </div>
              <span className="ml-auto text-[0.58rem] font-bold tracking-[0.05em] uppercase bg-golddim border border-[rgba(154,114,72,0.2)] text-gold rounded-full p-[0.12rem_0.52rem] whitespace-nowrap">Only on WG</span>
            </div>

            <div className="flex items-center gap-[0.9rem] p-[0.85rem_1rem] rounded-[var(--radius-r)] bg-cream border border-warm transition duration-200 cursor-default hover:border-[rgba(122,143,88,0.25)] hover:bg-[rgba(122,143,88,0.04)]">
              <div className="text-[1.1rem] shrink-0 w-[36px] h-[36px] rounded-[9px] bg-white shadow-sh flex items-center justify-center">📱</div>
              <div>
                <div className="text-[0.86rem] font-semibold text-deep">One-Time QR Code Check-In</div>
                <div className="text-[0.73rem] text-soft mt-[1px]">Time-limited, one-use — provider scans at your door</div>
              </div>
              <span className="ml-auto text-[0.58rem] font-bold tracking-[0.05em] uppercase bg-golddim border border-[rgba(154,114,72,0.2)] text-gold rounded-full p-[0.12rem_0.52rem] whitespace-nowrap">Only on WG</span>
            </div>

            <div className="flex items-center gap-[0.9rem] p-[0.85rem_1rem] rounded-[var(--radius-r)] bg-cream border border-warm transition duration-200 cursor-default hover:border-[rgba(122,143,88,0.25)] hover:bg-[rgba(122,143,88,0.04)]">
              <div className="text-[1.1rem] shrink-0 w-[36px] h-[36px] rounded-[9px] bg-white shadow-sh flex items-center justify-center">🔢</div>
              <div>
                <div className="text-[0.86rem] font-semibold text-deep">Verbal 4-Digit PIN</div>
                <div className="text-[0.73rem] text-soft mt-[1px]">Provider confirms aloud before you open the door</div>
              </div>
              <span className="ml-auto text-[0.58rem] font-bold tracking-[0.05em] uppercase bg-golddim border border-[rgba(154,114,72,0.2)] text-gold rounded-full p-[0.12rem_0.52rem] whitespace-nowrap">Only on WG</span>
            </div>

            <div className="flex items-center gap-[0.9rem] p-[0.85rem_1rem] rounded-[var(--radius-r)] bg-cream border border-warm transition duration-200 cursor-default hover:border-[rgba(122,143,88,0.25)] hover:bg-[rgba(122,143,88,0.04)]">
              <div className="text-[1.1rem] shrink-0 w-[36px] h-[36px] rounded-[9px] bg-white shadow-sh flex items-center justify-center">⏱</div>
              <div>
                <div className="text-[0.86rem] font-semibold text-deep">Bidirectional 15-Min Pings</div>
                <div className="text-[0.73rem] text-soft mt-[1px]">Both parties. Auto-alert trusted contacts if missed</div>
              </div>
              <span className="ml-auto text-[0.58rem] font-bold tracking-[0.05em] uppercase bg-golddim border border-[rgba(154,114,72,0.2)] text-gold rounded-full p-[0.12rem_0.52rem] whitespace-nowrap">Only on WG</span>
            </div>

            <div className="flex items-center gap-[0.9rem] p-[0.85rem_1rem] rounded-[var(--radius-r)] bg-cream border border-warm transition duration-200 cursor-default hover:border-[rgba(122,143,88,0.25)] hover:bg-[rgba(122,143,88,0.04)]">
              <div className="text-[1.1rem] shrink-0 w-[36px] h-[36px] rounded-[9px] bg-white shadow-sh flex items-center justify-center">🚨</div>
              <div>
                <div className="text-[0.86rem] font-semibold text-deep">SOS Emergency Button</div>
                <div className="text-[0.73rem] text-soft mt-[1px]">One tap → GPS to contacts, platform alert, emergency services</div>
              </div>
              <span className="ml-auto text-[0.58rem] font-bold tracking-[0.05em] uppercase bg-sagedim border border-[rgba(122,143,88,0.2)] text-sage rounded-full p-[0.12rem_0.52rem] whitespace-nowrap">✓ Active</span>
            </div>

            <div className="flex items-center gap-[0.9rem] p-[0.85rem_1rem] rounded-[var(--radius-r)] bg-cream border border-warm transition duration-200 cursor-default hover:border-[rgba(122,143,88,0.25)] hover:bg-[rgba(122,143,88,0.04)]">
              <div className="text-[1.1rem] shrink-0 w-[36px] h-[36px] rounded-[9px] bg-white shadow-sh flex items-center justify-center">👥</div>
              <div>
                <div className="text-[0.86rem] font-semibold text-deep">Trusted Contact Live Tracking</div>
                <div className="text-[0.73rem] text-soft mt-[1px]">Family or friends get a live GPS link for every session</div>
              </div>
              <span className="ml-auto text-[0.58rem] font-bold tracking-[0.05em] uppercase bg-golddim border border-[rgba(154,114,72,0.2)] text-gold rounded-full p-[0.12rem_0.52rem] whitespace-nowrap">Only on WG</span>
            </div>

            <div className="flex items-center gap-[0.9rem] p-[0.85rem_1rem] rounded-[var(--radius-r)] bg-cream border border-warm transition duration-200 cursor-default hover:border-[rgba(122,143,88,0.25)] hover:bg-[rgba(122,143,88,0.04)]">
              <div className="text-[1.1rem] shrink-0 w-[36px] h-[36px] rounded-[9px] bg-white shadow-sh flex items-center justify-center">⭐</div>
              <div>
                <div className="text-[0.86rem] font-semibold text-deep">Two-Way Rating Lock</div>
                <div className="text-[0.73rem] text-soft mt-[1px]">Reviews unlock only after both parties confirm safe end</div>
              </div>
              <span className="ml-auto text-[0.58rem] font-bold tracking-[0.05em] uppercase bg-golddim border border-[rgba(154,114,72,0.2)] text-gold rounded-full p-[0.12rem_0.52rem] whitespace-nowrap">Only on WG</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
