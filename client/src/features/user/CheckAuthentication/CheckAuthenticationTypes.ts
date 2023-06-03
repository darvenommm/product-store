import { Children } from '@/shared/types';

interface IMessageType {
  type: 'message';
  message: string | JSX.Element;
}

interface IRedirectType {
  type: 'redirect';
  redirect: string;
  infoMessage: string;
}

export type CheckAuthenticationProps = {
  children: Children;
} & (IMessageType | IRedirectType);
