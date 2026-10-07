import { Button } from "@/components/ui/button";
import type { ContactProps } from "@/typings/components/contact";
import { CONTACT_DEFAULTS } from "./contact.data";

export const Contact = (props: ContactProps) => {
  const { title = CONTACT_DEFAULTS.title, description = CONTACT_DEFAULTS.description, ctaLabel = CONTACT_DEFAULTS.ctaLabel, ctaHref = CONTACT_DEFAULTS.ctaHref } = props;

  return (
  <section id="contact" className="scroll-mt-4 px-6 md:px-10 xl:px-0">
    <div className="mx-auto max-w-[1200px] border-y border-mist py-24 text-center md:py-32">
      <h2 className="font-serif text-[clamp(2.75rem,5vw,3.75rem)] leading-[0.95] tracking-[-0.03em] text-black">
        {title}
      </h2>
      <p className="mx-auto mt-7 max-w-[600px] text-[15px] leading-[1.5] text-slate">{description}</p>
      <div className="mt-10 flex justify-center">
        <Button href={ctaHref}>{ctaLabel}</Button>
      </div>
    </div>
  </section>
  );
};
