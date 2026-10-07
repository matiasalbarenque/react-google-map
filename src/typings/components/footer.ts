import type { ImageAsset, NavLink } from "./shared";

export type FooterProps = {
  logo?: ImageAsset;
  links?: NavLink[];
  year?: number;
  copyright?: string;
};
