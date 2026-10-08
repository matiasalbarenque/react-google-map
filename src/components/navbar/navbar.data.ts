import logo from '@/assets/landing/logo.svg';
import { NAV_LINKS } from '@/constants/navigation';
import type { NavbarProps } from '@/typings/components/navbar';

export const NAVBAR_DEFAULTS: Required<NavbarProps> = {
  logo: { src: logo, alt: 'Area' },
  links: NAV_LINKS,
  ctaLabel: 'Learn More',
  ctaHref: '#benefits',
};
