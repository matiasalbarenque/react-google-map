import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TrustedBy } from "@/components/trusted-by";
import { Benefits } from "@/components/benefits";
import { BigPicture } from "@/components/big-picture";
import { Specs } from "@/components/specs";
import { Testimonial } from "@/components/testimonial";
import { HowTo } from "@/components/how-to";
import { Location } from "@/components/location";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export const HomePage = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <TrustedBy />
      <Benefits />
      <BigPicture />
      <Specs />
      <Testimonial />
      <HowTo />
      <Location />
      <Contact />
    </main>
    <Footer />
  </>
);
