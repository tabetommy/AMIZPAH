import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

type ButtonProps = {
  variant?: ButtonVariant;
  href?: string;
  children: React.ReactNode;
} & ComponentPropsWithoutRef<"button">;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-teal-800 text-white hover:bg-teal-900 border border-transparent",
  secondary:
    "bg-transparent text-white border border-white hover:bg-white/10",
  outline:
    "bg-transparent text-teal-800 border border-teal-800 hover:bg-teal-50",
};

const baseStyles =
  "inline-flex items-center justify-center rounded-md px-6 py-2.5 text-sm font-medium transition-colors";

export function Button({
  variant = "primary",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
