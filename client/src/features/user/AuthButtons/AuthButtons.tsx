'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { checkAuthentication, signOut } from '@/entities/user/api';
import {
  selectIsAuthentication,
  updateIsAuthentication,
} from '@/entities/user/userSlice';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux';
import { Button } from '@/shared/ui/Button';

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
    toast.info('You are signed out from your account!');
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
          <Link className="mr-2" href="/sign-in">
            <Button as="span">Sign in</Button>
          </Link>
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
