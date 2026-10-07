import type { SectionLabelProps } from "@/typings/components/ui/section-label";

export const SectionLabel = ({ children, className = "" }: SectionLabelProps) => (
  <span className={`inline-block font-mono text-xs tracking-[-0.01em] text-olive ${className}`}>
    {children}
  </span>
);
