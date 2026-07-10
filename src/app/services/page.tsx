
export const metadata = {
  title: "Services",
};

const features = [
  {
    icon: "verified_user",
    title: "FDIC Insured",
  },
  {
    icon: "diversity_3",
    title: "Community Owned",
  },
  {
    icon: "lock",
    title: "Secure & Encrypted",
  },
  {
    icon: "history_edu",
    title: "B-Corp Certified",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:pb-10">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-16">
          <div className="max-w-3xl">
            <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.3em] text-primary sm:text-base">
              Our Solutions
            </span>

            <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Empowering Your{" "}
              <br className="hidden sm:block" />
              <span className="text-primary">
                Financial Future
              </span>
            </h1>

            <p className="max-w-2xl text-base leading-7 text-gray-600 sm:text-lg lg:text-xl">
              Tailored financial tools designed to uplift individuals and small
              businesses. We provide the capital and coaching you need to thrive
              in a modern economy.
            </p>
          </div>
        </div>
      </section>
      {/* Service Blocks: Bento Grid Style */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-16 lg:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Personal Micro-Loans */}
          <div className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-lg lg:col-span-7">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-primary">
                  <span className="material-symbols-outlined text-2xl">
                    account_balance_wallet
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-gray-900">
                  Personal Micro-Loans
                </h2>
              </div>

              <p className="mb-8 text-gray-600">
                Accessible funding for everyday essentials and professional
                development. No collateral required for qualifying applicants.
              </p>

              <ul className="mb-10 space-y-4">
                {[
                  "Instant approval for amounts up to $5,000",
                  "Fixed low interest rates with no hidden fees",
                  "Flexible repayment terms from 6 to 24 months",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-600">
                      check_circle
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="w-full rounded-lg bg-primary px-6 py-3 font-semibold uppercase tracking-wider text-white transition hover:opacity-90 lg:w-fit">
              Check Eligibility
            </button>
          </div>

          {/* Image Card */}
          <div className="relative overflow-hidden rounded-2xl border border-gray-200 lg:col-span-5">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN9Rhcaxnp4fN4rmFe7dCfAnpV65ENOtNqODpVw2-h8m4JEd5QrXYwbG8jm7eB_UdKyn7-tMWGJIdg1Ci9S2_IPbaYDrL7mks64-GiBJKuue894pM8TvIrBilqK3vJNTUNin3nk3ZhaUVlMDe5LcwxpQRX6baXq7Qw57Z-7coK3Ls7CEBTwAMoENPBOghmiKncBi-DXC6VTTYE8GzkeOCU9Aqk-T2vLn-sw6ySz7IKm4lkrNWOU4YR"
              alt="Female entrepreneur working in her workshop"
              className="h-80 w-full object-cover lg:h-full"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl font-bold text-white">
                Fueling Local Enterprise
              </h3>

              <p className="mt-2 text-white/90">
                Over 500 businesses launched this year alone.
              </p>
            </div>
          </div>

          {/* Business Growth Loans */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-sm lg:col-span-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex-1">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-700">
                    <span className="material-symbols-outlined text-2xl">
                      trending_up
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900">
                    Business Growth Loans
                  </h2>
                </div>

                <p className="mb-6 text-gray-600">
                  Scalable capital for inventory, equipment, or location
                  expansion. Includes quarterly business audits and mentorship.
                </p>

                <div className="flex flex-wrap gap-3">
                  {[
                    "Up to $50k",
                    "Grace Periods",
                    "Low-doc Process",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full rounded-lg bg-gray-900 px-8 py-4 font-semibold uppercase tracking-wider text-white transition hover:bg-primary lg:w-auto">
                Expand Now
              </button>
            </div>
          </div>

          {/* Emergency Grants */}
          <div className="flex flex-col justify-between rounded-2xl border border-red-200 bg-red-50 p-8 lg:col-span-4">
            <div>
              <div className="mb-6 flex items-center gap-3 text-red-600">
                <span className="material-symbols-outlined text-3xl">
                  emergency
                </span>

                <h2 className="text-2xl font-bold">
                  Emergency Grants
                </h2>
              </div>

              <p className="text-gray-600">
                Priority access for unexpected hardships, health crises, or
                community recovery needs.
              </p>
            </div>

            <button className="mt-8 flex items-center gap-2 font-semibold uppercase tracking-wider text-red-600 transition hover:underline">
              Apply for Priority Access
              <span className="material-symbols-outlined">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </section>
      <section className="border-y border-gray-200 bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Image */}
          <div className="relative lg:col-span-5">
            <div className="mx-auto aspect-square max-w-md overflow-hidden rounded-full border-8 border-white shadow-2xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKVDcdVjp_4zEEKYx68UbLY25oDCQgoOPqDVkNecRj9sNJCH493kD9NlA0KExnMnUzYCHktGJafu3LxAAhIZC-YCKEdZFciSABW5IQ-vebE-loDtq_KwJFdzUMpOtWjBU6WvrXR5TMaDpymGcUsBDUuxuI2qnPCCJWRkeyHnVsmwIio9o1HQlbpN6Ni4lTMFxlTLp0rth3HelZd-AqbMfDqE2aw6ym7AWQ4Q4w0CGpxabOVMMm_8-e"
                alt="Sarah Jenkins - Senior Wealth Mentor"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="mt-6 rounded-xl bg-primary p-5 text-white shadow-xl lg:absolute lg:-bottom-4 lg:-right-4 lg:mt-0">
              <h3 className="text-xl font-bold">
                Sarah Jenkins
              </h3>

              <p className="mt-1 text-sm uppercase tracking-[0.25em] text-white/80">
                Senior Wealth Mentor
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 lg:pl-12">
            <h2 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
              More than just capital.
              <br />
              <span className="text-green-600">
                Guidance.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Money is only one half of the equation. Our certified financial
              counselors work with you one-on-one to build a sustainable
              roadmap for your future success.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-lg bg-primary px-8 py-3 font-semibold uppercase tracking-wider text-white transition hover:opacity-90">
                Schedule Consultation
              </button>

              <button className="rounded-lg border border-primary px-8 py-3 font-semibold uppercase tracking-wider text-primary transition hover:bg-primary/5">
                View All Advisors
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why MicroTrust?
          </h2>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 gap-8 transition duration-500 hover:grayscale-0 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <span className="material-symbols-outlined mb-4 text-5xl text-primary transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </span>

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-700">
                {feature.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
