import ContactForm from "./contactForm";
export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  // py-16 lg:py-24  
  return (
    <>
      <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-16">
          <header className="max-w-3xl">
            <span className="text-sm font-bold tracking-wider text-teal-800 uppercase">Damizpah Microcredit Enterprise</span>
            <h1 className="mt-2 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Have questions about our loans or services? Reach out to our team in Obuasi directly or drop us a message below.
            </p>
          </header>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="mx-auto max-w-container-max px-6 py-16 lg:px-16 grid grid-cols-1 gap-12 lg:grid-cols-12">
        
        {/* Left Column: Contact Details, WhatsApp, & Map */}
        <div className="space-y-8 lg:col-span-5">
          
          {/* Contact Details */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 lg:p-8">
            <h3 className="mb-6 text-xl font-bold text-slate-900">
              Contact Details
            </h3>

            <div className="space-y-6">
              {/* Phone Info */}
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-teal-800/10 p-3 text-teal-800">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Phone Support
                  </p>
                  <a 
                    href="tel:+233322498786"
                    className="mt-1 block font-medium text-slate-900 hover:text-teal-800 hover:underline transition"
                  >
                    +233 32 249 8786
                  </a>
                  <p className="mt-1 text-sm text-slate-500">Mon - Fri, 7:30 AM - 16:30 PM</p>
                </div>
              </div>
              {/* Mobile */}
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-teal-800/10 p-3 text-teal-800">
                  <span className="material-symbols-outlined">smartphone</span>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Mobile Support
                  </p>
                  <a 
                    href="tel:+233257639795"
                    className="mt-1 block font-medium text-slate-900 hover:text-teal-800 hover:underline transition"
                  >
                    +233 25 763 9795
                  </a>
                  <p className="mt-1 text-sm text-slate-500">Mon - Fri, 7:30 AM - 16:30 PM</p>
                </div>
              </div>

              {/* Email Info */}
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-teal-800/10 p-3 text-teal-800">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Email Address
                  </p>
                  <a 
                    href="mailto:damizpahmicrocredit.gh@gmail.com"
                   className="mt-1 block break-all sm:break-normal font-medium text-slate-900 hover:text-teal-800 hover:underline transition"
                  >
                    damizpahmicrocredit.gh@gmail.com
                  </a>
                  <p className="mt-1 text-sm text-slate-500">We reply within 1 business day</p>
                </div>
              </div>

              {/* Postal Location Info */}
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-teal-800/10 p-3 text-teal-800">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Office Mailbox Address
                  </p>
                  <p className="mt-1 font-medium text-slate-900">
                    P. O. Box 662, Obuasi Municipal
                  </p>
                  <p className="mt-1 text-sm text-slate-500 font-medium">Ashanti Region, Ghana</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Support Button */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <a
                href="https://wa.me/233257639795?text=Hello%20Damizpah%20Microfinance,%20I%20have%20an%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700 active:scale-95"
              >
                <span className="material-symbols-outlined">chat</span>
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Google Map (Obuasi Municipal Area, Ghana) 
          https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15871.365997232252!2d-1.6853241517409277!3d5.932918861596767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdc534fc18d7ef7%3A0xea80f0be2ecb5624!2sObuasi!5e0!3m2!1sen!2sgh!4v1710000000000!5m2!1sen!2sgh*/}
          {/* <div className="relative h-72 overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-slate-100">
            <iframe
              title="Obuasi Municipal, Ashanti Region, Ghana"
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d495.8090558961129!2d-1.6748797!3d6.2012341!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMTInMDkuMyJOIDHCsDQwJzMzLjciVw!5e0!3m2!1sen!2sde!4v1784204735452!5m2!1sen!2sde"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[20%] contrast-[110%]"
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/30 bg-white/95 p-4 shadow-lg backdrop-blur">
              <p className="font-bold text-teal-800">Obuasi Office Location</p>
              <p className="text-xs text-slate-600">P. O. Box 662, Obuasi Municipal, Ashanti Region, Ghana</p>
            </div>
          </div> */}
          <div className="relative h-72 overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-slate-100">
  <iframe
    title="Obuasi Municipal, Ashanti Region, Ghana"
    src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d495.8090558961129!2d-1.6748797!3d6.2012341!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMTInMDkuMyJOIDHCsDQwJzMzLjciVw!5e0!3m2!1sen!2sde!4v1784204735452!5m2!1sen!2sde"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="grayscale-[20%] contrast-[110%]"
  />

  {/* Open in Maps Button */}
  <a
    href="https://www.google.com/maps?q=6.2025833,-1.6760278"
    target="_blank"
    rel="noopener noreferrer"
    className="absolute right-4 top-4 z-20 inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-lg transition hover:bg-slate-50"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-red-500"
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
    </svg>
    Open in Maps
  </a>

  {/* Office Card */}
  <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/30 bg-white/95 p-4 shadow-lg backdrop-blur">
    <p className="font-bold text-teal-800">Obuasi Office Location</p>
    <p className="text-xs text-slate-600">
      P. O. Box 662, Obuasi Municipal, Ashanti Region, Ghana
    </p>
  </div>
</div>

        </div>

        {/* Right Column: Contact Message Form */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
            <h2 className="mb-2 text-2xl font-bold text-slate-900">
              Send us a Message
            </h2>
            <p className="mb-8 text-sm text-slate-500">
              Fill out the form below and our representative will contact you shortly.
            </p>

            <ContactForm />
          </div>
        </div>

      </div>
    </div>
     
    </>
  );
}
