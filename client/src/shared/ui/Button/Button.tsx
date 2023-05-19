import {
  ReactHTML,
  createElement,
  forwardRef,
  ButtonHTMLAttributes,
} from 'react';
import { clsx } from 'clsx';

import { clearClassNames } from '@/shared/helpers';

import { Children } from '@/shared';

type ButtonTypes = 'primary' | 'bright';

type ButtonProps = {
  children: Children;
  as?: keyof ReactHTML;
  className?: string;
  styleType?: ButtonTypes;
} & {
  [key in keyof ButtonHTMLAttributes<HTMLButtonElement>]: any;
};

const baseClasses = `px-4 py-1 rounded-md cursor-pointer`;

const primaryClasses = `
  hover:opacity-80
  active:opacity-60
`;

const brightClasses = `
  text-white
  bg-emerald-800
  hover:bg-emerald-700
  active:bg-emerald-900
`;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      as = 'button',
      className = '',
      styleType = 'primary',
      ...otherProps
    },
    ref,
  ): JSX.Element => {
    const buttonClassName = clearClassNames(`
    ${baseClasses}
    ${clsx(
      styleType === 'primary' && primaryClasses,
      styleType === 'bright' && brightClasses,
    )}
    ${className}
  `);

    return createElement(
      as,
      { className: buttonClassName, ...otherProps, ref },
      children,
    );
  },
);

Button.displayName = 'Button';
