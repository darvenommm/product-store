'use client';

import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import { useAppSelector } from '@/shared/hooks';
import { selectIsAuthentication } from '@/entities/user';

import type { CheckAuthenticationProps } from './CheckAuthenticationTypes';

export function CheckAuthentication({
  children,
  ...otherProps
}: CheckAuthenticationProps): JSX.Element | null {
  const router = useRouter();

  const isAuthentication = useAppSelector(selectIsAuthentication);

  if (isAuthentication) {
    return <>{children}</>;
  }

  const isRedirect = 'redirect' in otherProps && otherProps.redirect;

  if (isRedirect) {
    router.push(otherProps.redirect);
    toast.info(otherProps.infoMessage);
  }

  const isMessage = 'message' in otherProps && otherProps.message;

  if (isMessage) {
    return <span>{otherProps.message}</span>;
  }

  return null;
}
