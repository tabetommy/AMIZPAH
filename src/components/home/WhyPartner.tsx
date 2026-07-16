type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
};

const features: Feature[] = [
  {
    title: "Fast Approval",
    description:
      "Streamlined digital application process with decisions in as little as 48 hours, so you can seize opportunities without delay.",
    icon: (
      <svg
        className="h-6 w-6 text-teal-700"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
    iconBg: "bg-sky-100",
  },
  {
    title: "Low Interest",
    description:
      "Competitive rates designed to foster sustainable growth, keeping repayments manageable for small businesses and startups.",
    icon: (
      <svg
        className="h-6 w-6 text-teal-700"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
        />
      </svg>
    ),
    iconBg: "bg-emerald-100",
  },
  {
    title: "Financial Literacy",
    description:
      "Beyond capital, we provide the tools and training to help you manage finances, plan for growth, and build lasting prosperity.",
    icon: (
      <svg
        className="h-6 w-6 text-teal-700"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
    iconBg: "bg-lime-100",
  },
];

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
      <div
        className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg ${feature.iconBg}`}
      >
        {feature.icon}
      </div>
      <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-gray-500">
        {feature.description}
      </p>
    </div>
  );
}

export function WhyPartner() {
  return (
    // <section className="bg-gray-50 py-20">
    //   <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    //     <div className="text-center">
    //       <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
    //         Why{" "}
    //         <span className="relative inline-block">
    //           Partner
    //           <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-teal-800" />
    //         </span>{" "}
    //         With Us?
    //       </h2>
    //     </div>

    //     <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    //       {features.map((feature) => (
    //         <FeatureCard key={feature.title} feature={feature} />
    //       ))}
    //     </div>
    //   </div>
    // </section>
     <section className="bg-slate-50 py-20">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    {/* Heading */}
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <span className="rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
        Why Choose Us
      </span>

      <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900">
        Why Choose Damizpah Micro Credit?
      </h2>

      <p className="mt-4 text-lg leading-8 text-slate-600">
        We provide fast, affordable, and reliable financial solutions designed
        to help individuals and businesses achieve their goals with confidence.
      </p>
    </div>

    {/* Features */}
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

      {/* Card */}
      <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <span className="material-symbols-outlined text-3xl">
            bolt
          </span>
        </div>

        <h3 className="mb-3 text-xl font-semibold text-slate-900">
          Fast Loan Approval
        </h3>

        <p className="leading-7 text-slate-600">
          Get quick decisions on your loan application so you can access funds
          when you need them most.
        </p>
      </div>

      {/* Card */}
      <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-700">
          <span className="material-symbols-outlined text-3xl">
            savings
          </span>
        </div>

        <h3 className="mb-3 text-xl font-semibold text-slate-900">
          Competitive Interest Rates
        </h3>

        <p className="leading-7 text-slate-600">
          Enjoy affordable interest rates designed to make borrowing easier and
          more manageable.
        </p>
      </div>

      {/* Card */}
      <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
          <span className="material-symbols-outlined text-3xl">
            schedule
          </span>
        </div>

        <h3 className="mb-3 text-xl font-semibold text-slate-900">
          Flexible Repayment
        </h3>

        <p className="leading-7 text-slate-600">
          Choose repayment plans that suit your income and financial goals
          without unnecessary pressure.
        </p>
      </div>

      {/* Card */}
      <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-purple-600">
          <span className="material-symbols-outlined text-3xl">
            description
          </span>
        </div>

        <h3 className="mb-3 text-xl font-semibold text-slate-900">
          Simple Application
        </h3>

        <p className="leading-7 text-slate-600">
          Our streamlined application process minimizes paperwork, making it
          easy to apply in just a few steps.
        </p>
      </div>

      {/* Card */}
      <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl sm:col-span-2 lg:col-span-2">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
          <span className="material-symbols-outlined text-3xl">
            support_agent
          </span>
        </div>

        <h3 className="mb-3 text-xl font-semibold text-slate-900">
          Trusted & Professional Customer Service
        </h3>

        <p className="leading-7 text-slate-600">
          Our experienced team is committed to providing personalized support,
          answering your questions, and guiding you throughout your borrowing
          journey.
        </p>
      </div>

    </div>
  </div>
</section>
  );
}
