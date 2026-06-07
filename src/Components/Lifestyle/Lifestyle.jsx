import { Zap, Calendar, CreditCard, Bell, Car } from 'lucide-react';

export default function Lifestyle() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px] rv">
      <div className="relative overflow-hidden h-[300px] lg:h-auto">
        <img
          className="w-full h-full object-cover block"
          src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=900&q=85&auto=format&fit=crop"
          alt="WellnessGo lifestyle"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(42,26,14,0.3)] to-transparent"></div>
      </div>
      <div className="bg-cream flex items-center p-[5rem_5%] lg:p-[5rem]">
        <div>
          <div className="text-[0.67rem] font-bold tracking-[0.12em] uppercase text-gold mb-[0.6rem]">
            Not Just a Booking App
          </div>
          <h2 className="font-serif text-[clamp(2rem,3vw,2.8rem)] font-normal text-deep leading-[1.15] tracking-[-0.015em]">
            A lifestyle<br />
            <i className="italic text-sage">ecosystem.</i>
          </h2>
          <ul className="list-none mt-[1.5rem] flex flex-col gap-[0.85rem]">
            <li className="flex items-start gap-[0.85rem] text-[0.9rem] text-mid leading-[1.5]">
              <span className="w-[36px] h-[36px] rounded-[10px] bg-white shadow-sh flex items-center justify-center text-[1rem] shrink-0"><Zap size={18} className="text-gold" /></span>
              <div>
                <strong className="text-deep text-[0.88rem]">Instant Rebooking</strong><br />
                One tap to rebook — pre-fills everything. Under 5 seconds.
              </div>
            </li>
            <li className="flex items-start gap-[0.85rem] text-[0.9rem] text-mid leading-[1.5]">
              <span className="w-[36px] h-[36px] rounded-[10px] bg-white shadow-sh flex items-center justify-center text-[1rem] shrink-0"><Calendar size={18} className="text-gold" /></span>
              <div>
                <strong className="text-deep text-[0.88rem]">Calendar Sync</strong><br />
                Apple Calendar, Google, Outlook. Reminders before every session.
              </div>
            </li>
            <li className="flex items-start gap-[0.85rem] text-[0.9rem] text-mid leading-[1.5]">
              <span className="w-[36px] h-[36px] rounded-[10px] bg-white shadow-sh flex items-center justify-center text-[1rem] shrink-0"><CreditCard size={18} className="text-gold" /></span>
              <div>
                <strong className="text-deep text-[0.88rem]">Apple Pay & Tipping</strong><br />
                One-tap payment. 100% of tips to your provider, always.
              </div>
            </li>
            <li className="flex items-start gap-[0.85rem] text-[0.9rem] text-mid leading-[1.5]">
              <span className="w-[36px] h-[36px] rounded-[10px] bg-white shadow-sh flex items-center justify-center text-[1rem] shrink-0"><Bell size={18} className="text-gold" /></span>
              <div>
                <strong className="text-deep text-[0.88rem]">Smart Stress Alerts</strong><br />
                &quot;Your stress indicators are elevated. Breathwork · IV · Stretch. Tap to book.&quot;
              </div>
            </li>
            <li className="flex items-start gap-[0.85rem] text-[0.9rem] text-mid leading-[1.5]">
              <span className="w-[36px] h-[36px] rounded-[10px] bg-white shadow-sh flex items-center justify-center text-[1rem] shrink-0"><Car size={18} className="text-gold" /></span>
              <div>
                <strong className="text-deep text-[0.88rem]">Car Service</strong><br />
                Can&apos;t receive at home? We arrange a luxury transfer to a partner suite.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
