import { SignInForm } from '@/widgets';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In Page',
  description: 'The page for sign in the site',
};

export default function SignInPage(): JSX.Element {
  return <SignInForm />;
}
