import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { Button } from '@/components/ui/button';
import type { ButtonProps } from '@/typings/components/ui/button';

const meta = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'outline'],
    },
    href: { control: 'text' },
    children: { control: 'text' },
    className: { control: 'text' },
  },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};

export const AsLink: Story = {
  args: {
    variant: 'primary',
    href: 'https://example.com',
    children: 'AsLink',
  },
};

export const InteractionExample: Story = {
  args: {
    variant: 'primary',
    children: 'Interaction Example',
  },
  play: async ({ canvas, userEvent }) => {
    // Find the button by its accessible name and verify it is visible.
    const button = canvas.getByRole('button', { name: 'Interaction Example' });
    await expect(button).toBeVisible();

    // Click the button and verify it receives focus.
    await userEvent.click(button);
    await expect(button).toHaveFocus();
  },
};
