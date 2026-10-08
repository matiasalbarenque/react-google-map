import type { ImageAsset, Step } from './shared';

export type HowToProps = {
  title?: string;
  ctaLabel?: string;
  steps?: Step[];
  image?: ImageAsset;
};
