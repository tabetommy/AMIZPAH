import { PageHeader } from "@/components/layout/PageHeader";

export const metadata = {
  title: "Apply Now",
};

export default function ApplyPage() {
  return (
    <>
      <PageHeader
        title="Apply for a Loan"
        description="Start your application today and take the next step toward growing your business."
      />
      <section className="py-16">
        <div className="mx-auto max-w-xl px-4 sm:px-6">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="business-name"
                className="block text-sm font-medium text-gray-700"
              >
                Business Name
              </label>
              <input
                id="business-name"
                type="text"
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm shadow-sm focus:border-teal-800 focus:outline-none focus:ring-1 focus:ring-teal-800"
              />
            </div>
            <div>
              <label
                htmlFor="loan-amount"
                className="block text-sm font-medium text-gray-700"
              >
                Requested Loan Amount
              </label>
              <input
                id="loan-amount"
                type="number"
                min={0}
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm shadow-sm focus:border-teal-800 focus:outline-none focus:ring-1 focus:ring-teal-800"
              />
            </div>
            <div>
              <label
                htmlFor="purpose"
                className="block text-sm font-medium text-gray-700"
              >
                Purpose of Loan
              </label>
              <textarea
                id="purpose"
                rows={4}
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm shadow-sm focus:border-teal-800 focus:outline-none focus:ring-1 focus:ring-teal-800"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-teal-800 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-teal-900"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
