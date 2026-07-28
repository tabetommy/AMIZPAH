import CTASection from "@/components/CTA/page";
import Link from "next/link";




export function Home() {
  return (
    <>
      {/* Hero Section */}
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        <section className="relative flex items-center overflow-hidden h-[500px] sm:h-[600px] lg:h-[700px]">
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCWxvL3I7-F3LgaeOKlJw6aAuL0mRItA1v-gaiuznglBItP2dDEfAXE7038gkAAiN1jOHRasYQSiILJyayfKvHYhpICXx1riHQljGNnhmTDdQvGw3vYq_XoXPhODQOYED4W9pzYMmeSX7SAH_kWtgOadvSIpzoi_8lV9sdovBganm-b3hA_9VjXl-mplYYqHcZ9-ejXl18bvajzoj-XugFr0xlnXNEWGxjgI3FhUBMUj-b4TPIYdvTM')",
              }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 w-full max-w-4xl px-6 mx-auto sm:px-8 lg:px-16">
            {/* <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Empowering Ambition through Financial Inclusion
            </h1>
            <p className="text-body-lg font-body-lg mb-stack-lg text-surface-container-highest opacity-90">
              Tailored microfinance solutions designed to bridge the gap for
              entrepreneurs and visionaries across developing markets.
            </p> */}
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Damizpah Micro Credit
            </h1>

            <p className="mb-4 text-2xl font-semibold text-white">
              Empowering Ambition through Financial Inclusion
            </p>

            <p className="text-body-lg font-body-lg mb-stack-lg text-surface-container-highest opacity-90">
              Tailored microfinance solutions designed to bridge the gap for entrepreneurs
              and visionaries across Ghana.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row ">
              <Link
                href="/products"
                className="
                inline-flex items-center justify-center
                rounded-lg
                bg-primary
                px-4 py-2.5
                text-sm font-semibold
                text-on-primary
                transition-all
                hover:brightness-110
                sm:px-6 sm:py-3 sm:text-base
                lg:px-stack-xl lg:py-4 lg:text-headline-md lg:font-headline-md
    "
              >
                Learn More
              </Link>
            </div>
          </div>

        </section>
        {/* Why partner with us */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-container-max px-6 lg:px-8">
            {/* Heading */}
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <span className="rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                Why Choose Us
              </span>

              <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900">
                Why Choose Damizpah Microcredit?
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
        <CTASection headerText="Partner with us?" />
      </div>
    </>
  );
}
