import { Calendar, Gem, ShieldCheck } from 'lucide-react';

export default function Providers() {
  return (
    <div className="pt-[66px]">
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-deep text-white px-[5%] py-[6rem]">
        <div className="max-w-[1360px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-[4rem] items-center relative z-10">
          <div className="rv">
            <div className="text-[0.67rem] font-bold tracking-[0.12em] uppercase text-goldlt mb-[1.5rem]">For Professionals</div>
            <h1 className="font-serif text-[clamp(2.8rem,5vw,4.5rem)] font-normal leading-[1.05] tracking-[-0.015em] mb-[2rem]">
              Elevate Your <br />
              <i className="italic text-sagelt">Practice</i>
            </h1>
            <p className="text-[1.1rem] text-[rgba(255,255,255,0.7)] leading-[1.7] max-w-[500px]">
              Take control of your schedule, earn premium rates, and provide care to high-end clientele in a safe, controlled environment. We handle the business, so you can focus on the care.
            </p>
          </div>
          <div className="relative h-[400px] lg:h-[500px] rounded-[var(--radius-lg)] overflow-hidden shadow-2xl rv">
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80" 
              alt="Medical Professional Smiling" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="bg-cream py-[8rem] px-[5%]">
        <div className="max-w-[1360px] mx-auto">
          <div className="text-center mb-[5rem] rv">
            <h2 className="font-serif text-[2.5rem] text-deep mb-[1rem]">Why Top Providers Choose Us</h2>
            <p className="text-[1.1rem] text-soft max-w-[600px] mx-auto">
              We exclusively partner with the top 5% of licensed nurses, therapists, doctors, and instructors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[2rem] rv">
            <div className="bg-white p-[3rem] rounded-[var(--radius-rl)] shadow-sh border border-[rgba(154,114,72,0.07)] text-center transition hover:-translate-y-[4px]">
              <div className="flex justify-center mb-[1.5rem] text-gold"><Calendar size={40} /></div>
              <h3 className="font-serif text-[1.4rem] text-deep mb-[1rem]">Complete Autonomy</h3>
              <p className="text-[0.95rem] text-soft leading-[1.6]">
                Work when you want, where you want. You are in complete control of your calendar. No minimum hours required.
              </p>
            </div>
            <div className="bg-white p-[3rem] rounded-[var(--radius-rl)] shadow-sh border border-[rgba(154,114,72,0.07)] text-center transition hover:-translate-y-[4px]">
              <div className="flex justify-center mb-[1.5rem] text-gold"><Gem size={40} /></div>
              <h3 className="font-serif text-[1.4rem] text-deep mb-[1rem]">Premium Earnings</h3>
              <p className="text-[0.95rem] text-soft leading-[1.6]">
                Our business model ensures providers are compensated at the top of the market rate. Direct deposit weekly.
              </p>
            </div>
            <div className="bg-white p-[3rem] rounded-[var(--radius-rl)] shadow-sh border border-[rgba(154,114,72,0.07)] text-center transition hover:-translate-y-[4px]">
              <div className="flex justify-center mb-[1.5rem] text-gold"><ShieldCheck size={40} /></div>
              <h3 className="font-serif text-[1.4rem] text-deep mb-[1rem]">Unmatched Safety</h3>
              <p className="text-[0.95rem] text-soft leading-[1.6]">
                We rigorously vet all clients. Our 7-layer safety system tracks sessions to ensure your security at all times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Timeline */}
      <section className="bg-white py-[8rem] px-[5%]">
        <div className="max-w-[800px] mx-auto rv">
          <h2 className="font-serif text-[2.5rem] text-deep mb-[4rem] text-center">The Application Process</h2>
          
          <div className="relative border-l-[2px] border-warm pl-[2rem] ml-[1rem] md:ml-[0] space-y-[3rem]">
            <div className="relative">
              <div className="absolute w-[16px] h-[16px] rounded-full bg-gold left-[calc(-2rem-9px)] top-[6px]"></div>
              <h3 className="font-serif text-[1.4rem] text-deep mb-[0.5rem]">1. Apply & Verify</h3>
              <p className="text-[1rem] text-soft leading-[1.6]">Submit your initial application along with your active state licenses and certifications. Our team conducts an initial review within 48 hours.</p>
            </div>
            <div className="relative">
              <div className="absolute w-[16px] h-[16px] rounded-full bg-sage left-[calc(-2rem-9px)] top-[6px]"></div>
              <h3 className="font-serif text-[1.4rem] text-deep mb-[0.5rem]">2. Background Check</h3>
              <p className="text-[1rem] text-soft leading-[1.6]">If accepted, we conduct a comprehensive background check and follow up with your provided professional references.</p>
            </div>
            <div className="relative">
              <div className="absolute w-[16px] h-[16px] rounded-full bg-gold left-[calc(-2rem-9px)] top-[6px]"></div>
              <h3 className="font-serif text-[1.4rem] text-deep mb-[0.5rem]">3. Interviews & Assessment</h3>
              <p className="text-[1rem] text-soft leading-[1.6]">You'll complete virtual and in-person interviews with our clinical or fitness directors, followed by a practical skills assessment.</p>
            </div>
            <div className="relative">
              <div className="absolute w-[16px] h-[16px] rounded-full bg-sage left-[calc(-2rem-9px)] top-[6px]"></div>
              <h3 className="font-serif text-[1.4rem] text-deep mb-[0.5rem]">4. Onboarding & Go Live</h3>
              <p className="text-[1rem] text-soft leading-[1.6]">Complete our proprietary safety protocol training. Receive your WellnessGo equipment kit and start accepting premium bookings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sage text-white py-[6rem] px-[5%] text-center">
        <div className="max-w-[600px] mx-auto rv">
          <h2 className="font-serif text-[2.5rem] mb-[1.5rem]">Ready to join the elite?</h2>
          <p className="text-[1.1rem] text-white/90 leading-[1.7] mb-[2.5rem]">
            We are currently accepting applications for select markets in California, New York, and Florida.
          </p>
          <button className="bg-deep text-white border-none rounded-full px-[2.5rem] py-[1rem] font-sans text-[0.95rem] font-bold cursor-pointer transition duration-200 hover:bg-gold hover:text-white shadow-md">
            Start Your Application
          </button>
        </div>
      </section>

    </div>
  );
}
