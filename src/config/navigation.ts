export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "FAQ", href: "/faq" },
];

export const siteConfig = {
  name: "Damizpah Micro Credit",
  description:
    "Damizpah Micro Credit provides affordable microcredit and financial solutions in Ghana.",
};
