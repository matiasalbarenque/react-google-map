import logo1 from "@/assets/landing/trusted-logo-1.png";
import logo2 from "@/assets/landing/trusted-logo-2.png";
import logo3 from "@/assets/landing/trusted-logo-3.png";
import logo4 from "@/assets/landing/trusted-logo-4.png";
import logo5 from "@/assets/landing/trusted-logo-5.png";
import logo6 from "@/assets/landing/trusted-logo-6.png";
import type { TrustedByProps } from "@/typings/components/trusted-by";

export const TRUSTED_BY_DEFAULTS: Required<TrustedByProps> = {
  label: "Trusted by:",
  logos: [
    { src: logo1, alt: "Logoipsum" },
    { src: logo2, alt: "Logoipsum" },
    { src: logo3, alt: "Logoipsum" },
    { src: logo4, alt: "Logoipsum" },
    { src: logo5, alt: "Logoipsum" },
    { src: logo6, alt: "Logoipsum" },
  ],
};
