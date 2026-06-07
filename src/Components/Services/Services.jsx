import { Link } from "react-router";

export default function Services() {
  const servicesData = [
    {
      img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=320&q=80&auto=format&fit=crop",
      name: "IV Hydration",
      cat: "Medical & Nursing · RN administered",
      price: "from $149",
      pill: "Available now",
    },
    {
      img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=320&q=80&auto=format&fit=crop",
      name: "Reformer Pilates",
      cat: "Movement & Fitness · STOTT certified",
      price: "from $95",
      pill: "Available now",
    },
    {
      img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500&h=320&q=80&auto=format&fit=crop",
      name: "Deep Tissue Massage",
      cat: "Massage & Body · CMT/LMT",
      price: "from $99",
      pill: "Available now",
    },
    {
      img: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&h=320&q=80&auto=format&fit=crop",
      name: "Private Yoga",
      cat: "Movement & Fitness · RYT-500",
      price: "from $80",
      pill: "Tonight",
    },
    {
      img: "https://images.unsplash.com/photo-1498892812928-797d714d6ed3?w=500&h=320&q=80&auto=format&fit=crop",
      name: "HydraFacial",
      cat: "Aesthetics · Licensed Aesthetician",
      price: "from $130",
      pill: "Tonight",
    },
    {
      img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&h=320&q=80&auto=format&fit=crop",
      name: "Assisted Stretch",
      cat: "Movement & Fitness · FRC certified",
      price: "from $85",
      pill: "Available now",
    },
    {
      img: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=500&h=320&q=80&auto=format&fit=crop",
      name: "Makeup Artist",
      cat: "Beauty · Professional MUA",
      price: "from $95",
      pill: "Available now",
    },
    {
      img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&h=320&q=80&auto=format&fit=crop",
      name: "Meal Prep & Nutrition",
      cat: "Lifestyle · Registered Dietitian",
      price: "from $120",
      pill: "Today",
    },
  ];

  return (
    <section className="bg-white py-24 px-[5%]" id="services">
      <div className="max-w-[1360px] mx-auto">
        <div className="flex items-end justify-between mb-8 rv">
          <div>
            <div className="text-[0.67rem] font-bold tracking-[0.12em] uppercase text-gold mb-[0.6rem]">
              Services
            </div>
            <h2 className="font-serif text-[clamp(2rem,3vw,2.8rem)] font-normal text-deep leading-[1.15] tracking-[-0.015em]">
              Everything delivered.
              <br />
              <i className="italic text-sage">Nothing compromised.</i>
            </h2>
          </div>
          <Link
            to="/services"
            className="text-[0.84rem] font-semibold text-gold hidden sm:block"
          >
            See all services →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1.2rem] rv">
          {servicesData.map((svc, i) => (
            <div
              key={i}
              className="rounded-rl overflow-hidden cursor-pointer transition duration-250 bg-white shadow-sh border border-[rgba(154,114,72,0.07)] hover:-translate-y-[6px] hover:shadow-sm"
            >
              <img
                className="w-full h-[180px] object-cover block bg-cream"
                src={svc.img}
                alt={svc.name}
                loading="lazy"
              />
              <div className="p-[14px_16px]">
                <div className="text-[0.92rem] font-bold text-deep mb-[3px]">
                  {svc.name}
                </div>
                <div className="text-[0.71rem] text-soft mb-[8px]">
                  {svc.cat}
                </div>
                <div className="flex items-center justify-end">
                  <span className="bg-sagedim rounded-full px-[0.55rem] py-[0.12rem] text-[0.63rem] font-semibold text-sage flex items-center gap-[0.3rem] before:content-[''] before:w-[5px] before:h-[5px] before:rounded-full before:bg-sage">
                    {svc.pill}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 sm:hidden text-center">
          <Link
            to="/services"
            className="text-[0.84rem] font-semibold text-gold"
          >
            See all services →
          </Link>
        </div>
      </div>
    </section>
  );
}
