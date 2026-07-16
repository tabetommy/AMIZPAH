import CTASection from "@/components/CTA/page";
export const metadata = {
  title: "Services",
};


const steps = [
    {
      num: "1",
      title: "Complete the application",
      desc: "Fill out the loan application form with your basic details.",
      icon: "edit_note",
    },
    {
      num: "2",
      title: "Provide your Ghana Card",
      desc: "Upload or present a valid Ghana Card (or other accepted national ID).",
      icon: "badge",
    },
    {
      num: "3",
      title: "Submit proof of income",
      desc: "Provide details of your business or proof of regular income.",
      icon: "payments",
    },
    {
      num: "4",
      title: "Add your guarantor",
      desc: "Provide a guarantor with a valid ID to back your application.",
      icon: "group",
    },
    {
      num: "5",
      title: "Upload final documents",
      desc: "Submit any remaining paperwork requested by your loan officer.",
      icon: "upload_file",
    },
    {
      num: "6",
      title: "Application review",
      desc: "Our credit team quickly reviews and verifies your submitted details.",
      icon: "fact_check",
    },
    {
      num: "7",
      title: "Sign the agreement",
      desc: "Review your final terms and sign the official loan agreement.",
      icon: "draw",
    },
    {
      num: "8",
      title: "Get your funds",
      desc: "Receive your money instantly via Mobile Money (MoMo) or bank transfer.",
      icon: "currency_exchange",
    },
  ]


export default function Steps() {
  return (
    <>
         {/* steps to apply */}
        <section className="bg-slate-50 py-16 lg:py-24">
              <div className="mx-auto max-w-4xl px-6">

                  {/* Header */}
                  <div className="text-center mb-16">
                      <span className="text-xs font-bold tracking-widest text-teal-800 uppercase bg-teal-50 px-3 py-1.5 rounded-full">
                          Our Process
                      </span>
                      <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                          Your Path to Funding
                      </h2>
                      <p className="mt-4 text-base text-slate-600 sm:text-lg">
                          We guide you through every step. Here is exactly what to expect from start to finish.
                      </p>
                  </div>

                  {/* Timeline Flow */}
                  <div className="relative">
                      {/* Connecting Line */}
                      <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-teal-800/20" />

                      {/* Steps */}
                      <div className="space-y-12">
                          {steps.map((step, index) => (
                              <div key={step.num} className="relative flex items-start gap-6 group">

                                  {/* Number Node with Glow effect on Hover */}
                                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white border-2 border-teal-800 text-teal-800 font-bold transition-all duration-300 group-hover:bg-teal-800 group-hover:text-white group-hover:scale-110 shadow-sm">
                                      {step.num}
                                  </div>

                                  {/* Content Card */}
                                  <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-teal-100 hover:shadow-md">
                                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                          <div>
                                              <h3 className="text-lg font-bold text-slate-900 mb-1">
                                                  {step.title}
                                              </h3>
                                              <p className="text-sm leading-relaxed text-slate-600">
                                                  {step.desc}
                                              </p>
                                          </div>

                                          {/* Icon */}
                                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-800 self-start sm:self-center">
                                              <span className="material-symbols-outlined text-xl">
                                                  {step.icon}
                                              </span>
                                          </div>
                                      </div>
                                  </div>

                              </div>
                          ))}
                      </div>
                  </div>      
              </div>
          </section>
          <CTASection headerText="Ready to start Step 1?" />
    </>
  );
}
