import { SectionLabel } from "@/components/ui/section-label";
import type { BenefitsProps } from "@/typings/components/benefits";
import { BENEFITS_DEFAULTS } from "./benefits.data";

export const Benefits = ({
  label = BENEFITS_DEFAULTS.label,
  title = BENEFITS_DEFAULTS.title,
  subtitle = BENEFITS_DEFAULTS.subtitle,
  items = BENEFITS_DEFAULTS.items,
}: BenefitsProps) => (
  <section id="benefits" className="scroll-mt-4 px-6 py-20 md:px-10 md:py-24 xl:px-0 xl:py-28">
    <div className="mx-auto max-w-[1200px]">
      <SectionLabel>{label}</SectionLabel>
      <h2 className="mt-6 font-serif text-[clamp(2.75rem,5vw,3.75rem)] leading-[0.95] tracking-[-0.03em] text-black">
        {title}
      </h2>
      <p className="mt-7 max-w-[420px] text-[15px] leading-[1.4] text-slate">{subtitle}</p>

      <div className="mt-16 grid gap-x-5 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <article key={item.id} className="border-t border-mist pt-5">
            <img src={item.icon.src} alt={item.icon.alt} className="h-7 w-7 object-contain object-left" loading="lazy" />
            <h3 className="mt-9 font-serif text-lg leading-tight text-black">{item.title}</h3>
            <p className="mt-4 text-[15px] leading-[1.4] text-slate">{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
