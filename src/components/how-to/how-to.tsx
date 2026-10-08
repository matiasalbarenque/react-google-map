import { Button } from '@/components/ui/button';
import type { HowToProps } from '@/typings/components/how-to';

import { HOW_TO_DEFAULTS } from './how-to.data';

export const HowTo = (props: HowToProps) => {
  const {
    title = HOW_TO_DEFAULTS.title,
    ctaLabel = HOW_TO_DEFAULTS.ctaLabel,
    steps = HOW_TO_DEFAULTS.steps,
    image = HOW_TO_DEFAULTS.image,
  } = props;

  return (
    <section id="how-to" className="scroll-mt-4 px-6 md:px-10 xl:px-0">
      <div className="mx-auto max-w-[1200px]">
        <div className="border-y border-mist py-16 md:py-20">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <h2 className="font-serif text-[clamp(2.75rem,5vw,3.75rem)] leading-[0.95] tracking-[-0.03em] text-black">
              {title}
            </h2>
            <Button href="#contact">{ctaLabel}</Button>
          </div>

          <div className="mt-14 grid gap-x-5 gap-y-10 md:grid-cols-3">
            {steps.map((step) => (
              <article key={step.number} className="border-t border-mist pt-10">
                <div className="text-[64px] leading-none tracking-[-0.03em] text-stone md:text-[80px]">
                  {step.number}
                </div>
                <h3 className="mt-10 font-serif text-lg text-black">
                  {step.title}
                </h3>
                {step.description && (
                  <p className="mt-3 text-[15px] leading-[1.4] text-slate">
                    {step.description}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[30px]">
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="aspect-[1200/664] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
