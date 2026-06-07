import { BarChart2, Search, Clapperboard, Check } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section className="bg-cream py-[6rem] px-[5%]">
      <div className="max-w-[1360px] mx-auto">
        <div className="mb-[3.5rem] rv">
          <div className="text-[0.67rem] font-bold tracking-[0.12em] uppercase text-gold mb-[0.6rem]">How it works</div>
          <h2 className="font-serif text-[clamp(2rem,3vw,2.8rem)] font-normal text-deep leading-[1.15] tracking-[-0.015em]">
            Book in under <i className="italic text-sage">60 seconds.</i>
          </h2>
          <p className="text-[0.97rem] text-soft leading-[1.7] max-w-[500px] mt-[0.7rem]">
            The simplest path between you and the care you need. No spa trips. No waiting rooms. No 9-to-6.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-warm rounded-[var(--radius-rxl)] overflow-hidden shadow-sh rv">
          <div className="bg-white py-[2.2rem] px-[1.8rem] border-b md:border-b-0 md:border-r border-warm transition duration-200 cursor-default hover:bg-cream">
            <div className="font-serif text-[2.8rem] font-light text-parch leading-none mb-[0.7rem]">01</div>
            <div className="mb-[0.7rem]"><BarChart2 size={28} className="text-gold" /></div>
            <div className="text-[0.92rem] font-bold text-deep mb-[0.4rem]">Your score is waiting</div>
            <div className="text-[0.8rem] text-soft leading-[1.65]">
              Open the app and see your daily Body Score — driven by your check-in or wearable. Personalized recommendations are already there.
            </div>
          </div>
          <div className="bg-white py-[2.2rem] px-[1.8rem] border-b lg:border-b-0 lg:border-r border-warm transition duration-200 cursor-default hover:bg-cream">
            <div className="font-serif text-[2.8rem] font-light text-parch leading-none mb-[0.7rem]">02</div>
            <div className="mb-[0.7rem]"><Search size={28} className="text-gold" /></div>
            <div className="text-[0.92rem] font-bold text-deep mb-[0.4rem]">Browse 30+ categories</div>
            <div className="text-[0.8rem] text-soft leading-[1.65]">
              Filter by tonight, after hours, or schedule ahead. Every provider is background-checked, licensed, and reviewed.
            </div>
          </div>
          <div className="bg-white py-[2.2rem] px-[1.8rem] border-b md:border-b-0 md:border-r border-warm transition duration-200 cursor-default hover:bg-cream">
            <div className="font-serif text-[2.8rem] font-light text-parch leading-none mb-[0.7rem]">03</div>
            <div className="mb-[0.7rem]"><Clapperboard size={28} className="text-gold" /></div>
            <div className="text-[0.92rem] font-bold text-deep mb-[0.4rem]">Watch their intro video</div>
            <div className="text-[0.8rem] text-soft leading-[1.65]">
              Know their face, voice and energy before they knock. A 60-second face-to-camera intro kills the &quot;stranger at my door&quot; anxiety.
            </div>
          </div>
          <div className="bg-white py-[2.2rem] px-[1.8rem] transition duration-200 cursor-default hover:bg-cream">
            <div className="font-serif text-[2.8rem] font-light text-parch leading-none mb-[0.7rem]">04</div>
            <div className="mb-[0.7rem]"><Check size={28} className="text-gold" /></div>
            <div className="text-[0.92rem] font-bold text-deep mb-[0.4rem]">Confirm, pay, relax</div>
            <div className="text-[0.8rem] text-soft leading-[1.65]">
              Apple Pay in one tap. Seven safety layers activate automatically. Your wellness record updates after every session.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
