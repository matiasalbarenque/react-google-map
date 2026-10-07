import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/section-label";
import type { FeatureStatus, SpecsProps } from "@/typings/components/specs";
import checkIcon from "@/assets/landing/check.svg";
import partialIcon from "@/assets/landing/partial.svg";
import crossIcon from "@/assets/landing/cross.svg";
import { SPECS_DEFAULTS } from "./specs.data";

const STATUS_ICONS: Record<FeatureStatus, string> = {
  yes: checkIcon,
  partial: partialIcon,
  no: crossIcon,
};

const STATUS_LABELS: Record<FeatureStatus, string> = {
  yes: "Included",
  partial: "Partially included",
  no: "Not included",
};

export const Specs = ({
  label = SPECS_DEFAULTS.label,
  title = SPECS_DEFAULTS.title,
  description = SPECS_DEFAULTS.description,
  ctaLabel = SPECS_DEFAULTS.ctaLabel,
  competitors = SPECS_DEFAULTS.competitors,
}: SpecsProps) => (
  <section
    id="specifications"
    aria-labelledby="specs-heading"
    className="scroll-mt-4 px-6 py-20 md:px-10 md:py-24 xl:px-0 xl:py-28"
  >
    <div className="mx-auto max-w-[1200px]">
      <div className="mx-auto max-w-[720px] text-center">
        <SectionLabel>{label}</SectionLabel>
        <h2
          id="specs-heading"
          className="mt-6 font-serif text-[clamp(2.75rem,5vw,3.75rem)] leading-[0.95] tracking-[-0.03em] text-black"
        >
          {title}
        </h2>
        <p className="mx-auto mt-7 max-w-[600px] text-[15px] leading-[1.5] text-slate">{description}</p>
        <div className="mt-9 flex justify-center">
          <Button href="#contact">{ctaLabel}</Button>
        </div>
      </div>

      <div aria-label="Product feature comparison" className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-0">
        {competitors.map((competitor, index) => (
          <div
            key={`${competitor.name}-${index}`}
            className={`min-w-0 rounded-[20px] border border-mist px-6 py-8 sm:px-8 md:rounded-none md:px-5 lg:px-8 ${
              competitor.highlighted ? "bg-[#F3F5EC]" : "bg-white"
            } ${index === competitors.length - 1 ? "md:rounded-r-[20px]" : ""} ${
              index > 0 ? "md:border-l-0" : ""
            } ${index === 0 ? "md:rounded-l-[20px]" : ""}`}
          >
            <h3 className="border-b border-mist pb-7 text-center font-serif text-[2.5rem] leading-none tracking-tight text-black">
              {competitor.name}
            </h3>
            <ul className="divide-y divide-mist">
              {competitor.features.map((feature, featureIndex) => (
                <li
                  key={`${feature.label}-${featureIndex}`}
                  className="flex min-h-[68px] items-center gap-4 py-4 text-[15px] leading-snug text-black"
                >
                  <img
                    src={STATUS_ICONS[feature.status]}
                    alt=""
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 object-contain"
                  />
                  <span className="sr-only">{STATUS_LABELS[feature.status]}: </span>
                  <span>{feature.label}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);
