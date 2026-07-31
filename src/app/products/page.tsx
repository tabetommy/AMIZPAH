import Steps from "./steps";


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



const TESTIMONIAL_IMAGE_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDPZcCYYvWQYuDdIRN4_jQvwztk7sRCdfHyy7hSnnnWwuKobTPlrzF2VfSt49tCnxLmQgz8WhAAM8CpRZ2bPpGWlDMMmQrr9bOJ3u0jwYdcXFisSMvyZx2Qvizn9BWkDPSrlNVjuJzciN8mrus_mdd_pNFYwQeIVo1cgM4LBdiqyVMgMZJ-sjkV6YB28IYHkMZCFohyS2JLAFU-KcOA_aFxpBP5FTgT6nSTiU5VQiPARJWsFVO8oD5E";

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
      <section className="mx-auto max-w-container-max px-6 py-16 lg:px-16">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {/* Salary Loan */}
          <div className="group flex flex-col rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="mb-6 flex items-center justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-primary">
                <span className="material-symbols-outlined text-3xl">
                  account_balance_wallet
                </span>
              </div>

              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-primary">
                Popular
              </span>
            </div>

            <h3 className="text-2xl font-bold text-slate-900">
              Salary Loan
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Quick financial support for employees without collateral.
            </p>

            <div className="my-8 rounded-2xl bg-primary/5 p-5 text-center">
              <p className="text-sm text-slate-500">Interest Rate</p>
              <h2 className="text-5xl font-bold text-primary">8%</h2>
              <p className="text-slate-500">per month</p>
            </div>

            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-600">
                  check_circle
                </span>
                Repayment: 1 – 6 months
              </li>

              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-600">
                  check_circle
                </span>
                No collateral required
              </li>

              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-600">
                  check_circle
                </span>
                Fast approval
              </li>
            </ul>

            <button className="mt-auto pt-8">
              <div className="rounded-xl bg-primary py-3 text-center font-semibold text-white transition hover:opacity-90">
                Apply Now
              </div>
            </button>
          </div>

          {/* Personal Loan */}
          <div className="group flex flex-col rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-purple-600">
              <span className="material-symbols-outlined text-3xl">
                person
              </span>
            </div>

            <h3 className="text-2xl font-bold">
              Personal Loan
            </h3>

            <p className="mt-3 text-sm text-slate-600">
              Flexible financing for personal projects and emergencies.
            </p>

            <div className="my-8 rounded-2xl bg-purple-50 p-5 text-center">
              <p className="text-sm text-slate-500">Interest Rate</p>
              <h2 className="text-5xl font-bold text-purple-600">7%</h2>
              <p className="text-slate-500">per month</p>
            </div>

            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-600">
                  check_circle
                </span>
                Repayment: 1 – 6 months
              </li>

              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-600">
                  check_circle
                </span>
                Competitive rates
              </li>

              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-600">
                  check_circle
                </span>
                Flexible eligibility
              </li>
            </ul>

            <button className="mt-auto pt-8">
              <div className="rounded-xl bg-purple-600 py-3 text-center font-semibold text-white">
                Apply Now
              </div>
            </button>

          </div>

          {/* Business Loan */}
          <div className="group flex flex-col rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-700">
              <span className="material-symbols-outlined text-3xl">
                business_center
              </span>
            </div>

            <h3 className="text-2xl font-bold">
              Individual Business Loan
            </h3>

            <p className="mt-3 text-sm text-slate-600">
              Capital for inventory, equipment, and business expansion.
            </p>

            <div className="my-8 rounded-2xl bg-green-50 p-5 text-center">
              <p className="text-sm text-slate-500">Interest Rate</p>
              <h2 className="text-5xl font-bold text-green-700">7%</h2>
              <p className="text-slate-500">per month</p>
            </div>

            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-600">
                  check_circle
                </span>
                Repayment: 1 – 6 months
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-600">
                  check_circle
                </span>
                Business mentoring
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-600">
                  check_circle
                </span>
                Growth financing
              </li>
            </ul>

            <button className="mt-auto pt-8">
              <div className="rounded-xl bg-green-700 py-3 text-center font-semibold text-white">
                Apply Now
              </div>
            </button>

          </div>

          {/* Group Loan */}
          <div className="group flex flex-col rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
              <span className="material-symbols-outlined text-3xl">
                groups
              </span>
            </div>

            <h3 className="text-2xl font-bold">
              Group Business Loan
            </h3>

            <p className="mt-3 text-sm text-slate-600">
              Empowering community groups with affordable financing.
            </p>

            <div className="my-8 rounded-2xl bg-orange-50 p-5 text-center">
              <p className="text-sm text-slate-500">Interest Rate</p>
              <h2 className="text-5xl font-bold text-orange-600">7%</h2>
              <p className="text-slate-500">per month</p>
            </div>

            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-600">
                  check_circle
                </span>
                Repayment: 1 – 6 months
              </li>

              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-600">
                  check_circle
                </span>
                Group guarantee
              </li>

              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-600">
                  check_circle
                </span>
                Community support
              </li>
            </ul>

            <button className="mt-auto pt-8">
              <div className="rounded-xl bg-orange-600 py-3 text-center font-semibold text-white">
                Apply Now
              </div>
            </button>

          </div>

        </div>
      </section>
      <Steps/>
        
         
    </>
  );
}
