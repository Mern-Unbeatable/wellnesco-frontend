import { Link } from "react-router";

export default function About() {
  return (
    <div className="pt-[66px]">
      {" "}
      {/* Offset for fixed navbar */}
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-cream px-[5%] py-24">
        <div className="max-w-[1360px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="rv">
            <div className="text-[0.67rem] font-bold tracking-[0.12em] uppercase text-gold mb-6">
              Our Story
            </div>
            <h1 className="font-serif text-[clamp(2.8rem,5vw,4.5rem)] font-normal text-deep leading-[1.05] tracking-[-0.015em] mb-8">
              Redefining <br />
              <i className="italic text-sage">Luxury Wellness</i>
            </h1>
            <p className="text-[1.1rem] text-soft leading-[1.7] max-w-[500px]">
              WellnessGo was founded on a simple premise: premium wellness and
              medical care should fit seamlessly into your life, not the other
              way around. We bring the sanctuary to you.
            </p>
          </div>
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg rv">
            <img
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80"
              alt="Luxury Spa Treatment"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      {/* Mission Statement */}
      <section className="bg-white py-32 px-[5%]">
        <div className="max-w-[800px] mx-auto text-center rv">
          <h2 className="font-serif text-[clamp(2rem,3vw,2.5rem)] font-normal text-deep leading-[1.3] mb-10">
            "We recognized that the traditional healthcare and wellness model
            was broken—inconvenient, impersonal, and time-consuming. We wanted
            to change that."
          </h2>
          <div className="w-[40px] h-[2px] bg-gold mx-auto mb-10"></div>
          <p className="text-[1.1rem] text-soft leading-[1.8]">
            Whether you need a revitalizing IV drip after a long flight, a
            private Pilates session to start your morning, or an urgent house
            call from a concierge doctor, WellnessGo delivers. Uncompromising
            quality, absolute discretion, and ultimate convenience.
          </p>
        </div>
      </section>
      {/* The Standard Image Grid */}
      <section className="bg-cream py-32 px-[5%]">
        <div className="max-w-[1360px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24 rv">
            <div className="order-2 md:order-1 relative h-[350px] rounded-lg overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80"
                alt="Medical Professional"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="font-serif text-[2rem] text-deep mb-6">
                The WellnessGo Standard
              </h3>
              <p className="text-[1.05rem] text-soft leading-[1.7] mb-6">
                We don't compromise on quality or safety. Every provider on our
                platform undergoes a rigorous vetting process, including
                background checks, license verification, and in-person
                interviews.
              </p>
              <p className="text-[1.05rem] text-soft leading-[1.7]">
                Our proprietary 7-layer safety system ensures that every
                interaction is secure, professional, and entirely discreet.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center rv">
            <div>
              <h3 className="font-serif text-[2rem] text-deep mb-6">
                More Than an App. A Lifestyle.
              </h3>
              <p className="text-[1.05rem] text-soft leading-[1.7] mb-6">
                WellnessGo is a curated community of individuals who prioritize
                their health and expect the best.
              </p>
              <p className="text-[1.05rem] text-soft leading-[1.7]">
                With exclusive memberships, inner-circle access to private
                retreats, and unparalleled concierge service, we are your
                ultimate partner in longevity.
              </p>
            </div>
            <div className="relative h-[350px] rounded-lg overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80"
                alt="Yoga Lifestyle"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="bg-deep py-32 px-[5%] text-center">
        <div className="max-w-[600px] mx-auto rv">
          <h2 className="font-serif text-[2.5rem] text-white mb-6">
            Experience the Difference
          </h2>
          <p className="text-[1.1rem] text-[rgba(255,255,255,0.7)] leading-[1.7] mb-10">
            Download the app today and book your first luxury at-home wellness
            experience.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/services"
              className="border border-[rgba(255,255,255,0.2)] text-white rounded-full px-8 py-[0.8rem] font-bold text-[0.95rem] hover:bg-white hover:text-deep transition duration-200 no-underline"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
