export default function Services() {
  const servicesData = [
    {
      img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=320&q=80&auto=format&fit=crop",
      name: "IV Hydration",
      cat: "Medical & Nursing · RN administered",
      pill: "Available now",
    },
    {
      img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=320&q=80&auto=format&fit=crop",
      name: "Reformer Pilates",
      cat: "Movement & Fitness · STOTT certified",
      pill: "Available now",
    },
    {
      img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500&h=320&q=80&auto=format&fit=crop",
      name: "Deep Tissue Massage",
      cat: "Massage & Body · CMT/LMT",
      pill: "Available now",
    },
    {
      img: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&h=320&q=80&auto=format&fit=crop",
      name: "Private Yoga",
      cat: "Movement & Fitness · RYT-500",
      pill: "Tonight",
    },
    {
      img: "https://images.unsplash.com/photo-1498892812928-797d714d6ed3?w=500&h=320&q=80&auto=format&fit=crop",
      name: "HydraFacial",
      cat: "Aesthetics · Licensed Aesthetician",
      pill: "Tonight",
    },
    {
      img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&h=320&q=80&auto=format&fit=crop",
      name: "Assisted Stretch",
      cat: "Movement & Fitness · FRC certified",
      pill: "Available now",
    },
    {
      img: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=500&h=320&q=80&auto=format&fit=crop",
      name: "Makeup Artist",
      cat: "Beauty · Professional MUA",
      pill: "Available now",
    },
    {
      img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&h=320&q=80&auto=format&fit=crop",
      name: "Meal Prep & Nutrition",
      cat: "Lifestyle · Registered Dietitian",
      pill: "Today",
    },
    {
      img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&h=320&q=80&auto=format&fit=crop",
      name: "Concierge Medicine",
      cat: "Medical & Nursing · Licensed Physicians",
      pill: "Available now",
    },
    {
      img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=500&h=320&q=80&auto=format&fit=crop",
      name: "Peptide Programme",
      cat: "Medical & Nursing · Specialists",
      pill: "Tomorrow",
    },
    {
      img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=500&h=320&q=80&auto=format&fit=crop",
      name: "Women's Health",
      cat: "Medical & Nursing · OBGYN & Specialists",
      pill: "Available now",
    },
    {
      img: "https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?w=500&h=320&q=80&auto=format&fit=crop",
      name: "Breathwork",
      cat: "Movement & Fitness · Certified Guides",
      pill: "Tonight",
    },
  ];

  return (
    <section className="bg-cream min-h-[70vh] pt-[120px] pb-20 px-[5%]">
      <div className="max-w-[1360px] mx-auto rv">
        <div className="text-[0.67rem] font-bold tracking-[0.12em] uppercase text-gold mb-[0.6rem]">
          All Services
        </div>
        <h1 className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] font-normal text-deep leading-[1.1] tracking-[-0.015em] mb-8">
          Comprehensive <i className="italic text-sage">Care</i>
        </h1>
        <p className="text-[1.1rem] text-soft leading-[1.7] max-w-[600px] mb-16">
          Browse our complete directory of luxury at-home wellness services,
          from IV hydration to concierge medicine.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1.2rem]">
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
      </div>
    </section>
  );
}
