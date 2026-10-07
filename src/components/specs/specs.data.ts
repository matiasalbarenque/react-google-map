import type { SpecsProps } from "@/typings/components/specs";

export const SPECS_DEFAULTS: Required<SpecsProps> = {
  label: "Specs",
  title: "Why Choose Area?",
  description:
    "You need a solution that keeps up. That’s why we developed Area. A developer-friendly approach to streamline your business.",
  ctaLabel: "Discover More",
  competitors: [
    {
      name: "Area",
      highlighted: true,
      features: [
        { label: "Ultra-fast browsing", status: "yes" },
        { label: "Advanced AI insights", status: "yes" },
        { label: "Seamless integration", status: "yes" },
        { label: "Advanced AI insights", status: "yes" },
        { label: "Ultra-fast browsing", status: "yes" },
        { label: "Full UTF-8 support", status: "yes" },
      ],
    },
    {
      name: "WebSurge",
      features: [
        { label: "Fast browsing", status: "partial" },
        { label: "Basic AI recommendations", status: "partial" },
        { label: "Restricts customization", status: "partial" },
        { label: "Basic AI insights", status: "no" },
        { label: "Fast browsing", status: "partial" },
        { label: "Potential display errors", status: "no" },
      ],
    },
    {
      name: "HyperView",
      features: [
        { label: "Moderate speeds", status: "no" },
        { label: "No AI assistance", status: "no" },
        { label: "Steep learning curve", status: "no" },
        { label: "No AI assistance", status: "no" },
        { label: "Moderate speeds", status: "no" },
        { label: "Partial UTF-8 support", status: "no" },
      ],
    },
  ],
};
