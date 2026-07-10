import Image from "next/image";

const HERO_IMAGE_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC47_vKYg3RH6SUqrj8U7BzUz-DEipKCKG4qnS-oje3OBOlP9Nggdmkkg8RuniQRpMpyshv7Ut_ey5CCBJlYM-nLBOXp08R-h2ZOGhb6TBgESSK5tk2g1wlJNrLZ7S9UK1mBrzrCWw02h_ML-0_uF6nGsxsqbs5KRoFLmWJyJUz2Eq2rcP5t0kAkqlVCJqGHkjtl9VWEnUxyD0ZrEeeekySGfdjcjEef-IWnJpED1pimANNeFMWO5Mf";

const TESTIMONIAL_IMAGE_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDPZcCYYvWQYuDdIRN4_jQvwztk7sRCdfHyy7hSnnnWwuKobTPlrzF2VfSt49tCnxLmQgz8WhAAM8CpRZ2bPpGWlDMMmQrr9bOJ3u0jwYdcXFisSMvyZx2Qvizn9BWkDPSrlNVjuJzciN8mrus_mdd_pNFYwQeIVo1cgM4LBdiqyVMgMZJ-sjkV6YB28IYHkMZCFohyS2JLAFU-KcOA_aFxpBP5FTgT6nSTiU5VQiPARJWsFVO8oD5E";

export function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[640px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={HERO_IMAGE_URL}
            alt="A wide shot of a group of diverse, smiling small business owners in an outdoor market setting"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="hero-gradient absolute inset-0" />
        <div className="relative z-10 mx-auto flex h-full max-w-container-max items-center px-margin-desktop">
          <div className="max-w-[700px]">
            <h1 className="text-display-xl font-display-xl mb-stack-md leading-tight text-on-primary">
              Empowering Ambition through Financial Inclusion
            </h1>
            <p className="text-body-lg font-body-lg mb-stack-lg text-surface-container-highest opacity-90">
              Tailored microfinance solutions designed to bridge the gap for
              entrepreneurs and visionaries across developing markets.
            </p>
            <div className="flex gap-stack-md">
              <button
                type="button"
                className="text-headline-md font-headline-md cursor-pointer rounded-lg bg-primary px-stack-xl py-4 text-on-primary transition-all hover:brightness-110"
              >
                Apply Now
              </button>
              <button
                type="button"
                className="text-headline-md font-headline-md cursor-pointer rounded-lg border-2 border-white px-stack-xl py-4 text-white transition-all hover:bg-white hover:text-on-background"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With Us Section (Bento-style Grid) */}
      <section className="mx-auto max-w-container-max px-margin-desktop py-stack-xl">
        <div className="mb-stack-xl text-center">
          <h2 className="text-display-lg font-display-lg mb-stack-sm text-on-background">
            Why Partner With Us?
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-primary" />
        </div>
        <div className="grid grid-cols-12 gap-gutter">
          {/* Feature Card 1 */}
          <div className="bento-card col-span-12 rounded-xl border border-outline-variant bg-surface-container-lowest p-stack-lg md:col-span-4">
            <div className="mb-stack-md flex h-12 w-12 items-center justify-center rounded-lg bg-primary-fixed">
              <span className="material-symbols-outlined text-3xl text-primary">
                bolt
              </span>
            </div>
            <h3 className="text-headline-md font-headline-md mb-stack-sm">
              Fast Approval
            </h3>
            <p className="text-body-md font-body-md text-on-surface-variant">
              Streamlined digital application process that gets you an answer in
              as little as 24 hours, because opportunity doesn&apos;t wait.
            </p>
          </div>
          {/* Feature Card 2 */}
          <div className="bento-card col-span-12 rounded-xl border border-outline-variant bg-surface-container-lowest p-stack-lg md:col-span-4">
            <div className="mb-stack-md flex h-12 w-12 items-center justify-center rounded-lg bg-secondary-fixed">
              <span className="material-symbols-outlined text-3xl text-secondary">
                trending_down
              </span>
            </div>
            <h3 className="text-headline-md font-headline-md mb-stack-sm">
              Low Interest
            </h3>
            <p className="text-body-md font-body-md text-on-surface-variant">
              Competitive rates designed to foster sustainable growth, ensuring
              that your repayment schedule supports your business journey.
            </p>
          </div>
          {/* Feature Card 3 */}
          <div className="bento-card col-span-12 rounded-xl border border-outline-variant bg-surface-container-lowest p-stack-lg md:col-span-4">
            <div className="mb-stack-md flex h-12 w-12 items-center justify-center rounded-lg bg-tertiary-fixed">
              <span className="material-symbols-outlined text-3xl text-tertiary">
                menu_book
              </span>
            </div>
            <h3 className="text-headline-md font-headline-md mb-stack-sm">
              Financial Literacy
            </h3>
            <p className="text-body-md font-body-md text-on-surface-variant">
              Beyond capital, we provide the tools and education needed to manage
              finances effectively and build a lasting legacy.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats Banner */}
      <section className="bg-primary py-stack-xl text-on-primary">
        <div className="mx-auto grid max-w-container-max grid-cols-1 gap-gutter px-margin-desktop text-center md:grid-cols-3">
          <div className="p-stack-md">
            <div className="text-display-xl font-display-xl mb-stack-xs">98%</div>
            <div className="text-headline-md font-headline-md text-sm uppercase tracking-widest opacity-80">
              Repayment Rate
            </div>
          </div>
          <div className="border-x border-primary-container border-opacity-30 p-stack-md">
            <div className="text-display-xl font-display-xl mb-stack-xs">250+</div>
            <div className="text-headline-md font-headline-md text-sm uppercase tracking-widest opacity-80">
              New Businesses
            </div>
          </div>
          <div className="p-stack-md">
            <div className="text-display-xl font-display-xl mb-stack-xs">$14M+</div>
            <div className="text-headline-md font-headline-md text-sm uppercase tracking-widest opacity-80">
              Capital Disbursed
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonial Section */}
      <section className="overflow-hidden bg-surface-container-low px-margin-desktop py-stack-xl">
        <div className="mx-auto flex max-w-container-max flex-col items-center gap-stack-xl md:flex-row">
          <div className="relative w-full md:w-1/2">
            <div className="relative aspect-square overflow-hidden rounded-full border-[12px] border-white shadow-lg">
              <Image
                src={TESTIMONIAL_IMAGE_URL}
                alt="A portrait of a confident female entrepreneur in her thriving organic farm"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-lg bg-secondary-container p-stack-md shadow-xl">
              <span
                className="material-symbols-outlined text-4xl text-on-secondary-container"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                format_quote
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <span className="text-label-md font-label-md mb-stack-sm block uppercase tracking-widest text-primary">
              Success Story
            </span>
            <h2 className="text-display-lg font-display-lg mb-stack-md text-on-background">
              &ldquo;MicroTrust didn&apos;t just give me a loan; they gave me a
              partner in my dream.&rdquo;
            </h2>
            <p className="text-body-lg font-body-lg mb-stack-lg italic leading-relaxed text-on-surface-variant">
              &ldquo;Starting an agricultural co-operative seemed impossible
              without traditional collateral. MicroTrust looked at my business
              plan, not just my bank account. Within 48 hours, I had the seed
              capital I needed.&rdquo;
            </p>
            <div>
              <div className="text-headline-md font-headline-md text-on-background">
                Maria Elena Sanchez
              </div>
              <div className="text-body-sm font-body-sm text-on-surface-variant">
                Founder, Green Roots Co-operative
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community CTA Section */}
      <section className="mx-auto max-w-container-max px-margin-desktop py-stack-xl">
        <div className="relative flex flex-col items-center justify-between gap-stack-lg overflow-hidden rounded-3xl bg-inverse-surface p-stack-xl md:flex-row">
          {/* Abstract visual effect */}
          <div className="pointer-events-none absolute top-0 right-0 h-full w-1/3 opacity-10">
            <svg
              className="h-full w-full"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M47.7,-63.2C61.4,-53.8,71.8,-38.7,77.3,-22.3C82.8,-5.9,83.4,11.8,77.3,27.1C71.3,42.4,58.6,55.3,43.6,63.1C28.6,70.9,11.3,73.6,-5.5,81.1C-22.3,88.7,-38.6,101.1,-52,99.2C-65.4,97.3,-75.9,81,-82.6,64.2C-89.3,47.4,-92.2,30.1,-89.7,14.2C-87.2,-1.7,-79.2,-16.2,-70.7,-29.4C-62.3,-42.6,-53.3,-54.6,-41.5,-64.8C-29.6,-75.1,-14.8,-83.5,1.7,-85.9C18.2,-88.3,34,-84.7,47.7,-63.2Z"
                fill="#FFFFFF"
                transform="translate(100 100)"
              />
            </svg>
          </div>
          <div className="relative z-10">
            <h2 className="text-display-lg font-display-lg mb-stack-sm text-inverse-on-surface">
              Join a community built on trust
            </h2>
            <p className="text-body-lg font-body-lg max-w-2xl text-surface-container-highest">
              Connect with thousands of entrepreneurs across the globe. Our
              platform is more than finance—it&apos;s a network of support.
            </p>
          </div>
          <div className="relative z-10 flex flex-col gap-stack-md sm:flex-row">
            <button
              type="button"
              className="text-headline-md font-headline-md rounded-lg bg-primary-fixed px-stack-xl py-4 text-on-primary-fixed shadow-lg transition-all hover:brightness-105 active:scale-95"
            >
              Get Started
            </button>
            <button
              type="button"
              className="text-headline-md font-headline-md rounded-lg border border-outline-variant px-stack-xl py-4 text-inverse-on-surface transition-all hover:bg-white hover:text-on-background"
            >
              View Community
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
