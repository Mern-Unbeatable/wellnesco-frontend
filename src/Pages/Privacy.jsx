export default function Privacy() {
  return (
    <section className="bg-cream min-h-[70vh] pt-[120px] pb-20 px-[5%]">
      <div className="max-w-[800px] mx-auto rv">
        <div className="text-[0.67rem] font-bold tracking-[0.12em] uppercase text-gold mb-[0.6rem]">
          Legal
        </div>
        <h1 className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] font-normal text-deep leading-[1.1] tracking-[-0.015em] mb-8">
          Privacy <i className="italic text-sage">Policy</i>
        </h1>

        <div className="bg-white rounded-rl p-10 md:p-16 border-[1.5px] border-warm shadow-sm text-[0.95rem] text-mid leading-[1.8]">
          <p className="mb-6">
            <strong>Last Updated: June 2026</strong>
          </p>

          <p className="mb-6">
            At WellnessGo, we take your privacy and security seriously. This
            Privacy Policy outlines how we collect, use, and protect your
            personal and health information when you use our platform,
            application, and services.
          </p>

          <h3 className="font-serif text-[1.4rem] text-deep mt-8 mb-4">
            1. Information We Collect
          </h3>
          <p className="mb-6">
            We collect information you provide directly to us, such as when you
            create an account, complete your Body Score assessment, request a
            service, or communicate with us. This may include:
          </p>
          <ul className="list-disc pl-6 mb-6 flex flex-col gap-2">
            <li>
              Personal identification information (name, email, phone number)
            </li>
            <li>
              Health and wellness data required to safely provide services
            </li>
            <li>
              Location data (when using the app to request on-demand services)
            </li>
            <li>
              Payment information (processed securely by our payment partners)
            </li>
          </ul>

          <h3 className="font-serif text-[1.4rem] text-deep mt-8 mb-4">
            2. How We Use Your Information
          </h3>
          <p className="mb-6">
            We use the information we collect primarily to provide, maintain,
            and improve our services. We do not sell your personal data to third
            parties. Your health data is strictly used by matched providers to
            ensure safe and personalized care.
          </p>

          <h3 className="font-serif text-[1.4rem] text-deep mt-8 mb-4">
            3. HIPAA Compliance
          </h3>
          <p className="mb-6">
            Where applicable, we comply with the Health Insurance Portability
            and Accountability Act (HIPAA) to ensure your protected health
            information (PHI) is handled with the highest level of security and
            privacy.
          </p>

          <h3 className="font-serif text-[1.4rem] text-deep mt-8 mb-4">
            4. Contact Us
          </h3>
          <p>
            If you have any questions about this Privacy Policy, please contact
            our Data Protection Officer at privacy@wellnessgo.com.
          </p>
        </div>
      </div>
    </section>
  );
}
