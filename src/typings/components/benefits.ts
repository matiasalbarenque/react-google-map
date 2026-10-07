import type { ImageAsset } from "./shared";

export type Benefit = {
  id: string;
  icon: ImageAsset;
  title: string;
  description: string;
};
export type BenefitsProps = {
  label?: string;
  title?: string;
  subtitle?: string;
  items?: Benefit[];
};
