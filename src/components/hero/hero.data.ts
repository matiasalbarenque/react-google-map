import heroScreen from "@/assets/landing/hero-dashboard.png";
import type { HeroProps } from "@/typings/components/hero";

export const HERO_DEFAULTS: Required<HeroProps> = {
  title: "Browse everything.",
  image: { src: heroScreen, alt: "Area dashboard showing data points over a landscape" },
};
