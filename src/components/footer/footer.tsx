import type { FooterProps } from "@/typings/components/footer";
import { FOOTER_DEFAULTS } from "./footer.data";

export const Footer = ({
  logo = FOOTER_DEFAULTS.logo,
  links = FOOTER_DEFAULTS.links,
  year = FOOTER_DEFAULTS.year,
  copyright = FOOTER_DEFAULTS.copyright,
}: FooterProps) => (
  <footer className="px-6 pt-12 pb-6 md:px-10 xl:px-0">
    <div className="mx-auto max-w-[1200px]">
      <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-[27px] gap-y-3">
        {links.map((link) => (
          <a
            key={`${link.href}-${link.label}`}
            href={link.href}
            className="text-sm text-black transition-colors hover:text-olive"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="mt-24 flex flex-wrap items-end justify-between gap-6">
        <div className="flex items-end gap-8">
          <img src={logo.src} alt={logo.alt} className="h-[70px] w-8 object-contain" loading="lazy" />
          <p className="pb-1 text-[13px] text-black">
            {copyright} {year}
          </p>
        </div>
        <p className="pb-1 text-[13px] text-black">All Rights Reserved</p>
      </div>
    </div>
  </footer>
);
