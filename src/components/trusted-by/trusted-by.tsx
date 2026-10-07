import type { TrustedByProps } from "@/typings/components/trusted-by";
import { TRUSTED_BY_DEFAULTS } from "./trusted-by.data";

export const TrustedBy = (props: TrustedByProps) => {
  const { label = TRUSTED_BY_DEFAULTS.label, logos = TRUSTED_BY_DEFAULTS.logos } = props;

  return (
  <section aria-label={label} className="px-6 py-14 md:px-10 xl:px-0">
    <div className="mx-auto max-w-[1200px]">
      <p className="text-center text-[15px] text-slate md:text-left">{label}</p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-8 md:justify-between">
        {logos.map((logo, index) => (
          <img
            key={`${logo.src}-${index}`}
            src={logo.src}
            alt={logo.alt}
            loading="lazy"
            className="max-h-11 w-auto max-w-[140px] object-contain opacity-60"
          />
        ))}
      </div>
    </div>
  </section>
  );
};
