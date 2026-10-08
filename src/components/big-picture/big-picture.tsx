import { Button } from '@/components/ui/button';
import type { BigPictureProps } from '@/typings/components/big-picture';

import { BIG_PICTURE_DEFAULTS } from './big-picture.data';

export const BigPicture = (props: BigPictureProps) => {
  const {
    image = BIG_PICTURE_DEFAULTS.image,
    title = BIG_PICTURE_DEFAULTS.title,
    description = BIG_PICTURE_DEFAULTS.description,
    steps = BIG_PICTURE_DEFAULTS.steps,
    ctaLabel = BIG_PICTURE_DEFAULTS.ctaLabel,
  } = props;

  return (
    <section className="px-6 py-20 md:px-10 md:py-24 xl:px-0 xl:py-28">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[1fr_590px] lg:gap-16">
        <div>
          <h2 className="font-serif text-[clamp(2.75rem,5vw,3.75rem)] leading-[0.95] tracking-[-0.03em] text-black">
            {title}
          </h2>
          <p className="mt-7 max-w-[560px] text-[15px] leading-[1.5] text-slate">
            {description}
          </p>

          <ol className="mt-12 space-y-7">
            {steps.map((step) => (
              <li key={step.number} className="flex gap-4">
                <span className="w-7 shrink-0 text-[15px] leading-[1.4] text-slate">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-[15px] font-medium leading-[1.4] text-black">
                    {step.title}
                  </h3>
                  {step.description && (
                    <p className="text-[15px] leading-[1.4] text-black">
                      {step.description}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>

          <Button href="#specifications" className="mt-12">
            {ctaLabel}
          </Button>
        </div>

        <div className="overflow-hidden rounded-[30px]">
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="aspect-[590/620] w-full object-cover lg:aspect-[590/831]"
          />
        </div>
      </div>
    </section>
  );
};
