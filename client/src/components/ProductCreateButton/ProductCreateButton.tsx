import { Button } from '@/shared/ui';
import Link from 'next/link';

export function ProductCreateButton(): JSX.Element {
  return (
    <Link href="/create-product">
      <Button as="span">Create Product</Button>
    </Link>
  );
}
