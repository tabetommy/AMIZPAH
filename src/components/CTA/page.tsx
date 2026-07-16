export default function CTASection({headerText}: {headerText: string}) {
  return (
    <>
        <section className="mx-auto max-w-container-max bg-slate-50 py-16 lg:py-24 px-6 lg:px-8">
            {/* Action Footer (Contact us to start) */}
            <div className="rounded-2xl bg-teal-900 p-8 text-center text-white shadow-xl lg:p-12">
                <h3 className="text-2xl font-bold sm:text-3xl">
                    
                    {headerText}
                </h3>
                <p className="mt-4 text-base text-teal-100 max-w-xl mx-auto">
                    Get in touch with our team in Obuasi. We will help you prepare your paperwork and make the application process seamless.
                </p>
                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                    <a
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-teal-900 transition hover:bg-teal-50 active:scale-95"
                    >
                        Contact Our Team
                    </a>
                    <a
                        href="https://wa.me/233257639795?text=Hello%20Damizpah,%20I%20want%20to%20apply%20for%20a%20loan."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-teal-600 bg-teal-800 px-6 py-3 font-semibold text-white transition hover:bg-teal-700 active:scale-95"
                    >
                        <span className="material-symbols-outlined text-lg">chat</span>
                        Chat on WhatsApp
                    </a>
                </div>
            </div>
        </section>
    </>
  );
}
