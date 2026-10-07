import portrait from "@/assets/landing/testimonial-portrait.jpg";
import type { TestimonialProps } from "@/typings/components/testimonial";

export const TESTIMONIAL_DEFAULTS: Required<TestimonialProps> = {
  image: { src: portrait, alt: "A concrete sphere balanced between two larger spheres" },
  quote:
    "I was skeptical, but Area has completely transformed the way I manage my business. The data visualizations are so clear and intuitive, and the platform is so easy to use. I can't imagine running my company without it.",
  author: "John Smith",
  role: "Head of Data",
};
