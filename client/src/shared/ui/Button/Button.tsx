import { ReactHTML, createElement } from 'react';
import { clsx } from 'clsx';

import { clearClassNames } from '@/shared/helpers';

import { Children } from '@/shared';

type ButtonTypes = 'primary' | 'bright';

interface IButtonProps {
  children: Children;
  as?: keyof ReactHTML;
  className?: string;
  styleType?: ButtonTypes;
}

const baseClasses = `px-4 py-1 rounded-md`;

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

export function Button({
  children,
  as = 'button',
  className = '',
  styleType = 'primary',
}: IButtonProps): JSX.Element {
  const buttonClassName = clearClassNames(`
    ${baseClasses}
    ${clsx(
      styleType === 'primary' && primaryClasses,
      styleType === 'bright' && brightClasses,
    )}
    ${className}
  `);

  return createElement(as, { className: buttonClassName }, children);
}
