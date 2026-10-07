import type { ImageAsset, NavLink } from "./shared";

export type NavbarProps = {
  logo?: ImageAsset;
  links?: NavLink[];
  ctaLabel?: string;
  ctaHref?: string;
};
