import { Benefits } from '@/components/benefits';
import { BigPicture } from '@/components/big-picture';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import { HowTo } from '@/components/how-to';
import { Location } from '@/components/location';
import { Navbar } from '@/components/navbar';
import { Specs } from '@/components/specs';
import { Testimonial } from '@/components/testimonial';
import { TrustedBy } from '@/components/trusted-by';

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
