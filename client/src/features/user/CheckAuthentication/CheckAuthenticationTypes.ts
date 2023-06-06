import { Children } from '@/shared/types/react';

interface IMessageType {
  message: string | JSX.Element | null;
  redirect?: never;
  infoMessage?: never;
}

interface IRedirectType {
  redirect: string;
  infoMessage: string;
  message?: never;
}

export type CheckAuthenticationProps = {
  children: Children;
} & (IMessageType | IRedirectType);
