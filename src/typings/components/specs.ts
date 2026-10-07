export type FeatureStatus = "yes" | "partial" | "no";
export type Feature = { label: string; status: FeatureStatus };
export type Competitor = {
  name: string;
  highlighted?: boolean;
  features: Feature[];
};
export type SpecsProps = {
  label?: string;
  title?: string;
  description?: string;
  ctaLabel?: string;
  competitors?: Competitor[];
};
