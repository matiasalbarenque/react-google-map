import type { ImageAsset, Step } from './shared';

export type BigPictureProps = {
  image?: ImageAsset;
  title?: string;
  description?: string;
  steps?: Step[];
  ctaLabel?: string;
};
