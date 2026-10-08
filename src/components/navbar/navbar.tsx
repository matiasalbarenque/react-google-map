import { useState } from 'react';

import menuIcon from '@/assets/landing/icon-menu.svg';
import { Button } from '@/components/ui/button';
import type { NavbarProps } from '@/typings/components/navbar';

import { NAVBAR_DEFAULTS } from './navbar.data';

export const Navbar = (props: NavbarProps) => {
  const {
    logo = NAVBAR_DEFAULTS.logo,
    links = NAVBAR_DEFAULTS.links,
    ctaLabel = NAVBAR_DEFAULTS.ctaLabel,
    ctaHref = NAVBAR_DEFAULTS.ctaHref,
  } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-20 bg-white">
      <nav
        aria-label="Main navigation"
        className="relative mx-auto flex min-h-[88px] max-w-[1200px] items-center justify-between px-6 md:min-h-[148px] md:px-10"
      >
        <a
          href="#top"
          aria-label="Area home"
          onClick={() => setIsOpen(false)}
          className="shrink-0"
        >
          <img src={logo.src} alt={logo.alt} className="h-9 w-auto" />
        </a>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-[26px] md:flex">
          {links.map((link) => (
            <a
              key={`${link.href}-${link.label}`}
              href={link.href}
              className="whitespace-nowrap text-sm text-black transition-colors hover:text-olive focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-olive"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button href={ctaHref}>{ctaLabel}</Button>
        </div>

        <button
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-md md:hidden"
        >
          <img src={menuIcon} alt="" aria-hidden="true" className="h-6 w-6" />
        </button>
      </nav>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full flex flex-col gap-1 border-t border-mist bg-white px-6 pb-6 pt-3 shadow-lg md:hidden"
        >
          {links.map((link) => (
            <a
              key={`${link.href}-${link.label}`}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-md px-2 py-3 text-sm text-black hover:bg-mist"
            >
              {link.label}
            </a>
          ))}
          <div onClick={() => setIsOpen(false)} className="pt-3">
            <Button href={ctaHref}>{ctaLabel}</Button>
          </div>
        </div>
      )}
    </header>
  );
};
