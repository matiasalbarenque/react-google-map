import benefitGlobal from '@/assets/landing/benefit-global.svg';
import benefitGrowth from '@/assets/landing/benefit-growth.svg';
import benefitInsights from '@/assets/landing/benefit-insights.svg';
import benefitLanguage from '@/assets/landing/benefit-language.svg';
import type { BenefitsProps } from '@/typings/components/benefits';

export const BENEFITS_DEFAULTS: Required<BenefitsProps> = {
  label: 'Benefits',
  title: 'We’ve cracked the code.',
  subtitle: 'Area provides real insights, without the data overload.',
  items: [
    {
      id: 'amplify-insights',
      icon: { src: benefitInsights, alt: '' },
      title: 'Amplify Insights',
      description:
        'Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.',
    },
    {
      id: 'control-global-presence',
      icon: { src: benefitGlobal, alt: '' },
      title: 'Control Your Global Presence',
      description:
        'Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere.',
    },
    {
      id: 'remove-language-barriers',
      icon: { src: benefitLanguage, alt: '' },
      title: 'Remove Language Barriers',
      description:
        'Adapt to diverse markets with built-in localization for clear communication and enhanced user experience.',
    },
    {
      id: 'visualize-growth',
      icon: { src: benefitGrowth, alt: '' },
      title: 'Visualize Growth',
      description:
        'Generate precise, visually compelling reports that illustrate your growth trajectories across all regions.',
    },
  ],
};
