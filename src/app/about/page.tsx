import CTASection from "@/components/CTA/page";
import { stats, teamMembers } from "./data";


export const metadata = {
  title: "About",
};

export default function AboutPage() {


  return (
    <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
      <section className="relative flex items-center justify-center overflow-hidden h-[500px] sm:h-[600px] lg:h-[700px]">

        {/* Background */}
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-[center_25%]"
            style={{
              backgroundImage: "url('/about-hero.jpeg')",
            }}
          />

        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl px-6 text-center">
          <span className="block mb-4 text-sm font-semibold tracking-[0.3em] uppercase text-green-300">
            Our Mission
          </span>

          <h1
            className="mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
            style={{
              textShadow: "0 3px 12px rgba(0,0,0,.85)",
            }}
          >
            Empowering the Unbanked Through Transparent Financial Equity
          </h1>

          <p
            className="max-w-2xl mx-auto text-lg leading-relaxed text-white"
            style={{
              textShadow: "0 2px 8px rgba(0,0,0,.8)",
            }}
          >
            Damizpah was founded on a single premise: that financial tools
            should be a universal right, not a privilege. We provide accessible
            financial solutions that help individuals and businesses grow.
          </p>
        </div>

      </section>

      <section className="relative z-20 px-6 -mt-4 sm:-mt-8 md:-mt-12">
        <div className="mx-auto flex max-w-4xl flex-col divide-y rounded-xl bg-white p-8 shadow-lg sm:flex-row sm:divide-x sm:divide-y-0">

          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex-1 py-6 text-center first:pt-0 last:pb-0 sm:py-0"
            >
              <span className="material-symbols-outlined mb-3 text-5xl text-primary">
                {stat.icon}
              </span>

              <h3 className="text-4xl font-bold text-primary">
                {stat.value}
              </h3>

              <p className="mt-2 text-sm text-gray-600">
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
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
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
                   <a
                    href={`mailto:${member.email}`}
                    className="mt-3 block text-sm text-gray-600 hover:text-primary break-words"
                  >
                    {member.email}
                  </a>
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
