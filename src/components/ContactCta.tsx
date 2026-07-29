import Link from "next/link";

export function ContactCta({
  href = "/#contact",
  children,
  variant = "primary",
}: {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium tracking-wide transition";
  const styles =
    variant === "primary"
      ? "border border-navy bg-navy text-cream hover:bg-transparent hover:text-navy"
      : "border border-navy text-navy hover:bg-navy hover:text-cream";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
