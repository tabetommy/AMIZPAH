import CTASection from "@/components/CTA/page";
import { stats, teamMembers } from "./data";


export const metadata = {
  title: "About",
};

export default function AboutPage() {


  return (
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
          <span className="block mb-3 text-sm font-semibold tracking-[0.3em] uppercase text-yellow-400 sm:text-base">
            Our Mission
          </span>

          <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Empowering the Unbanked Through Transparent Financial Equity
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-gray-200 sm:text-lg lg:text-xl">
            Damizpah was founded on a single premise: that financial
            tools should be a universal right, not a privilege. We provide
            high-fidelity data solutions and accessible capital to those building
            the future.
          </p>
        </div>
      </section>
      <section className="relative z-20 px-6 lg:px-16 -mt-12 md:-mt-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-xl bg-white p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="material-symbols-outlined mb-4 text-5xl text-primary">
                {stat.icon}
              </span>

              <h3 className="mb-2 text-3xl font-bold text-primary">
                {stat.value}
              </h3>

              <p className="text-sm text-gray-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Heading */}
          <div className="mb-12 max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Guided by Expertise
            </h2>

            <p className="mt-4 text-lg leading-8 text-gray-600">
              Our leadership team brings decades of experience from global
              financial institutions to the mission of local empowerment.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-80 w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {member.name}
                  </h3>

                  <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-primary">
                    {member.role}
                  </p>



                  {/* Social Icons */}
                  <div className="mt-6 flex gap-4">
                    <button className="transition hover:text-primary">
                      <span className="material-symbols-outlined">link</span>
                    </button>

                    <button className="transition hover:text-primary">
                      <span className="material-symbols-outlined">mail</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection headerText="Get in touch " />
    </div>
  );
}
