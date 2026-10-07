import type { ButtonProps } from "@/typings/components/ui/button";

export const Button = ({
  children,
  variant = "primary",
  href,
  className = "",
}: ButtonProps) => {
  const classes = [
    "inline-flex items-center justify-center rounded-full border px-6 py-3 text-center text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#485C11]",
    variant === "primary"
      ? "border-[#485C11] bg-[#485C11] text-white hover:bg-[#36450D]"
      : "border-[#485C11] bg-transparent text-[#485C11] hover:bg-[#485C11] hover:text-white",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href !== undefined) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
};
