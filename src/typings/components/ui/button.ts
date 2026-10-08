import type * as React from 'react';

export type ButtonVariant = 'primary' | 'outline';
export type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  className?: string;
};
