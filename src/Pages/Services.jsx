import { Syringe, Activity, Sparkles, Stethoscope, Microscope, Apple, Wind, Droplets } from 'lucide-react';

export default function Services() {
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
          from IV hydration to concierge medicine.gap-8
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Syringe size={32} className="text-gold" />,
              title: "IV Therapy & Nursing",
              desc: "Immunity, recovery, and energy drips administered by registered nurses.",
            },
            {
              icon: <Activity size={32} className="text-gold" />,
              title: "Pilates & Yoga",
              desc: "Private sessions tailored to your body and goals in your own space.",
            },
            {
              icon: <Sparkles size={32} className="text-gold" />,
              title: "Massage Therapy",
              desc: "Deep tissue, lymphatic drainage, and sports massage.",
            },
            {
              icon: <Stethoscope size={32} className="text-gold" />,
              title: "Concierge Medicine",
              desc: "House calls from licensed physicians for urgent and primary care.",
            },
            {
              icon: <Sparkles size={32} className="text-gold" />,
              title: "Aesthetics",
              desc: "Botox, fillers, and advanced skin treatments at home.",
            },
            {
              icon: <Microscope size={32} className="text-gold" />,
              title: "Peptide Programme",
              desc: "Customized peptide therapies for longevity and performance.",
            },
            {
              icon: <Apple size={32} className="text-gold" />,
              title: "Meal Prep",
              desc: "Chef-prepared, nutritionist-approved meals delivered weekly.",
            },
            {
              icon: <Wind size={32} className="text-gold" />,
              title: "Breathwork",
              desc: "Guided breathwork and meditation for stress reduction.",
            },
            {
              icon: <Droplets size={32} className="text-gold" />,
              title: "Women's Health",
              desc: "Specialized care including hormone optimization and postpartum support.",
            },
          ].map((svc, i) => (
            <div
              key={i}
              className="bg-white rounded-rl p-8 border-[1.5px] border-warm shadow-sh transition duration-200 hover:-translate-y-[4px] hover:shadow-sm"
            >
              <div className="text-[2rem] mb-4">{svc.icon}</div>
              <h3 className="font-serif text-[1.4rem] font-semibold text-deep mb-2">
                {svc.title}
              </h3>
              <p className="text-[0.9rem] text-soft leading-[1.6]">
                {svc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
