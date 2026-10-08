import type { HeroProps } from '@/typings/components/hero';

import { HERO_DEFAULTS } from './hero.data';

export const Hero = (props: HeroProps) => {
  const { title = HERO_DEFAULTS.title, image = HERO_DEFAULTS.image } = props;

  return (
    <section id="top" className="px-6 md:px-10 xl:px-0">
      <div className="mx-auto max-w-[1200px]">
        <h1 className="mt-20 text-center font-serif text-[clamp(3.25rem,12.5vw,10rem)] leading-[0.86] tracking-[-0.035em] text-black">
          {title}
        </h1>
        <div className="mt-16 overflow-hidden rounded-[30px] bg-sage md:mt-30">
          <div className="relative mx-auto aspect-[5/3] w-full">
            <div className="absolute left-1/2 top-1/2 aspect-[907/644] w-[75.6%] -translate-x-1/2 -translate-y-1/2 rounded-[26px] bg-black p-[2%]">
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full rounded-[14px] object-cover"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
