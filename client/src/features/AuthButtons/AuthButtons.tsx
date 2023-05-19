import Link from 'next/link';

import { Button } from '@/shared';

interface IAuthButtonsProps {
  className?: string;
}

export function AuthButtons({ className }: IAuthButtonsProps): JSX.Element {
  return (
    <div className={`flex items-center ${className}`}>
      <Button as="span" className="mr-2">
        Sign in
      </Button>
      <Button as="span" styleType="bright">
        <Link href="/sign-up">Sign Up</Link>
      </Button>
    </div>
  );
}
