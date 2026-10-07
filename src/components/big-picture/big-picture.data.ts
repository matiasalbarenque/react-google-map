import bigPictureImage from "@/assets/landing/big-picture.jpg";
import type { BigPictureProps } from "@/typings/components/big-picture";

export const BIG_PICTURE_DEFAULTS: Required<BigPictureProps> = {
  image: { src: bigPictureImage, alt: "Three white cylindrical columns on a warm background" },
  title: "See the Big Picture",
  description:
    "Area turns your data into clear, vibrant visuals that show you exactly what's happening in each region.",
  steps: [
    {
      number: "01",
      title: "Spot Trends in Seconds",
      description: "No more digging through numbers.",
    },
    {
      number: "02",
      title: "Get Everyone on the Same Page",
      description: "Share easy-to-understand reports with your team.",
    },
    {
      number: "03",
      title: "Make Presentations Pop",
      description: "Interactive maps and dashboards keep your audience engaged.",
    },
    {
      number: "04",
      title: "Your Global Snapshot",
      description: "Get a quick, clear overview of your entire operation.",
    },
  ],
  ctaLabel: "Discover More",
};
