import { faqs, supportCards, contactInfo } from "./data";
export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  // py-16 lg:py-24  
  return (
    <>
   
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-16">
          <header className="max-w-3xl">
            <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Help &amp; Support
            </h1>

            <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg lg:text-xl">
              Find answers to common questions about MicroTrust Finance or get in
              touch with our specialist team for personalized assistance.
            </p>
          </header>
        </div>
      </section>
      
      <div className="mx-auto max-w-7xl px-6 pb-16 lg:px-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
      {/* FAQ Section */}
      <section className="space-y-8 lg:col-span-7">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:p-8">
          {/* Header */}
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>

            <div className="relative w-full md:w-72">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                search
              </span>

              <input
                type="text"
                placeholder="Search topics..."
                className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          {/* FAQ List */}
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group border-b border-gray-200 last:border-0"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg px-2 py-4 transition hover:bg-gray-50">
                  <span className="font-semibold text-gray-900">
                    {faq.question}
                  </span>

                  <span className="material-symbols-outlined text-primary transition group-open:rotate-180">
                    expand_more
                  </span>
                </summary>

                <div className="px-2 pb-4 text-sm leading-7 text-gray-600">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Support Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {supportCards.map((card) => (
            <div
              key={card.title}
              className={`${card.bg} ${card.text} rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg`}
            >
              <span className="material-symbols-outlined mb-4 text-4xl">
                {card.icon}
              </span>

              <h3 className="text-xl font-semibold">
                {card.title}
              </h3>

              <p className="mt-3 text-sm leading-6 opacity-90">
                {card.description}
              </p>

              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 font-semibold hover:underline"
              >
                {card.button}

                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </a>
            </div>
          ))}
        </div>
      </section>
      <aside className="space-y-8 lg:col-span-5">
      {/* Contact Form */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:p-8">
        <h2 className="mb-8 text-2xl font-bold text-gray-900">
          Send us a Message
        </h2>

        <form className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                className="h-11 w-full rounded-lg border border-gray-300 px-4 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                placeholder="john@example.com"
                className="h-11 w-full rounded-lg border border-gray-300 px-4 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Subject
            </label>

            <select className="h-11 w-full rounded-lg border border-gray-300 bg-white px-4 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20">
              <option>General Inquiry</option>
              <option>Loan Application Status</option>
              <option>Technical Support</option>
              <option>Business Partnership</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Message
            </label>

            <textarea
              rows={5}
              placeholder="How can we help you?"
              className="w-full rounded-lg border border-gray-300 p-4 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-primary py-3 font-semibold uppercase tracking-wider text-white transition hover:opacity-90 active:scale-95"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Details */}
      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
        <h3 className="mb-6 text-xl font-bold text-gray-900">
          Contact Details
        </h3>

        <div className="space-y-6">
          {contactInfo.map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <div className="rounded-lg bg-primary/10 p-3 text-primary">
                <span className="material-symbols-outlined">
                  {item.icon}
                </span>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                  {item.title}
                </p>

                <p className="mt-1 font-medium text-gray-900">
                  {item.value}
                </p>

                {item.subtext && (
                  <p className="mt-1 text-sm text-gray-500">
                    {item.subtext}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="relative h-72 overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvux1T9bLHo0_Dba7lBYfKalatzuOx7SMt8NjL5AflGPJmsWY9MC8yIVAO69Clq0LrlTV8-gmbt1hLlDCT9r8xAOt_F5Mtxxz2qFs82vGiXarlwqX8qtCHXI6AVgfiVru-1LZReAYB2-GSOee1cC5IWeD0ni_M0WPAwmDbVZBBGMz-LXrilGJ1g4MZpsZXk9HqPXtmoRZ27FlayGjSJOdlRTFNUqfcfCwn17IAPZ5QirbSjjsFjA7y"
          alt="Capital City Office Location"
          className="h-full w-full object-cover grayscale opacity-80"
        />

        <div className="absolute bottom-4 left-4 rounded-xl border border-white/30 bg-white/90 p-4 shadow-lg backdrop-blur">
          <p className="font-semibold text-primary">
            Capital City Office
          </p>

          <p className="text-sm text-gray-600">
            Global Headquarters
          </p>
        </div>
      </div>
    </aside>
    </div>
    </>
  );
}
