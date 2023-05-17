import { createElement } from 'react';

import { Children } from '@/shared/types';

interface IContainerProps {
  children: Children;
  as?: string;
  className?: string;
}

export function Container({
  as = 'div',
  className = '',
  children,
}: IContainerProps): JSX.Element {
  const containerClassName = `max-w-screen-lg w-11/12 m-auto ${className}`;

  return createElement(as, { className: containerClassName }, children);
}
