'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';

import {
  checkAuthentication,
  selectIsAuthentication,
  updateIsAuthentication,
  signOut,
} from '@/entities/user';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import { Button } from '@/shared/ui';

interface IAuthButtonsProps {
  className?: string;
}

export function AuthButtons({ className }: IAuthButtonsProps): JSX.Element {
  const dispatch = useAppDispatch();

  const globalIsAuth = useAppSelector(selectIsAuthentication);

  const { data: isAuthFromServer, isSuccess } = useQuery({
    queryKey: ['isAuthentication'],
    queryFn: checkAuthentication,
    refetchOnWindowFocus: false,
    refetchInterval: 1_800_000, // 30 minutes
  });

  const signOutButtonClickHandler = async (): Promise<void> => {
    await signOut();
    dispatch(updateIsAuthentication(false));
  };

  useEffect((): void => {
    if (!isSuccess) {
      return;
    }

    dispatch(updateIsAuthentication(isAuthFromServer));
  }, [isSuccess, isAuthFromServer, dispatch]);

  return (
    <div className={`flex items-center ${className}`}>
      {globalIsAuth ? (
        <Button styleType="bright" onClick={signOutButtonClickHandler}>
          Sign Out
        </Button>
      ) : (
        <>
          <Button as="span" className="mr-2">
            Sign in
          </Button>
          <Link href="/sign-up">
            <Button as="span" styleType="bright">
              Sign Up
            </Button>
          </Link>
        </>
      )}
    </div>
  );
}
