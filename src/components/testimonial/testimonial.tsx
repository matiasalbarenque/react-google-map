import type { TestimonialProps } from '@/typings/components/testimonial';

import { TESTIMONIAL_DEFAULTS } from './testimonial.data';

export const Testimonial = (props: TestimonialProps) => {
  const {
    image = TESTIMONIAL_DEFAULTS.image,
    quote = TESTIMONIAL_DEFAULTS.quote,
    author = TESTIMONIAL_DEFAULTS.author,
    role = TESTIMONIAL_DEFAULTS.role,
  } = props;

  return (
    <section className="px-6 pb-20 md:px-10 md:pb-24 xl:px-0 xl:pb-28">
      <div className="mx-auto grid max-w-[1200px] gap-6 lg:grid-cols-2 lg:gap-10">
        <div className="overflow-hidden rounded-[30px]">
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="aspect-[590/500] h-full w-full object-cover lg:aspect-[590/669]"
          />
        </div>
        <figure className="flex flex-col justify-center border border-mist p-8 md:p-12 lg:min-h-[669px]">
          <blockquote className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.05] tracking-[-0.02em] text-black">
            “{quote}”
          </blockquote>
          <figcaption className="mt-10">
            <div className="text-[15px] leading-[1.4] text-black">{author}</div>
            <div className="mt-1 font-mono text-xs text-olive">{role}</div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};
