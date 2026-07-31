import Link from "next/link";

export function Footer() {
  return (
    <footer className=" w-full bg-surface-container-highest">
      <div className="mx-auto grid max-w-container-max grid-cols-12 gap-gutter px-margin-desktop py-stack-xl">
        {/* Company */}
        <div className="col-span-12 md:col-span-4">
          <h3 className="mb-stack-md text-headline-sm font-headline-sm text-primary">
            Damizpah Microcredit Enterprise
          </h3>

          <p className="mb-stack-lg text-body-sm font-body-sm text-on-surface-variant">
            Empowering individuals, entrepreneurs and businesses across Ghana
            through accessible, affordable and reliable financial services.
          </p>
        </div>

        {/* Company Links */}
        <div className="col-span-12 md:col-span-2">
          <h4 className="mb-stack-md text-label-md font-label-md uppercase text-primary">
            Company
          </h4>

          <ul className="space-y-2">
            <li>
              <Link
                href="/about"
                className="text-body-sm font-body-sm text-on-surface-variant transition-colors hover:text-on-surface"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                href="/products"
                className="text-body-sm font-body-sm text-on-surface-variant transition-colors hover:text-on-surface"
              >
                Loan Products
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="text-body-sm font-body-sm text-on-surface-variant transition-colors hover:text-on-surface"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="col-span-12 md:col-span-2">
          <h4 className="mb-stack-md text-label-md font-label-md uppercase text-primary">
            Services
          </h4>

          <ul className="space-y-2">
            <li className="text-body-sm font-body-sm text-on-surface-variant">
              Salary Loans
            </li>

            <li className="text-body-sm font-body-sm text-on-surface-variant">
              Personal Loans
            </li>

            <li className="text-body-sm font-body-sm text-on-surface-variant">
              Business Loans
            </li>

            <li className="text-body-sm font-body-sm text-on-surface-variant">
              Group Business Loans
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="col-span-12 md:col-span-4">
          <h4 className="mb-stack-md text-label-md font-label-md uppercase text-primary">
            Contact Us
          </h4>

          <div className="space-y-4">
            {/* Address */}
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary">
                location_on
              </span>

              <p className="text-body-sm font-body-sm text-on-surface-variant">
                P. O. Box 662
                <br />
                Obuasi Municipal
                <br />
                Ashanti Region, Ghana
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">
                call
              </span>

              <a
                href="tel:+233322498786"
                className="text-body-sm font-body-sm text-on-surface-variant transition-colors hover:text-on-surface"
              >
                +233 32 249 8786
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">
                mail
              </span>

              <a
                href="mailto:info@damizpah-microcredit.waltersgroups.org"
                className="text-body-sm font-body-sm text-on-surface-variant transition-colors hover:text-on-surface"
              >
                info@damizpah-microcredit.waltersgroups.org 
              </a>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">
                chat
              </span>

              <a
                href="https://wa.me/233257639795"
                target="_blank"
                rel="noopener noreferrer"
                className="text-body-sm font-body-sm text-on-surface-variant transition-colors hover:text-on-surface"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="col-span-12 mt-stack-xl flex flex-col items-center justify-between gap-4 border-t border-outline-variant pt-stack-md md:flex-row">
          <span className="text-body-sm font-body-sm text-on-surface-variant">
            © {new Date().getFullYear()} Damizpah Micro Credit Enterprise. All rights
            reserved.
          </span>

          
        </div>
      </div>
    </footer>
  );
}