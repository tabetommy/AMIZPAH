export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
 
];

export const siteConfig = {
  name: "DAMIZPAH",
  description:
    "Tailored microfinance solutions designed to bridge the gap for entrepreneurs and visionaries across developing markets.",
  applyHref: "/apply",
};
