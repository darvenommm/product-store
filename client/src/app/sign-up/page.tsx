import { SignUpForm } from '@/widgets';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up Page',
  description: 'The page for sign up the site',
};

export default function SignUpPage(): JSX.Element {
  return <SignUpForm />;
}
