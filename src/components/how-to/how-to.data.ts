import howToImage from '@/assets/landing/how-it-works-landscape.jpg';
import type { HowToProps } from '@/typings/components/how-to';

export const HOW_TO_DEFAULTS: Required<HowToProps> = {
  title: 'Map Your Success',
  ctaLabel: 'Get Started',
  steps: [
    {
      number: '01',
      title: 'Get Started',
      description:
        'With our intuitive setup, you’re up and running in minutes.',
    },
    {
      number: '02',
      title: 'Customize and Configure',
      description: 'Adapt Area to your specific requirements and preferences.',
    },
    {
      number: '03',
      title: 'Grow Your Business',
      description: 'Make informed decisions to exceed your goals.',
    },
  ],
  image: { src: howToImage, alt: 'An eye-catching landscape of green' },
};
