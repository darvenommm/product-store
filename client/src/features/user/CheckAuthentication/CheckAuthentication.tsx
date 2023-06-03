'use client';

import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import { useAppSelector } from '@/shared/hooks';
import { selectIsAuthentication } from '@/entities/user';

import type { CheckAuthenticationProps } from './CheckAuthenticationTypes';

export function CheckAuthentication({
  children,
  type = 'redirect',
  ...otherProps
}: CheckAuthenticationProps): JSX.Element | null {
  const router = useRouter();

  const isAuthentication = useAppSelector(selectIsAuthentication);

  if (isAuthentication) {
    return <div>{children}</div>;
  }

  if (
    type === 'redirect' &&
    'redirect' in otherProps &&
    'infoMessage' in otherProps
  ) {
    router.push(otherProps.redirect);
    toast.info(otherProps.infoMessage);
  } else if (type === 'message' && 'message' in otherProps) {
    return <span>{otherProps.message}</span>;
  }

  return null;
}
