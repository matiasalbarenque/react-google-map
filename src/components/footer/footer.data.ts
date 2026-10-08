import footerLogo from '@/assets/landing/logo-mark.svg';
import { NAV_LINKS } from '@/constants/navigation';
import type { FooterProps } from '@/typings/components/footer';

export const FOOTER_DEFAULTS: Required<FooterProps> = {
  logo: { src: footerLogo, alt: 'Area' },
  links: NAV_LINKS,
  year: new Date().getFullYear(),
  copyright: '© Area.',
};
