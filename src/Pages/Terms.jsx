export default function Terms() {
  return (
    <section className="bg-cream min-h-[70vh] pt-[120px] pb-20 px-[5%]">
      <div className="max-w-[800px] mx-auto rv">
        <div className="text-[0.67rem] font-bold tracking-[0.12em] uppercase text-gold mb-[0.6rem]">
          Legal
        </div>
        <h1 className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] font-normal text-deep leading-[1.1] tracking-[-0.015em] mb-8">
          Terms of <i className="italic text-sage">Service</i>
        </h1>

        <div className="bg-white rounded-rl p-10 md:p-16 border-[1.5px] border-warm shadow-sm text-[0.95rem] text-mid leading-[1.8]">
          <p className="mb-6">
            <strong>Last Updated: June 2026</strong>
          </p>

          <p className="mb-6">
            Welcome to WellnessGo. By accessing or using our app, website, and
            on-demand wellness services, you agree to be bound by these Terms of
            Service.
          </p>

          <h3 className="font-serif text-[1.4rem] text-deep mt-8 mb-4">
            1. User Responsibilities
          </h3>
          <p className="mb-6">
            To use WellnessGo, you must be at least 18 years old. You are
            responsible for maintaining the confidentiality of your account
            login information and for all activities that occur under your
            account. You agree to provide accurate and complete health
            information when booking services.
          </p>

          <h3 className="font-serif text-[1.4rem] text-deep mt-8 mb-4">
            2. Service Provision
          </h3>
          <p className="mb-6">
            WellnessGo is a technology platform that connects users with
            independent, licensed wellness and medical professionals. WellnessGo
            itself does not provide medical advice or medical care. The
            providers are independent contractors and are solely responsible for
            the services they provide.
          </p>

          <h3 className="font-serif text-[1.4rem] text-deep mt-8 mb-4">
            3. Cancellations & Memberships
          </h3>
          <p className="mb-6">
            Cancellations made within 24 hours of a scheduled appointment may be
            subject to a cancellation fee. Memberships can be canceled at any
            time, but fees already paid for the current billing cycle are
            non-refundable. Credits roll over for one billing cycle only.
          </p>

          <h3 className="font-serif text-[1.4rem] text-deep mt-8 mb-4">
            4. Safety Protocol
          </h3>
          <p>
            We enforce a strict 7-layer safety system. Both users and providers
            must adhere to our community safety guidelines. Any violation may
            result in immediate suspension or termination of your account.
          </p>
        </div>
      </div>
    </section>
  );
}
